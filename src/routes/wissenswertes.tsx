import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/wissenswertes")({
  head: () => ({
    meta: [
      { title: "Wissenswertes — Förderungen, Fachthemen & Energie | Buddenhagen" },
      { name: "description", content: "Förderungen, Fachthemen und Trends rund um Elektro, Energie und Sanierung in Hamburg." },
      { property: "og:title", content: "Wissenswertes — Buddenhagen Hamburg" },
      { property: "og:description", content: "Förderungen, Fachthemen und Trends." },
    ],
  }),
  component: WissenPage,
});

function WissenPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHero eyebrow={t.nav.wissen} title={t.wissen.title} intro={t.wissen.intro} />
      <section className="container-page py-16 md:py-24 space-y-20">
        {t.wissen.cats.map((cat, ci) => (
          <div key={cat.t}>
            <Reveal>
              <div className="flex items-end justify-between border-b border-border pb-5 mb-10">
                <h2 className="display-md">{cat.t}</h2>
                <span className="font-display text-accent">0{ci + 1}</span>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4">
              {cat.articles.map((a, i) => (
                <Reveal key={a.t} delay={i * 0.06}>
                  <article className="bg-card border border-border p-7 h-full hover:border-accent transition">
                    <p className="eyebrow">{cat.t}</p>
                    <h3 className="mt-4 font-display text-xl">{a.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <NewsletterCard />
      </section>
    </SiteLayout>
  );
}

function NewsletterCard() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <Reveal>
      <div className="bg-foreground text-background p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="eyebrow !text-accent">{t.wissen.newsletter}</p>
          <h3 className="display-md mt-4">{t.wissen.newsletterSub}</h3>
        </div>
        {done ? (
          <p className="text-lg">{t.common.successBody}</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">E-Mail-Adresse</label>
            <input
              id="newsletter-email"
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="flex-1 bg-background/10 border border-background/20 px-4 py-3.5 text-sm focus:outline-none focus:border-accent"
            />
            <button type="submit" className="bg-accent text-accent-foreground px-6 py-3.5 text-xs font-display uppercase tracking-wider hover:bg-[var(--copper-deep)]">
              {t.wissen.subscribe}
            </button>
          </form>
        )}
      </div>
    </Reveal>
  );
}