import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/barrierefreiheit")({
  head: () => ({
    meta: [
      { title: "Barrierefreiheit | Buddenhagen" },
      { name: "description", content: "Barrierefreiheitserklärung der Buddenhagen & Söhne Installation GmbH & Co. KG gemäß BFSG." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="Barrierefreiheit" />
      <section className="container-page py-16 text-muted-foreground space-y-8 max-w-2xl">

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Erklärung zur Barrierefreiheit</p>
          <p>
            Die Buddenhagen & Söhne Installation GmbH & Co. KG ist bemüht, ihre Website
            im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG) und den
            Web Content Accessibility Guidelines (WCAG 2.1) barrierefrei zugänglich zu machen.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Stand der Vereinbarkeit</p>
          <p>
            Diese Website ist <strong className="text-foreground">teilweise konform</strong> mit
            der WCAG 2.1 Stufe AA. Die nachfolgend aufgeführten Inhalte sind noch nicht vollständig barrierefrei.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Nicht barrierefreie Inhalte</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Eingebettete Karteninhalte (OpenStreetMap) können für Screenreader-Nutzer eingeschränkt zugänglich sein.</li>
            <li>Externe Links zu Drittanbieter-Plattformen (z. B. Instagram, TikTok, LinkedIn) unterliegen deren Barrierefreiheitsstandards.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Erstellung dieser Erklärung</p>
          <p>
            Diese Erklärung wurde am <strong className="text-foreground">1. Mai 2025</strong> erstellt.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Feedback und Kontakt</p>
          <p>
            Wenn Sie Mängel in Bezug auf die barrierefreie Gestaltung unserer Website bemerken,
            wenden Sie sich bitte an unsere Ansprechpartnerin für Barrierefreiheit:
          </p>
          <p>
            Julia Buddenhagen<br />
            Buddenhagen & Söhne Installation GmbH & Co. KG<br />
            Langenhorner Chaussee 155<br />
            22415 Hamburg<br />
            E-Mail:{" "}
            <a href="mailto:info@buddenhagen.com" className="hover:text-accent text-foreground">
              info@buddenhagen.com
            </a>
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Durchsetzungsverfahren</p>
          <p>
            Wenn Sie auf Ihre Mitteilung hin innerhalb von sechs Wochen keine zufriedenstellende
            Antwort erhalten haben, können Sie die Schlichtungsstelle nach § 16 BFSG einschalten.
            Die Schlichtungsstelle BFSG ist beim Bundesministerium für Arbeit und Soziales angesiedelt.
            Weitere Informationen finden Sie unter{" "}
            <a
              href="https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/barrierefreiheitsstaerkungsgesetz.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent text-foreground"
            >
              www.bmas.de
            </a>.
          </p>
        </div>

      </section>
    </SiteLayout>
  ),
});
