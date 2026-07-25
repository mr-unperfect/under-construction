import { socials } from "@/data/site";

export function SocialGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            className="surface group rounded-3xl p-4 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            href={social.href}
            key={social.label}
            rel="noreferrer"
            target="_blank"
          >
            <span className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-sm font-bold">{social.label}</span>
                <span className="text-muted block text-sm">{social.handle}</span>
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
