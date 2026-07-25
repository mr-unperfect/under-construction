import { featuredContent, seo, site, socials } from "@/data/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: seo.description,
    email: site.email,
    url: site.url,
    image: `${site.url}/assets/creator-portrait.webp`,
    sameAs: socials.filter((social) => !social.href.startsWith("mailto:")).map((social) => social.href),
  };

  const articles = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: featuredContent.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": item.type.includes("Video") ? "VideoObject" : "Article",
        name: item.title,
        description: item.description,
        datePublished: item.date,
        url: item.href.startsWith("http") ? item.href : `${site.url}/${item.href}`,
      },
    })),
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articles) }}
        type="application/ld+json"
      />
    </>
  );
}
