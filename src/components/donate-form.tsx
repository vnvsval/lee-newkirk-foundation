"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { donationConfig, donationDesignations, suggestedAmounts } from "@/lib/donation-config";

/**
 * A fully-built donation UI so the foundation can review and approve the
 * giving experience before any processor is connected. Submitting does
 * NOT charge a card or send money anywhere — see donation-config.ts.
 */
export function DonateForm() {
  const [amount, setAmount] = useState<number | "custom">(suggestedAmounts[1]);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [designation, setDesignation] = useState<
    (typeof donationDesignations)[number]["id"]
  >(donationDesignations[0].id);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  // Once a processor is connected, hand off to the real checkout instead
  // of rendering the preview form below. The redirect runs from an effect
  // (not during render) so this stays safe to render on the server too.
  useEffect(() => {
    if (donationConfig.enabled && donationConfig.checkoutUrl) {
      window.location.href = donationConfig.checkoutUrl;
    }
  }, []);

  if (donationConfig.enabled && donationConfig.checkoutUrl) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
      aria-describedby="donate-status-note"
    >
      <p
        id="donate-status-note"
        className="rounded-lg bg-gold-soft px-4 py-3 text-sm font-medium text-ink"
      >
        Online giving isn&rsquo;t active yet — we&rsquo;re finalizing which
        donation processor to use. This form previews how giving will
        work; submitting it won&rsquo;t charge you anything.
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-ink">Frequency</legend>
        <div className="mt-2 flex gap-2" role="radiogroup">
          {(["once", "monthly"] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={frequency === option}
              onClick={() => setFrequency(option)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium",
                frequency === option
                  ? "bg-navy text-paper"
                  : "bg-paper-dim text-ink-soft hover:bg-navy/10"
              )}
            >
              {option === "once" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-ink">Amount</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {suggestedAmounts.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={amount === value}
              onClick={() => {
                setAmount(value);
                setCustomAmount("");
              }}
              className={cn(
                "rounded-lg border px-4 py-3 text-sm font-semibold",
                amount === value
                  ? "border-navy bg-navy text-paper"
                  : "border-line text-ink hover:border-navy"
              )}
            >
              ${value}
            </button>
          ))}
        </div>
        <label className="mt-3 block text-sm text-ink-soft" htmlFor="custom-amount">
          Or enter a custom amount
          <div className="mt-1 flex items-center rounded-lg border border-line px-3 focus-within:border-navy">
            <span aria-hidden="true" className="text-ink-soft">
              $
            </span>
            <input
              id="custom-amount"
              type="number"
              min={1}
              inputMode="decimal"
              value={customAmount}
              onChange={(event) => {
                setCustomAmount(event.target.value);
                setAmount("custom");
              }}
              placeholder="0"
              className="w-full bg-transparent px-2 py-2 text-ink outline-none"
            />
          </div>
        </label>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-ink">
          Where should this go?
        </legend>
        <div className="mt-2 space-y-2">
          {donationDesignations.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 text-sm text-ink"
            >
              <input
                type="radio"
                name="designation"
                value={option.id}
                checked={designation === option.id}
                onChange={() => setDesignation(option.id)}
                className="h-4 w-4 accent-navy"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-berry px-6 py-3 text-base font-semibold text-paper hover:bg-berry-deep"
      >
        Give {amount === "custom" ? (customAmount ? `$${customAmount}` : "") : `$${amount}`}
        {frequency === "monthly" ? " / month" : ""}
      </button>

      {submitted && (
        <p role="status" className="mt-4 text-sm font-medium text-success">
          This is a preview of the giving experience — online payments
          aren&rsquo;t connected yet, so nothing was submitted or charged.
          If you&rsquo;d like to give right now,{" "}
          <a href="/contact" className="underline">
            contact us
          </a>{" "}
          and we&rsquo;ll arrange it directly.
        </p>
      )}
    </form>
  );
}
