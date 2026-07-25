import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { ThemeProvider, ThemeScript } from "@/components/theme-provider";
import { seo, site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: `%s - ${site.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: {
    canonical: seo.canonical,
  },
  icons: {
    icon: site.favicon,
    shortcut: site.favicon,
    apple: site.favicon,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Abstract privacy and technology visual for Mara Vale.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [site.ogImage],
    creator: "@mara_vale",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#070a0f" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
