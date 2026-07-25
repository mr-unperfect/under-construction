import Image from "next/image";
import Link from "next/link";
import { Rss } from "lucide-react";
import { assetPath, site, socials } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <Link className="inline-flex items-center gap-3" href="/">
            <Image alt="" height={38} src={site.logo} width={38} />
            <span className="font-bold">{site.name}</span>
          </Link>
          <p className="text-muted mt-3 max-w-2xl text-sm leading-6">
            © {year} {site.copyrightOwner}. Temporary identity and legal details for a first public-ready draft.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socials.slice(0, 5).map((social) => {
            const Icon = social.icon;
            return (
              <a
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
              >
                <Icon size={18} />
              </a>
            );
          })}
          <a
            aria-label="RSS feed"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
            href={assetPath("/rss.xml")}
          >
            <Rss size={18} />
          </a>
          <ThemeToggle compact />
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-[color:var(--muted)] lg:col-span-2">
          <Link className="hover:text-[color:var(--foreground)]" href="/legal">
            Legal Notice
          </Link>
          <Link className="hover:text-[color:var(--foreground)]" href="/privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
