import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { ContactForm } from "@/components/site/ContactForm";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Elektriker in Hamburg | Buddenhagen" },
      { name: "description", content: "Kontaktieren Sie Buddenhagen für Elektroinstallation, erneuerbare Energien und Sanierung in Hamburg." },
      { property: "og:title", content: "Kontakt — Buddenhagen Hamburg" },
      { property: "og:description", content: "Schreiben Sie uns. Wir antworten innerhalb eines Werktags." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHero eyebrow={t.nav.kontakt} title={t.kontakt.title} />

      <section className="container-page py-16 md:py-24 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-7">
          <p className="eyebrow">01</p>
          <h2 className="display-md mt-4">{t.kontakt.general}</h2>
          <p className="mt-5 text-muted-foreground text-lg">{t.kontakt.generalSub}</p>
          <div className="mt-10 bg-card border border-border p-7 md:p-10">
            <ContactForm kind="general" />
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={0.1}>
          <div className="bg-foreground text-background p-8 mb-4">
            <p className="eyebrow !text-accent">02</p>
            <h3 className="font-display text-2xl mt-3">{t.kontakt.hv}</h3>
            <p className="mt-3 text-background/80">{t.kontakt.hvSub}</p>
            <div className="mt-6">
              <CTAButton to="/hausverwaltung-elektriker-hamburg" variant="accent">{t.kontakt.hvBtn}</CTAButton>
            </div>
          </div>
          <div className="bg-card border border-border p-8 mb-4">
            <p className="eyebrow">03</p>
            <h3 className="font-display text-2xl mt-3">{t.kontakt.jobs}</h3>
            <p className="mt-3 text-muted-foreground">{t.kontakt.jobsSub}</p>
            <div className="mt-6">
              <a href="mailto:job@buddenhagen-projekt.de?subject=Bewerbung" className="inline-flex items-center gap-2 border border-foreground px-6 py-3.5 text-xs font-display uppercase tracking-wider hover:bg-foreground hover:text-background transition">
                {t.kontakt.jobsBtn} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-card border border-border p-8 space-y-5 text-sm">
            <InfoRow icon={MapPin} label={t.kontakt.address}>
              {t.kontakt.addressLines.map((l) => <div key={l}>{l}</div>)}
            </InfoRow>
            <InfoRow icon={Phone} label={t.kontakt.phone}>
              <a href="tel:+494012345678" className="hover:text-accent">+49 40 1234 5678</a>
            </InfoRow>
            <InfoRow icon={Mail} label="Email">
              <a href="mailto:info@buddenhagen.com" className="hover:text-accent">info@buddenhagen.com</a>
            </InfoRow>
            <InfoRow icon={Clock} label={t.kontakt.hours}>
              {t.kontakt.hoursLines.map((l) => <div key={l}>{l}</div>)}
            </InfoRow>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <div className="aspect-[16/7] w-full overflow-hidden border border-border">
          <iframe
            title="Hamburg Karte"
            src="https://www.openstreetmap.org/export/embed.html?bbox=9.9737%2C53.5411%2C10.0137%2C53.5611&layer=mapnik"
            className="w-full h-full grayscale"
            loading="lazy"
          />
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </SiteLayout>
  );
}

function InfoRow({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon className="h-5 w-5 text-accent mt-0.5" />
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-display">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}