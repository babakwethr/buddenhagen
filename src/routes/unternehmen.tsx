import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/unternehmen")({
  head: () => ({
    meta: [
      { title: "Familienbetrieb aus Hamburg seit 1926 | Buddenhagen" },
      { name: "description", content: "Vier Generationen Handwerk in Hamburg. Unsere Geschichte, unser Team, unsere Werte." },
      { property: "og:title", content: "Unternehmen — Buddenhagen seit 1926" },
      { property: "og:description", content: "Vier Generationen Handwerk. Ein klares Versprechen." },
      { property: "og:image", content: "/src/assets/about-team.jpg" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHero eyebrow={t.nav.ueber} title={t.about.title} intro={t.about.intro} />

      <section className="container-page py-20 md:py-28 grid md:grid-cols-12 gap-10 border-b border-border">
        <Reveal className="md:col-span-6">
          <img src={teamImg} alt="Buddenhagen Team" loading="lazy" className="aspect-[4/5] w-full object-cover grayscale-[0.15]" />
        </Reveal>
        <Reveal className="md:col-span-6" delay={0.1}>
          <p className="eyebrow">{t.about.story}</p>
          <p className="mt-6 text-xl leading-relaxed">{t.about.storyBody}</p>
        </Reveal>
      </section>

      <section className="container-page py-20 md:py-28 border-b border-border">
        <Reveal>
          <p className="eyebrow">Timeline</p>
          <h2 className="display-md mt-4">{t.about.historyTitle}</h2>
        </Reveal>
        <ol className="mt-16 relative grid gap-10 md:gap-14 border-l border-border pl-8">
          {t.about.timeline.map((m, i) => (
            <Reveal key={m.y} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-10 top-1.5 h-3 w-3 bg-accent" />
                <p className="font-display text-3xl text-accent">{m.y}</p>
                <h3 className="mt-2 font-display text-xl">{m.t}</h3>
                <p className="mt-2 text-muted-foreground max-w-xl">{m.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-page py-20 md:py-28">
        <Reveal>
          <h2 className="display-md">{t.about.values}</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.about.valuesItems.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06}>
              <div className="bg-card border border-border p-7 h-full">
                <span className="font-display text-4xl text-accent">0{i + 1}</span>
                <h3 className="mt-6 font-display text-xl">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}