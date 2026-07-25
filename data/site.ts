import {
  Bot,
  BrainCircuit,
  Code2,
  Fingerprint,
  Globe2,
  KeyRound,
  Laptop,
  LockKeyhole,
  Mail,
  MessageCircle,
  Newspaper,
  Radio,
  ShieldCheck,
  Sparkles,
  Video,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

export type ImageAsset = {
  src: string;
  alt: string;
  replacementNote: string;
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: `/${string}`) {
  return `${basePath}${path}`;
}

const siteUrl = "https://mr-unperfect.github.io/under-construction";

export const site = {
  url: siteUrl,
  name: "Mara Vale",
  shortName: "Mara",
  monogram: "MV",
  title: "Privacy Educator & Technology Creator",
  tagline: "Clear thinking for private, independent digital life.",
  headline: "Privacy, technology, and digital independence without the panic.",
  description:
    "Mara Vale creates calm, practical content about privacy-friendly software, security basics, open-source tools, Linux, automation, and responsible modern technology.",
  mission:
    "Make digital independence feel realistic for normal people, not reserved for experts with unlimited time.",
  email: "hello@maravale.studio",
  businessEmail: "partnerships@maravale.studio",
  newsletterName: "Quiet Systems",
  copyrightOwner: "Mara Vale Studio",
  legalCity: "Berlin, Germany",
  legalName: "Mara Vale Studio",
  logo: assetPath("/assets/brand-mark.svg"),
  favicon: assetPath("/assets/favicon.svg"),
  ogImage: `${siteUrl}/assets/og-image.webp`,
} as const;

export const seo = {
  title: `${site.name} - ${site.title}`,
  description: site.description,
  canonical: site.url,
  keywords: [
    "digital privacy",
    "technology creator",
    "privacy-friendly software",
    "self-hosting",
    "Linux",
    "automation",
    "cybersecurity basics",
    "digital independence",
  ],
} as const;

export const images = {
  portrait: {
    src: assetPath("/assets/creator-portrait.webp"),
    alt: "Fictional creator Mara Vale in a calm modern technology studio.",
    replacementNote:
      "Replace with a real creator portrait, ideally 4:5 vertical, minimum 960 by 1200 pixels.",
  },
  studio: {
    src: assetPath("/assets/studio-workspace.webp"),
    alt: "A calm technology workspace with a laptop, notebook, and privacy-focused desk setup.",
    replacementNote:
      "Replace with an editorial desk or studio image, landscape crop, minimum 1600 by 1000 pixels.",
  },
  abstract: {
    src: assetPath("/assets/privacy-abstract.webp"),
    alt: "Abstract privacy and data ownership visual with subtle interface layers.",
    replacementNote:
      "Replace with a brand abstract, article cover, or campaign visual, landscape crop.",
  },
  projectCollage: {
    src: assetPath("/assets/project-collage.webp"),
    alt: "Editorial mockup collage of privacy guides, dashboards, and automation workflows.",
    replacementNote:
      "Replace with project screenshots or product mockups, landscape crop.",
  },
} satisfies Record<string, ImageAsset>;

export const navigation = [
  { label: "Content", href: "#content" },
  { label: "Pillars", href: "#pillars" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials: SocialLink[] = [
  { label: "YouTube", handle: "@maravale", href: "https://youtube.com/@maravale", icon: Video },
  { label: "Instagram", handle: "@mara.vale", href: "https://instagram.com/mara.vale", icon: Sparkles },
  { label: "TikTok", handle: "@maravale", href: "https://tiktok.com/@maravale", icon: Radio },
  { label: "X", handle: "@mara_vale", href: "https://x.com/mara_vale", icon: MessageCircle },
  { label: "LinkedIn", handle: "mara-vale", href: "https://linkedin.com/in/mara-vale", icon: Newspaper },
  { label: "GitHub", handle: "maravale", href: "https://github.com/maravale", icon: Code2 },
  { label: "Mastodon", handle: "@mara@indieweb.social", href: "https://indieweb.social/@mara", icon: Globe2 },
  { label: "Bluesky", handle: "@maravale.dev", href: "https://bsky.app/profile/maravale.dev", icon: MessageCircle },
  { label: "Email", handle: site.email, href: `mailto:${site.email}`, icon: Mail },
];

export const biography = {
  short:
    "Mara Vale is a privacy and technology creator who helps people make calmer, more deliberate choices about the tools they use every day.",
  long:
    "Mara began as a systems-minded designer who kept noticing the same problem: people wanted better privacy and more control, but the advice around it often sounded either too vague or too extreme. Her work translates practical security, open-source tools, Linux, self-hosting, automation, and AI privacy questions into plain decisions that people can actually act on.",
  philosophy:
    "The goal is not to disappear from the internet. The goal is to understand the tradeoffs, reduce dependency where it matters, and build a digital life that respects attention, autonomy, and ownership.",
} as const;

export const values = [
  "Practical privacy over fear-driven purity",
  "Open tools, honest tradeoffs, and clear defaults",
  "Security habits that survive real life",
  "Independent systems without elitist gatekeeping",
] as const;

export const contentPillars = [
  {
    title: "Digital Privacy",
    description:
      "Readable guides on data exposure, app permissions, trackers, private browsing, and everyday settings that matter.",
    icon: Fingerprint,
  },
  {
    title: "Security Basics",
    description:
      "Password managers, two-factor authentication, backups, device hygiene, and threat modeling without scare tactics.",
    icon: ShieldCheck,
  },
  {
    title: "Open Source",
    description:
      "Software recommendations and migration paths for people who want transparent, durable tools.",
    icon: Code2,
  },
  {
    title: "Self-Hosting",
    description:
      "Home servers, private cloud workflows, notes, photos, dashboards, and services that can be owned and understood.",
    icon: Wifi,
  },
  {
    title: "Automation",
    description:
      "Small workflows that reduce digital friction across files, messages, smart home devices, and creative work.",
    icon: Bot,
  },
  {
    title: "AI & Privacy",
    description:
      "Clear takes on model choice, data boundaries, local-first workflows, and responsible use of modern AI tools.",
    icon: BrainCircuit,
  },
] as const;

export const featuredContent = [
  {
    title: "The Calm Privacy Audit I Run Every Month",
    description:
      "A 25-minute walkthrough for reducing data leaks without turning your phone into a research project.",
    type: "Video Guide",
    date: "2026-07-18",
    platform: "YouTube",
    href: "https://youtube.com/@maravale",
    image: assetPath("/assets/privacy-guide.webp"),
  },
  {
    title: "Password Managers Are Not the Hard Part",
    description:
      "Why the real upgrade is recovery planning, device trust, and making secure habits boring enough to repeat.",
    type: "Essay",
    date: "2026-07-09",
    platform: "Newsletter",
    href: "#newsletter",
    image: assetPath("/assets/privacy-abstract.webp"),
  },
  {
    title: "A Private Home Dashboard That Does Less",
    description:
      "Design notes from a home network monitor built to be useful, quiet, and understandable at a glance.",
    type: "Build Log",
    date: "2026-06-27",
    platform: "GitHub",
    href: "#projects",
    image: assetPath("/assets/home-lab.webp"),
  },
  {
    title: "AI Notes Without Handing Over Your Whole Brain",
    description:
      "A practical comparison of local-first notes, encrypted sync, and where cloud AI can still make sense.",
    type: "Explainer",
    date: "2026-06-12",
    platform: "Website",
    href: "#content",
    image: assetPath("/assets/automation-workflows.webp"),
  },
] as const;

export const recommendedTools = [
  {
    category: "Password Management",
    name: "Bitwarden",
    description:
      "A widely used password manager with cross-platform apps and a practical path for families and teams.",
    icon: KeyRound,
  },
  {
    category: "Private Browsing",
    name: "Firefox + uBlock Origin",
    description:
      "A flexible browser setup for people who want meaningful controls without leaving the modern web behind.",
    icon: Globe2,
  },
  {
    category: "Secure Communication",
    name: "Signal",
    description:
      "A strong default for private messaging when the people you talk to need something simple and reliable.",
    icon: LockKeyhole,
  },
  {
    category: "Self-Hosted Cloud",
    name: "Nextcloud",
    description:
      "A capable private workspace for files, calendars, contacts, and collaboration when you can maintain it.",
    icon: Laptop,
  },
  {
    category: "Notes",
    name: "Obsidian",
    description:
      "Local-first writing and knowledge management with optional sync choices and durable plain-text files.",
    icon: Newspaper,
  },
  {
    category: "Automation",
    name: "n8n",
    description:
      "A visual automation platform that can connect self-hosted services and reduce repetitive digital work.",
    icon: Bot,
  },
] as const;

export const projects = [
  {
    title: "Private Life Starter Kit",
    description:
      "A step-by-step guide for upgrading passwords, backups, browser settings, device permissions, and recovery plans.",
    image: assetPath("/assets/privacy-guide.webp"),
    technologies: ["Markdown", "Checklist Design", "Threat Modeling"],
    status: "Public draft",
    github: "https://github.com/maravale/private-life-starter-kit",
    live: "https://maravale.studio/starter-kit",
  },
  {
    title: "Home Signal Dashboard",
    description:
      "A quiet local dashboard for Wi-Fi health, uptime, speed checks, and household network visibility.",
    image: assetPath("/assets/home-lab.webp"),
    technologies: ["Linux", "FastAPI", "SQLite", "Raspberry Pi"],
    status: "Prototype",
    github: "https://github.com/maravale/home-signal-dashboard",
    live: "https://maravale.studio/home-signal",
  },
  {
    title: "Indie Workflow Recipes",
    description:
      "Small automation templates for publishing, archiving, note capture, invoice prep, and privacy-friendly backups.",
    image: assetPath("/assets/automation-workflows.webp"),
    technologies: ["n8n", "Shell", "Local-first tools", "Open APIs"],
    status: "In progress",
    github: "https://github.com/maravale/indie-workflow-recipes",
    live: "https://maravale.studio/workflows",
  },
] as const;

export const newsletter = {
  name: site.newsletterName,
  promise:
    "One calm email each Sunday with a practical privacy decision, a tool worth testing, and a short note on modern technology.",
  inputLabel: "Email address",
  placeholder: "you@example.com",
  button: "Join the list",
  disclaimer:
    "Demo form only. Connect Buttondown, ConvertKit, Beehiiv, Mailchimp, or a custom endpoint before launch.",
} as const;

export const contactOptions = [
  {
    title: "Collaborations",
    description:
      "Thoughtful sponsorships, product explainers, privacy education campaigns, and tool walkthroughs.",
    href: `mailto:${site.businessEmail}?subject=Collaboration%20Inquiry`,
  },
  {
    title: "Press & Interviews",
    description:
      "Commentary on digital privacy, practical security, independent infrastructure, and responsible AI.",
    href: `mailto:${site.email}?subject=Press%20Inquiry`,
  },
  {
    title: "Community",
    description:
      "Questions, topic suggestions, corrections, and links to tools that deserve more careful attention.",
    href: `mailto:${site.email}?subject=Community%20Note`,
  },
] as const;

export const legal = {
  notice:
    "This website currently uses invented temporary identity and business details. Replace the creator name, address, responsible person, contact details, tax information, and jurisdiction-specific disclosures before publishing.",
  privacy:
    "This demo does not intentionally use analytics, advertising pixels, cookies, or a live newsletter backend. Replace this text with a reviewed policy once real hosting, forms, analytics, or third-party services are connected.",
} as const;
