import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Mail,
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionHeading } from "@/components/section-heading";
import { SocialGrid } from "@/components/social-grid";
import {
  biography,
  contactOptions,
  contentPillars,
  featuredContent,
  images,
  newsletter,
  projects,
  recommendedTools,
  site,
  socials,
  values,
} from "@/data/site";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default function Home() {
  const heroSocials = socials.filter((social) => ["YouTube", "GitHub", "Mastodon", "Email"].includes(social.label));

  return (
    <main>
      <section className="section-shell grid min-h-[calc(100svh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div className="reveal">
          <p className="section-eyebrow">{site.title}</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,9vw,7.7rem)] font-[780] leading-[0.88] tracking-normal">
            {site.headline}
          </h1>
          <p className="section-copy mt-7 max-w-2xl">{site.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#content">
              Explore the work
              <ArrowRight size={18} />
            </a>
            <a className="button-secondary" href={`mailto:${site.email}`}>
              <Mail size={18} />
              Start a conversation
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {heroSocials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-2 text-sm font-semibold text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
                  href={social.href}
                  key={social.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon size={16} />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="reveal relative min-h-[580px]" style={{ animationDelay: "90ms" }}>
          <div className="absolute inset-x-0 top-10 h-72 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
          <div className="surface-strong relative mx-auto max-w-[520px] overflow-hidden rounded-[2rem] p-3">
            <Image
              alt={images.portrait.alt}
              className="aspect-[4/5] rounded-[1.45rem] object-cover"
              height={1280}
              priority
              src={images.portrait.src}
              width={960}
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/20 bg-black/45 p-4 text-white shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-semibold text-white/70">Current focus</p>
              <p className="mt-1 text-lg font-bold">Making private systems feel usable, modern, and calm.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12" id="content">
        <SectionHeading
          copy="A complete temporary editorial system for videos, guides, build logs, and opinion pieces. Replace entries in the central content file when real work is ready."
          eyebrow="Featured Content"
          title="Thoughtful technology content with a human pace."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {featuredContent.map((item, index) => (
            <a
              className="surface group overflow-hidden rounded-[1.75rem] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
              href={item.href}
              key={item.title}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              target={item.href.startsWith("http") ? "_blank" : undefined}
            >
              <div className="grid gap-0 lg:grid-cols-[0.85fr_1fr]">
                <Image
                  alt={`${item.title} thumbnail`}
                  className="h-64 w-full object-cover lg:h-full"
                  height={620}
                  src={item.image}
                  width={900}
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--accent-strong)]">
                    <span>{item.type}</span>
                    <span aria-hidden="true">/</span>
                    <span>{item.platform}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold leading-tight">{item.title}</h3>
                  <p className="text-muted mt-3 leading-7">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 text-sm font-semibold text-[color:var(--muted)]">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={16} />
                      {formatDate(item.date)}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[color:var(--accent-strong)]">
                      Open
                      {index === 0 ? <Play size={16} /> : <ExternalLink size={16} />}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16" id="pillars">
        <div className="section-shell">
          <SectionHeading
            copy="The brand is built around topics that help people own more of their tools, habits, and attention."
            eyebrow="Content Pillars"
            title="Privacy, independence, and modern tech without the theatrics."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contentPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="surface rounded-3xl p-6 transition hover:-translate-y-1" key={pillar.title}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{pillar.title}</h3>
                  <p className="text-muted mt-3 leading-7">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.88fr_1.12fr]" id="about">
        <div className="overflow-hidden rounded-[2rem]">
          <Image
            alt={images.studio.alt}
            className="aspect-[4/3] h-full w-full object-cover"
            height={1000}
            src={images.studio.src}
            width={1600}
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title mt-4">A calm voice for complicated digital choices.</h2>
          <p className="section-copy mt-6">{biography.short}</p>
          <p className="text-muted mt-5 text-base leading-8">{biography.long}</p>
          <p className="text-muted mt-5 text-base leading-8">{biography.philosophy}</p>
          <div className="mt-8 grid gap-3">
            {values.map((value) => (
              <p className="flex items-start gap-3 text-sm font-semibold" key={value}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-[color:var(--accent-strong)]" size={18} />
                {value}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16" id="tools">
        <SectionHeading
          copy="A curated editorial set of tools Mara would discuss. Recommendations must be reviewed and updated before monetized publishing."
          eyebrow="Recommended Tools"
          title="Useful defaults for more private digital routines."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recommendedTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <article className="surface rounded-3xl p-5" key={tool.name}>
                <p className="section-eyebrow text-[0.68rem]">{tool.category}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                </div>
                <p className="text-muted mt-4 leading-7">{tool.description}</p>
              </article>
            );
          })}
        </div>
        <p className="text-muted mt-5 text-sm">
          Optional affiliate structure is not active. Add clear disclosure before using affiliate links.
        </p>
      </section>

      <section className="section-shell py-16" id="projects">
        <SectionHeading
          copy="Temporary but realistic projects that show the intended brand direction: practical, independent, and useful."
          eyebrow="Selected Projects"
          title="Small systems for people who want more control."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article className="surface overflow-hidden rounded-[1.75rem]" key={project.title}>
              <Image
                alt={`${project.title} project visual`}
                className="aspect-[1.45] w-full object-cover"
                height={620}
                src={project.image}
                width={900}
              />
              <div className="p-6">
                <p className="text-sm font-bold text-[color:var(--accent-strong)]">{project.status}</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight">{project.title}</h3>
                <p className="text-muted mt-3 leading-7">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs font-bold text-[color:var(--muted)]"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a className="button-secondary min-h-10 px-4 py-2 text-sm" href={project.github}>
                    GitHub
                  </a>
                  <a className="button-primary min-h-10 px-4 py-2 text-sm" href={project.live}>
                    Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16" id="newsletter">
        <div className="section-shell surface-strong grid gap-8 overflow-hidden rounded-[2rem] p-6 md:p-10 lg:grid-cols-[1fr_0.82fr]">
          <div>
            <p className="section-eyebrow">Newsletter</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">{newsletter.name}</h2>
            <p className="section-copy mt-5 max-w-2xl">{newsletter.promise}</p>
            <NewsletterForm />
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-[1.5rem]">
            <Image
              alt={images.abstract.alt}
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              src={images.abstract.src}
            />
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.88fr_1.12fr]" id="contact">
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mt-4">For useful products, careful stories, and honest conversations.</h2>
          <p className="section-copy mt-6">
            Mara collaborates with privacy-friendly tools, independent software teams, publishers, educators, and
            communities that want technology explained without hype.
          </p>
          <div className="mt-8 grid gap-3">
            {contactOptions.map((option) => (
              <a className="surface rounded-3xl p-5 transition hover:-translate-y-1" href={option.href} key={option.title}>
                <h3 className="text-lg font-bold">{option.title}</h3>
                <p className="text-muted mt-2 leading-7">{option.description}</p>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-5 flex items-center gap-2 text-sm font-bold text-[color:var(--accent-strong)]">
            <Sparkles size={17} />
            Social links
          </div>
          <SocialGrid />
        </div>
      </section>
    </main>
  );
}
