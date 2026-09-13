import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Lets filltherooms.org and theleeannenewkirkfoundation.com share one Next.js
 * app instead of running two separate sites.
 *
 * On the campaign domain, the homepage ("/") is rewritten to the Fill the
 * Rooms campaign page so filltherooms.org lands visitors directly in the
 * campaign, while every other path (/about, /donate, /contact, etc.)
 * resolves normally on both domains. The browser's address bar keeps
 * showing filltherooms.org — this is a rewrite, not a redirect.
 *
 * To finish wiring this up in production, add both domains to the same
 * Vercel project (see README.md "Domains" section).
 */
const CAMPAIGN_HOSTS = ["filltherooms.org", "www.filltherooms.org"];

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0];

  if (CAMPAIGN_HOSTS.includes(hostname) && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/fill-the-rooms", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
