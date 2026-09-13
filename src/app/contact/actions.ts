"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { sendContactNotification } from "@/lib/email";

const topics = [
  "general",
  "volunteer",
  "host-location",
  "partner",
  "promote",
  "donate",
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  topic: z.enum(topics),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail.")
    .max(3000),
  // Honeypot: a real visitor never sees or fills this field.
  company: z.string().max(0, "Spam check failed.").optional().default(""),
  // Set client-side on mount; rejects submissions that arrive suspiciously
  // fast, a common bot signature.
  startedAt: z.coerce.number(),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "topic" | "message", string>>;
};

const MIN_FILL_TIME_MS = 2500;

// Best-effort in-memory rate limit. Resets on cold start / redeploy, which
// is an acceptable trade-off for a low-traffic contact form — it isn't a
// substitute for honeypot + timing checks, just an extra layer.
const submissionsByIp = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many messages sent recently. Please try again later.",
    };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
    company: formData.get("company"),
    startedAt: formData.get("startedAt"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "company") continue; // never reveal the honeypot to a real user
      if (
        key === "name" ||
        key === "email" ||
        key === "topic" ||
        key === "message"
      ) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const { name, email, topic, message, company, startedAt } = parsed.data;

  // Honeypot tripped or submitted too fast to be a human — fail silently
  // with a generic success message so bots don't learn anything.
  if (company.length > 0 || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return {
      status: "success",
      message: "Thanks for reaching out — we'll be in touch soon.",
    };
  }

  await sendContactNotification({ name, email, topic, message });

  return {
    status: "success",
    message: "Thanks for reaching out — we'll be in touch soon.",
  };
}
