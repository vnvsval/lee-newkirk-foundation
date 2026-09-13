"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const topicLabels: Record<string, string> = {
  general: "General question",
  volunteer: "Volunteering",
  "host-location": "Hosting a collection location",
  partner: "Business / community partnership",
  promote: "Helping promote the campaign",
  donate: "Giving right now",
};

const initialState: ContactFormState = { status: "idle" };

export function ContactForm({ initialTopic }: { initialTopic?: string }) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );
  const [startedAt] = useState(() => Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const topic =
    initialTopic && initialTopic in topicLabels ? initialTopic : "general";

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-5 rounded-2xl border border-line bg-paper p-6 sm:p-8"
      noValidate
    >
      {/* Honeypot — hidden from sighted and screen-reader users alike. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-ink focus-visible:border-navy"
          aria-invalid={Boolean(state.fieldErrors?.name)}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
        />
        {state.fieldErrors?.name && (
          <p id="name-error" className="mt-1 text-sm text-error">
            {state.fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-ink focus-visible:border-navy"
          aria-invalid={Boolean(state.fieldErrors?.email)}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="mt-1 text-sm text-error">
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-semibold text-ink">
          What&rsquo;s this about?
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue={topic}
          className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2 text-ink focus-visible:border-navy"
        >
          {Object.entries(topicLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-ink focus-visible:border-navy"
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={
            state.fieldErrors?.message ? "message-error" : undefined
          }
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-1 text-sm text-error">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-navy px-6 py-3 text-base font-semibold text-paper hover:bg-navy-deep disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={
          state.status === "success"
            ? "text-sm font-medium text-success"
            : state.status === "error"
              ? "text-sm font-medium text-error"
              : "sr-only"
        }
      >
        {state.message}
      </p>
    </form>
  );
}
