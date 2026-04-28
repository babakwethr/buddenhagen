import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Elektriker Jobs in Hamburg | Karriere bei Buddenhagen" },
      { name: "description", content: "Offene Stellen für Elektriker, Meister und Auszubildende in Hamburg. Faire Bezahlung, Firmenwagen, 30 Tage Urlaub." },
      { property: "og:title", content: "Karriere — Buddenhagen Hamburg" },
      { property: "og:description", content: "Werde Teil eines Familienbetriebs mit klaren Strukturen." },
    ],
  }),
  component: KarrierePage,
});

function KarrierePage() {
  const { t } = useI18n();
  const mailto = "mailto:job@buddenhagen-projekt.de?subject=Bewerbung";
  return (
    <SiteLayout>
      <PageHero eyebrow={t.nav.karriere} title={t.karriere.title} intro={t.karriere.intro} />

      <section className="container-page py-20 md:py-28 grid md:grid-cols-12 gap-10 border-b border-border">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">01</p>
          <h2 className="display-md mt-4">{t.karriere.benefits}</h2>
        </Reveal>
        <Reveal className="md:col-span-7" delay={0.1}>
          <ul className="space-y-4">
            {t.karriere.benefitsItems.map((b) => (
              <li key={b} className="flex gap-3 items-start text-lg border-b border-border pb-4"><Check className="h-5 w-5 mt-1 text-accent" />{b}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="container-page py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">02</p>
          <h2 className="display-md mt-4">{t.karriere.open}</h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {t.karriere.jobs.map((j, i) => (
            <Reveal key={j.t} delay={i * 0.05}>
              <li>
                <a href={mailto} className="group flex items-center justify-between gap-4 py-7 hover:bg-card transition px-2">
                  <div>
                    <p className="font-display text-2xl group-hover:text-accent transition">{j.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{j.l}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-accent" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="mt-12">
          <a href={mailto} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-sm font-display uppercase tracking-wider hover:bg-[var(--copper-deep)] transition">
            {t.karriere.apply} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}