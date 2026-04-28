import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import wallbox from "@/assets/project-wallbox.jpg";
import commercial from "@/assets/project-commercial.jpg";
import smart from "@/assets/project-smarthome.jpg";
import solar from "@/assets/project-solar.jpg";
import reno from "@/assets/project-renovation.jpg";
import wind from "@/assets/project-wind.jpg";
import elektro from "@/assets/service-elektro.jpg";
import sanierung from "@/assets/service-sanierung.jpg";

export const Route = createFileRoute("/projekte")({
  head: () => ({
    meta: [
      { title: "Projekte & Referenzen | Buddenhagen Hamburg" },
      { name: "description", content: "Ein Auszug unserer Elektro-, Energie- und Sanierungsprojekte in Hamburg." },
      { property: "og:title", content: "Projekte & Referenzen — Buddenhagen" },
      { property: "og:description", content: "Editorial-Auswahl unserer Arbeiten in Hamburg und Norddeutschland." },
      { property: "og:image", content: "/src/assets/project-commercial.jpg" },
    ],
  }),
  component: ProjektePage,
});

const projects = [
  { img: commercial, name: "Bürohaus HafenCity", desc: "Neuverkabelung und Schaltanlagen für 6.000 m² Bürofläche.", meta: "Hamburg · 2025" },
  { img: solar, name: "PV-Anlage Hallendach", desc: "320 kWp Aufdachanlage inkl. Speicher.", meta: "Norderstedt · 2024" },
  { img: smart, name: "Penthouse Smart Home", desc: "KNX-Integration mit Licht, Klima und Sicherheit.", meta: "Eppendorf · 2024" },
  { img: reno, name: "Altbausanierung Eimsbüttel", desc: "Komplettsanierung mit allen Gewerken aus einer Hand.", meta: "Hamburg · 2024" },
  { img: wallbox, name: "Wallbox-Park Hausverwaltung", desc: "12 Ladepunkte mit Lastmanagement.", meta: "Altona · 2025" },
  { img: elektro, name: "Modernisierung Bestand", desc: "Neue Verteilung und Brandschutz in einem Wohnobjekt.", meta: "Wandsbek · 2023" },
  { img: wind, name: "Windkraft Pilot", desc: "Anbindung dezentraler Erzeugung mit Partner Xolution.", meta: "Schleswig-Holstein · 2025" },
  { img: sanierung, name: "Loft-Ausbau", desc: "Trockenbau, Maler und Elektrik in 8 Wochen.", meta: "Hamburg · 2024" },
] as const;

function ProjektePage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHero eyebrow={t.nav.projekte} title={t.projekte.title} intro={t.projekte.intro} />
      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <article className={`group bg-card border border-border overflow-hidden ${i % 5 === 0 ? "lg:row-span-2" : ""}`}>
                <div className={`overflow-hidden ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover grayscale-[0.15] group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{p.meta}</p>
                  <h3 className="mt-3 font-display text-xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}