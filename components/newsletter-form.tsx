"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { newsletter } from "@/data/site";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        {newsletter.inputLabel}
      </label>
      <input
        className="min-h-12 rounded-full border border-[color:var(--line)] bg-[color:var(--background)] px-5 text-base text-[color:var(--foreground)] shadow-inner outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
        id="newsletter-email"
        name="email"
        placeholder={newsletter.placeholder}
        required
        type="email"
      />
      <button className="button-primary" type="submit">
        {submitted ? <CheckCircle2 size={18} /> : <ArrowRight size={18} />}
        {submitted ? "Demo saved" : newsletter.button}
      </button>
      <p className="text-muted sm:col-span-2 text-sm leading-6">{newsletter.disclaimer}</p>
    </form>
  );
}
