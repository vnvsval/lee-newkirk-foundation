import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

export type ContactSubmission = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

/**
 * Sends the contact form submission to the foundation's inbox.
 *
 * Until RESEND_API_KEY is set (see .env.example), this quietly logs the
 * submission on the server instead of failing, so the form always gives
 * the visitor a clean confirmation while local/dev environments and the
 * pre-launch site keep working without a real email provider configured.
 */
export async function sendContactNotification(
  submission: ContactSubmission
): Promise<{ delivered: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_FORM_TO_EMAIL ?? siteConfig.contactEmail;

  if (!apiKey) {
    console.warn(
      "[contact-form] RESEND_API_KEY is not set — logging submission instead of emailing it.",
      submission
    );
    return { delivered: false };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: process.env.CONTACT_FORM_FROM_EMAIL ?? "Fill the Rooms Website <onboarding@resend.dev>",
    to: toAddress,
    replyTo: submission.email,
    subject: `New contact form message: ${submission.topic}`,
    text: [
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Topic: ${submission.topic}`,
      "",
      submission.message,
    ].join("\n"),
  });

  return { delivered: true };
}
