/**
 * Donation processor configuration.
 *
 * No payment processor has been chosen yet, so online giving is
 * intentionally NOT wired to move money. The Donate page renders a full
 * preview of the giving experience (amount, frequency, designation) so the
 * foundation can see and approve the UX, but submitting it does not charge
 * anyone or invent a fake transaction.
 *
 * TO ACTIVATE REAL DONATIONS LATER:
 * 1. Choose a processor built for nonprofits (e.g. Stripe Payment Links /
 *    Checkout, Givebutter, Donorbox, Every.org). Each has different fee
 *    structures and setup steps — this is a decision for the foundation,
 *    not a technical one.
 * 2. Add the processor's publishable key / embed URL as an environment
 *    variable (see .env.example).
 * 3. Set `enabled: true` below and point `checkoutUrl` (or the relevant
 *    embed) at the real processor.
 * 4. Remove the "coming soon" notice in src/app/donate/page.tsx.
 */

export const donationConfig = {
  enabled: false,
  provider: null as string | null,
  /** Where the "Give now" button should send donors once a processor is live. */
  checkoutUrl: process.env.NEXT_PUBLIC_DONATION_CHECKOUT_URL ?? null,
} as const;

export const suggestedAmounts = [25, 50, 100, 250] as const;

export const donationDesignations = [
  { id: "fill-the-rooms", label: "Fill the Rooms (this year's toy drive)" },
  { id: "general", label: "Greatest need (general foundation fund)" },
] as const;
