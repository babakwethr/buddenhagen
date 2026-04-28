import { createFileRoute } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton, CTAExternal } from "@/components/site/CTAButton";
import { useI18n } from "@/i18n/I18nProvider";
import elektroImg from "@/assets/service-elektro.jpg";
import energieImg from "@/assets/service-energie.jpg";
import sanierungImg from "@/assets/service-sanierung.jpg";
import windImg from "@/assets/project-wind.jpg";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Elektro, Energie & Sanierung | Buddenhagen Hamburg" },
      { name: "description", content: "Elektroinstallation, Photovoltaik, Wallboxen, Windkraft, Smart Home und Komplettsanierung in Hamburg." },
      { property: "og:title", content: "Leistungen — Buddenhagen Hamburg" },
      { property: "og:description", content: "Drei Disziplinen, ein Anbieter, ein Ansprechpartner." },
      { property: "og:image", content: "/src/assets/service-elektro.jpg" },
    ],
  }),
  component: LeistungenPage,
});

function LeistungenPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHero eyebrow={t.nav.leistungen} title={t.leistungen.title} intro={t.leistungen.intro} />

      <Block num="01" title={t.leistungen.block1} items={t.leistungen.block1Items} img={elektroImg} />
      <Block num="02" title={t.leistungen.block2} items={t.leistungen.block2Items} img={energieImg} reverse>
        <div className="mt-10 border border-border bg-card p-7">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <img src={windImg} alt="Windkraft" loading="lazy" className="aspect-square object-cover w-full" />
            <div className="md:col-span-2">
              <p className="eyebrow">{t.leistungen.windTitle}</p>
              <p className="mt-3 text-lg leading-relaxed">{t.leistungen.windBody}</p>
              <div className="mt-5">
                <CTAExternal href="https://xolution.example" variant="outline">{t.leistungen.windCta}</CTAExternal>
              </div>
            </div>
          </div>
        </div>
      </Block>
      <Block num="03" title={t.leistungen.block3} items={t.leistungen.block3Items} img={sanierungImg} />

      <section className="container-page py-24 md:py-36 text-center border-t border-border">
        <Reveal>
          <h2 className="display-lg max-w-3xl mx-auto">{t.home.ctaBanner}</h2>
          <div className="mt-10 flex justify-center">
            <CTAButton to="/kontakt" variant="accent">{t.common.requestNow}</CTAButton>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Block({ num, title, items, img, reverse, children }: { num: string; title: string; items: readonly string[]; img: string; reverse?: boolean; children?: React.ReactNode }) {
  return (
    <section className="container-page py-20 md:py-32 border-b border-border">
      <div className={`grid md:grid-cols-12 gap-10 items-start ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <Reveal className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover grayscale-[0.15]" />
          </div>
        </Reveal>
        <Reveal className="md:col-span-6" delay={0.1}>
          <p className="eyebrow">{num}</p>
          <h2 className="display-md mt-4">{title}</h2>
          <ul className="mt-8 space-y-4">
            {items.map((it) => (
              <li key={it} className="flex gap-3 items-start">
                <Check className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <span className="text-lg">{it}</span>
              </li>
            ))}
          </ul>
          {children}
        </Reveal>
      </div>
    </section>
  );
}