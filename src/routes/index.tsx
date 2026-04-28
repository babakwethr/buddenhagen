import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Zap, Sun, Hammer } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/hero-hamburg.jpg";
import elektroImg from "@/assets/service-elektro.jpg";
import energieImg from "@/assets/service-energie.jpg";
import sanierungImg from "@/assets/service-sanierung.jpg";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buddenhagen — Elektro, Energie & Sanierung in Hamburg seit 1926" },
      { name: "description", content: "Familienbetrieb aus Hamburg. Elektroinstallation, erneuerbare Energien und Sanierung – alles aus einer Hand." },
      { property: "og:title", content: "Buddenhagen — Hamburg seit 1926" },
      { property: "og:description", content: "Elektro, Energie und Sanierung – zuverlässig umgesetzt." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Intro />
      <Services />
      <EntryTiles />
      <Benefits />
      <ClosingCTA />
    </SiteLayout>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden grain">
      <img src={heroImg} alt="Hamburg Speicherstadt" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/65 to-foreground/95" />
      <div className="relative z-10 h-full container-page flex flex-col justify-end pb-20 md:pb-28 text-background">
        <Reveal>
          <p className="eyebrow !text-accent">{t.common.since}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl mt-6 max-w-5xl">{t.home.heroTitle}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg md:text-2xl text-background/80 max-w-2xl font-light">{t.home.heroSub}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton to="/kontakt" variant="accent">{t.common.requestNow}</CTAButton>
            <Link to="/leistungen" className="inline-flex items-center gap-2 px-6 py-3.5 text-xs md:text-sm font-display uppercase tracking-wider border border-background/30 text-background hover:bg-background hover:text-foreground transition-colors">
              {t.nav.leistungen} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Intro() {
  const { t } = useI18n();
  return (
    <section className="container-page py-24 md:py-36 grid md:grid-cols-12 gap-10 items-end border-b border-border">
      <div className="md:col-span-2">
        <p className="eyebrow">01</p>
      </div>
      <Reveal className="md:col-span-7">
        <h2 className="display-md">{t.home.introTitle}</h2>
      </Reveal>
      <Reveal className="md:col-span-3" delay={0.1}>
        <p className="text-muted-foreground leading-relaxed">{t.home.introBody}</p>
      </Reveal>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  const items = [
    { icon: Zap, title: t.home.svc1Title, desc: t.home.svc1Desc, img: elektroImg, to: "/leistungen" },
    { icon: Sun, title: t.home.svc2Title, desc: t.home.svc2Desc, img: energieImg, to: "/leistungen" },
    { icon: Hammer, title: t.home.svc3Title, desc: t.home.svc3Desc, img: sanierungImg, to: "/leistungen" },
  ] as const;
  return (
    <section className="container-page py-24 md:py-36">
      <div className="grid md:grid-cols-12 gap-6 mb-16">
        <div className="md:col-span-2"><p className="eyebrow">02 · {t.home.servicesEyebrow}</p></div>
        <Reveal className="md:col-span-10"><h2 className="display-md max-w-3xl">{t.home.servicesTitle}</h2></Reveal>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <Link to={it.to} className="group block bg-card border border-border hover:border-accent transition-colors h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <it.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-5 text-2xl font-display">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-accent">
                  {t.common.learnMore} <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function EntryTiles() {
  const { t } = useI18n();
  const tiles = [
    { to: "/privatkunden", title: t.home.tilePrivat, sub: t.home.tilePrivatSub, img: sanierungImg },
    { to: "/unternehmen-kunden", title: t.home.tileBiz, sub: t.home.tileBizSub, img: teamImg },
  ] as const;
  return (
    <section className="container-page pb-24 md:pb-36 grid md:grid-cols-2 gap-4">
      {tiles.map((tile, i) => (
        <Reveal key={tile.to} delay={i * 0.1}>
          <Link to={tile.to} className="relative block aspect-[5/4] md:aspect-[16/11] overflow-hidden group">
            <img src={tile.img} alt={tile.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-background">
              <p className="eyebrow !text-accent">→</p>
              <h3 className="mt-3 display-md">{tile.title}</h3>
              <p className="mt-3 text-background/80 max-w-sm">{tile.sub}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </section>
  );
}

function Benefits() {
  const { t } = useI18n();
  const items = [t.home.ben1, t.home.ben2, t.home.ben3];
  return (
    <section className="bg-foreground text-background py-24 md:py-36">
      <div className="container-page">
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-2"><p className="eyebrow">03 · <span className="text-background/60">{t.home.benefitsEyebrow}</span></p></div>
          <Reveal className="md:col-span-10"><h2 className="display-md max-w-3xl">{t.home.benefitsTitle}</h2></Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-background/10">
          {items.map((label, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="bg-foreground p-10 h-full">
                <span className="font-display text-5xl text-accent">0{i + 1}</span>
                <p className="mt-6 text-2xl font-display">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  const { t } = useI18n();
  return (
    <section className="container-page py-24 md:py-36 text-center">
      <Reveal>
        <h2 className="display-lg max-w-3xl mx-auto">{t.home.ctaBanner}</h2>
        <div className="mt-10 flex justify-center">
          <CTAButton to="/kontakt" variant="accent">{t.common.requestNow}</CTAButton>
        </div>
      </Reveal>
    </section>
  );
}
