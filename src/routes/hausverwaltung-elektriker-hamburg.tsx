import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { ContactForm } from "@/components/site/ContactForm";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/project-commercial.jpg";

export const Route = createFileRoute("/hausverwaltung-elektriker-hamburg")({
  head: () => ({
    meta: [
      { title: "Elektriker für Hausverwaltungen in Hamburg | Buddenhagen" },
      { name: "description", content: "Schnelle Einsätze, Wartung und Komplettsanierung für Hausverwaltungen in Hamburg – ein Ansprechpartner." },
      { property: "og:title", content: "Hausverwaltungen — Buddenhagen Hamburg" },
      { property: "og:description", content: "Zuverlässiger Partner für Ihre Objekte." },
      { property: "og:image", content: "/src/assets/project-commercial.jpg" },
    ],
  }),
  component: HVPage,
});

function HVPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="relative -mt-16 md:-mt-20 min-h-[80svh] flex items-end overflow-hidden grain">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/95" />
        <div className="relative z-10 container-page py-24 md:py-32 text-background">
          <Reveal>
            <p className="eyebrow !text-accent">{t.nav.cta}</p>
            <h1 className="display-lg mt-6 max-w-3xl">{t.hv.title}</h1>
            <p className="mt-8 text-xl md:text-2xl text-background/85 max-w-2xl font-light">
              {t.hv.heroLine1}<br />{t.hv.heroLine2}
            </p>
            <div className="mt-10">
              <a href="#anfrage" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-sm font-display uppercase tracking-wider hover:bg-[var(--copper-deep)] transition">
                {t.common.requestNow}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 md:py-28 grid md:grid-cols-3 gap-10 border-b border-border">
        <Bullets eyebrow="01" title={t.hv.services} items={t.hv.servicesItems} />
        <Bullets eyebrow="02" title={t.hv.gu} items={t.hv.guItems} />
        <Bullets eyebrow="03" title={t.hv.benefits} items={t.hv.benefitsItems} />
      </section>

      <section id="anfrage" className="container-page py-20 md:py-28 grid md:grid-cols-12 gap-12 scroll-mt-24">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">04</p>
          <h2 className="display-md mt-4">{t.hv.formTitle}</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{t.hv.formSub}</p>
          <div className="mt-10 space-y-3 text-sm text-muted-foreground">
            <p>info@buddenhagen.com</p>
            <p>+49 40 1234 5678</p>
          </div>
        </Reveal>
        <Reveal className="md:col-span-7" delay={0.1}>
          <div className="bg-card border border-border p-7 md:p-10">
            <ContactForm kind="hausverwaltung" />
          </div>
        </Reveal>
      </section>

      <section className="container-page py-20 text-center border-t border-border">
        <CTAButton to="/leistungen" variant="dark">{t.nav.leistungen}</CTAButton>
      </section>

      <WhatsAppButton variant="floating" />
    </SiteLayout>
  );
}

function Bullets({ eyebrow, title, items }: { eyebrow: string; title: string; items: readonly string[] }) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-3xl mt-4">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5 items-start"><Check className="h-5 w-5 mt-0.5 text-accent shrink-0" /><span>{i}</span></li>
        ))}
      </ul>
    </Reveal>
  );
}