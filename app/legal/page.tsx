import Link from "next/link";
import { legal, site } from "@/data/site";

export const metadata = {
  title: "Legal Notice",
  description: `Legal notice placeholder for ${site.name}.`,
};

export default function LegalNoticePage() {
  return (
    <main className="section-shell py-16">
      <p className="section-eyebrow">Legal Notice / Impressum</p>
      <h1 className="section-title mt-4">Legal details to review before publication.</h1>
      <div className="surface mt-10 rounded-[2rem] p-6 md:p-10">
        <p className="section-copy">{legal.notice}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-2xl font-bold">Temporary publisher details</h2>
            <dl className="text-muted mt-4 grid gap-3 leading-7">
              <div>
                <dt className="font-bold text-[color:var(--foreground)]">Responsible entity</dt>
                <dd>{site.legalName}</dd>
              </div>
              <div>
                <dt className="font-bold text-[color:var(--foreground)]">Location</dt>
                <dd>{site.legalCity}</dd>
              </div>
              <div>
                <dt className="font-bold text-[color:var(--foreground)]">Email</dt>
                <dd>
                  <a className="text-[color:var(--accent-strong)]" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>
          <section>
            <h2 className="text-2xl font-bold">Replace before launch</h2>
            <ul className="text-muted mt-4 grid list-disc gap-2 pl-5 leading-7">
              <li>Full legal name or registered company name</li>
              <li>Valid postal address and jurisdiction-specific disclosures</li>
              <li>Tax ID, VAT ID, or registration number when required</li>
              <li>Professional liability or regulatory information when required</li>
              <li>Real contact email and responsible editorial person</li>
            </ul>
          </section>
        </div>
        <Link className="button-secondary mt-10" href="/">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
