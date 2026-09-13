import Link from "next/link";
import { Container } from "@/components/container";
import { footerNav, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy text-paper/90">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-serif text-xl font-semibold text-paper">
            {siteConfig.orgName}
          </p>
          <p className="mt-3 max-w-sm text-sm text-paper/75">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-wide text-paper/60">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-paper/85 hover:text-paper hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-paper/60">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper/85">
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="hover:text-paper hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </li>
            {siteConfig.contactPhone && <li>{siteConfig.contactPhone}</li>}
            {siteConfig.social.facebook && (
              <li>
                <a
                  href={siteConfig.social.facebook}
                  className="hover:text-paper hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            )}
            {siteConfig.social.instagram && (
              <li>
                <a
                  href={siteConfig.social.instagram}
                  className="hover:text-paper hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-paper/15 py-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.orgName}. All rights
          reserved.
        </p>
        <p>
          {siteConfig.nonprofitStatus === "501c3" && siteConfig.ein
            ? `A 501(c)(3) nonprofit organization. EIN ${siteConfig.ein}.`
            : "Nonprofit status is currently in progress."}
        </p>
      </Container>
    </footer>
  );
}
