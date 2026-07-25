"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation, site, socials } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const primarySocials = socials.filter((social) => ["YouTube", "GitHub", "Email"].includes(social.label));

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--background)]/78 backdrop-blur-2xl">
      <nav aria-label="Main navigation" className="section-shell flex h-16 items-center justify-between gap-4">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <Image alt="" height={36} priority src={site.logo} width={36} />
          <span className="truncate text-sm font-bold tracking-[0.08em] uppercase">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              className="rounded-full px-3 py-2 text-sm font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {primarySocials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
              >
                <Icon size={17} />
              </a>
            );
          })}
          <ThemeToggle compact />
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open ? (
        <div className="section-shell pb-5 lg:hidden" id="mobile-menu">
          <div className="surface-strong rounded-3xl p-3">
            {navigation.map((item) => (
              <a
                className="block rounded-2xl px-4 py-3 text-base font-semibold text-[color:var(--muted)] hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--foreground)]"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-[color:var(--line)] px-2 pt-4">
              <div className="flex gap-2">
                {primarySocials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--muted)]"
                      href={social.href}
                      key={social.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              <ThemeToggle compact />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
