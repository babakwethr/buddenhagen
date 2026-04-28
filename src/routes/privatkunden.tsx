import { createFileRoute } from "@tanstack/react-router";
import { Home, Plug, Sun, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/privatkunden")({
  head: () => ({
    meta: [
      { title: "Elektriker für Privatkunden in Hamburg | Buddenhagen" },
      { name: "description", content: "Wallbox, Photovoltaik, Renovierung und Reparaturen für Hamburger Privathaushalte." },
      { property: "og:title", content: "Für Privatkunden — Buddenhagen Hamburg" },
      { property: "og:description", content: "Vom Reparaturauftrag bis zur Modernisierung." },
    ],
  }),
  component: PrivatPage,
});

const icons = [Home, Plug, Sun, Wrench];

function PrivatPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHero eyebrow={t.nav.privat} title={t.privat.title} intro={t.privat.intro} />
      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-4">
          {t.privat.cards.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={c.t} delay={(i % 2) * 0.08}>
                <div className="bg-card border border-border p-8 h-full hover:border-accent transition-colors">
                  <Icon className="h-7 w-7 text-accent" />
                  <h3 className="mt-6 text-2xl font-display">{c.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-16 flex justify-center">
          <CTAButton to="/kontakt">{t.common.requestNow}</CTAButton>
        </div>
      </section>
    </SiteLayout>
  );
}