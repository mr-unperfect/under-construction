import Link from "next/link";
import { legal, site } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy placeholder for ${site.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section-shell py-16">
      <p className="section-eyebrow">Privacy Policy</p>
      <h1 className="section-title mt-4">A privacy-first baseline with launch notes.</h1>
      <div className="surface mt-10 rounded-[2rem] p-6 md:p-10">
        <p className="section-copy">{legal.privacy}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-2xl font-bold">Current demo behavior</h2>
            <ul className="text-muted mt-4 grid list-disc gap-2 pl-5 leading-7">
              <li>No analytics scripts are included by default.</li>
              <li>No advertising pixels or behavioral tracking are included.</li>
              <li>The newsletter form is local demo behavior and does not submit data to a server.</li>
              <li>Social links open third-party services only when visitors choose them.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold">Update before launch</h2>
            <ul className="text-muted mt-4 grid list-disc gap-2 pl-5 leading-7">
              <li>Add real hosting provider details and log retention information.</li>
              <li>Document the newsletter provider once connected.</li>
              <li>Document analytics only if analytics are added.</li>
              <li>Review data retention, deletion, and contact procedures.</li>
              <li>Adjust this policy for the creator&apos;s jurisdiction.</li>
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
