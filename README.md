# Mara Vale Personal Creator Homepage

This repository contains a complete temporary personal creator homepage for a privacy- and technology-focused content creator. The current identity, images, social links, project entries, and legal details are fictional but written as production-quality draft content so the site feels complete immediately.

## Technical Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- lucide-react icons
- Static export friendly configuration for GitHub Pages, Netlify, Vercel, or any static host

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open the local URL printed by Next.js, usually `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` creates a static export in `out/` because `next.config.ts` uses `output: "export"`.

## Project Structure

```text
app/
  page.tsx              Main homepage
  layout.tsx            Global metadata, theme, header, footer
  legal/page.tsx        Legal Notice / Impressum placeholder
  privacy/page.tsx      Privacy Policy placeholder
  sitemap.ts            Sitemap metadata route
  robots.ts             Robots metadata route
components/
  header.tsx            Sticky navigation and mobile menu
  footer.tsx            Footer, legal links, social links
  theme-provider.tsx    System/light/dark theme handling
  theme-toggle.tsx      Accessible theme controls
  newsletter-form.tsx   Local demo newsletter form
  social-grid.tsx       Social media link grid
  section-heading.tsx   Reusable section heading
data/
  site.ts               Central editable content configuration
public/assets/
  brand-mark.svg        Temporary monogram logo
  favicon.svg           Temporary favicon
  *.webp                Temporary generated images
```

## Central Content Configuration

Almost every visible piece of creator content lives in `data/site.ts`.

Edit this file to change:

- Creator name
- Short title
- Tagline
- Short biography
- Long biography
- Mission
- Values
- Contact email
- Business email
- Social handles
- Navigation
- Content pillars
- Featured content
- Recommended tools
- Projects
- Newsletter text
- SEO metadata
- Legal placeholders
- Site URL
- Image paths and alt text

## Change the Creator Name

Update these fields in `data/site.ts`:

```ts
site.name
site.shortName
site.monogram
site.copyrightOwner
site.legalName
```

Then review the social handles, emails, legal pages, Open Graph metadata, and RSS feed.

## Replace Descriptions and Biography

Update:

- `site.description`
- `site.mission`
- `biography.short`
- `biography.long`
- `biography.philosophy`
- `values`
- `contentPillars`

All website text should remain natural, professional English unless the project intentionally changes language.

## Replace Images

All temporary images are stored in `public/assets`.

Recommended replacements:

- `creator-portrait.webp`: real vertical creator portrait, 4:5 crop, at least 960 by 1200 pixels.
- `studio-workspace.webp`: real desk, studio, or creator environment, landscape, at least 1600 by 1000 pixels.
- `privacy-abstract.webp`: brand abstract or editorial technology image.
- `project-collage.webp`: real project collage, screenshot, or device mockup.
- `privacy-guide.webp`, `home-lab.webp`, `automation-workflows.webp`: project or content card images.
- `og-image.webp`: 1200 by 630 social preview image.

After replacing an image, update the matching `alt` text and `replacementNote` in `data/site.ts`.

## Replace the Logo and Favicon

Replace:

- `public/assets/brand-mark.svg`
- `public/assets/favicon.svg`

Then update:

```ts
site.logo
site.favicon
```

Keep the logo readable at small sizes and avoid embedding raster text in the image.

## Update Social Links

Edit the `socials` array in `data/site.ts`. Keep labels and handles accurate because they are used in the social grid, header links, footer links, and structured data.

## Legal Pages

Review and replace all invented legal information before publication:

- Full legal name or company name
- Postal address
- Responsible editorial person
- Tax ID, VAT ID, or registration details if required
- Jurisdiction-specific disclosures
- Real contact email
- Hosting provider details
- Newsletter provider details
- Analytics or tracking disclosures if analytics are added later

No cookie banner is included because the demo does not add non-essential cookies or analytics.

## Newsletter Provider

The newsletter form is a local demo. To connect a provider:

1. Choose a provider such as Buttondown, ConvertKit, Beehiiv, Mailchimp, or a custom API route.
2. Replace the `onSubmit` logic in `components/newsletter-form.tsx`.
3. Add provider-specific environment variables to the deployment platform.
4. Update `app/privacy/page.tsx` with provider name, purpose, retention, and unsubscribe details.

## Deployment

### Vercel

Import the repository in Vercel and deploy with the default Next.js settings. You can remove `output: "export"` from `next.config.ts` if you want Vercel image optimization or server features.

### Netlify

Use:

```bash
npm run build
```

Publish the `out/` directory.

### GitHub Pages

Use:

```bash
npm install
npm run build
```

Publish the `out/` directory with a GitHub Pages workflow. If the site is hosted under `/under-construction`, confirm the production URL in `data/site.ts` and adjust paths if your Pages setup requires a base path.

## Temporary Identity

Current fictional identity:

- Name: Mara Vale
- Title: Privacy Educator & Technology Creator
- Newsletter: Quiet Systems
- Positioning: Calm, practical privacy and independent digital life

Replace the fictional identity before presenting the site as a real person.
