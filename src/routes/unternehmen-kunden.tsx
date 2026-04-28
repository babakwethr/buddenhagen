import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { useI18n } from "@/i18n/I18nProvider";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/unternehmen-kunden")({
  head: () => ({
    meta: [
      { title: "Elektro für Unternehmen & Hausverwaltungen | Buddenhagen Hamburg" },
      { name: "description", content: "Elektroinstallation, Wartung, Komplettsanierung – ein Ansprechpartner für alle Gewerke." },
      { property: "og:title", content: "Für Unternehmen — Buddenhagen Hamburg" },
      { property: "og:description", content: "Ein Partner für Elektrik, Wartung und Komplettsanierung." },
      { property: "og:image", content: "/src/assets/about-team.jpg" },
    ],
  }),
  component: BizPage,
});

function BizPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHero eyebrow={t.nav.unternehmen} title={t.biz.title} intro={t.biz.intro} />

      <section className="container-page py-20 md:py-28 grid md:grid-cols-2 gap-12 border-b border-border">
        <Reveal>
          <p className="eyebrow">01</p>
          <h2 className="display-md mt-4">{t.biz.services}</h2>
          <ul className="mt-8 space-y-4">
            {t.biz.servicesItems.map((i) => (
              <li key={i} className="flex gap-3 items-start"><Check className="h-5 w-5 mt-0.5 text-accent" /><span className="text-lg">{i}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">02</p>
          <h2 className="display-md mt-4">{t.biz.gu}</h2>
          <ul className="mt-8 space-y-4">
            {t.biz.guItems.map((i) => (
              <li key={i} className="flex gap-3 items-start"><Check className="h-5 w-5 mt-0.5 text-accent" /><span className="text-lg">{i}</span></li>
            ))}
          </ul>
          <p className="mt-8 text-xl font-display text-accent">{t.biz.guHighlight}</p>
        </Reveal>
      </section>

      <section className="container-page py-20 md:py-28 grid md:grid-cols-12 gap-10 border-b border-border">
        <Reveal className="md:col-span-6">
          <img src={teamImg} alt="Buddenhagen Team" loading="lazy" className="aspect-[4/5] w-full object-cover grayscale-[0.15]" />
        </Reveal>
        <Reveal className="md:col-span-6" delay={0.1}>
          <p className="eyebrow">03</p>
          <h2 className="display-md mt-4">{t.biz.team}</h2>
          <ul className="mt-8 space-y-4">
            {t.biz.teamItems.map((i) => (
              <li key={i} className="text-lg border-b border-border py-3">{i}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-foreground text-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow !text-accent">04</p>
            <h2 className="display-md mt-4 max-w-2xl">{t.home.benefitsTitle}</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-background/10">
            {[t.home.ben1, t.home.ben2, t.home.ben3].map((b, i) => (
              <Reveal key={b} delay={i * 0.08}>
                <div className="bg-foreground p-10 h-full">
                  <span className="font-display text-5xl text-accent">0{i + 1}</span>
                  <p className="mt-6 text-2xl font-display">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex">
            <CTAButton to="/hausverwaltung-elektriker-hamburg" variant="accent">{t.biz.cta}</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}