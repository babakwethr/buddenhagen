import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz | Buddenhagen" }, { name: "description", content: "Datenschutzerklärung der Buddenhagen GmbH." }] }),
  component: () => (
    <SiteLayout>
      <PageHero title="Datenschutz" />
      <section className="container-page py-16 text-muted-foreground space-y-8 max-w-2xl">

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Verantwortlicher</p>
          <p>
            Buddenhagen & Söhne Installation GmbH & Co. KG<br />
            Langenhorner Chaussee 155<br />
            22415 Hamburg<br />
            Telefon: <a href="tel:+4940471033 0" className="hover:text-accent">040 47 10 33 0</a><br />
            E-Mail: <a href="mailto:info@buddenhagen.com" className="hover:text-accent">info@buddenhagen.com</a>
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Datenschutzbeauftragte</p>
          <p>
            Julia Buddenhagen<br />
            Buddenhagen & Söhne Installation GmbH & Co. KG<br />
            Langenhorner Chaussee 155<br />
            22415 Hamburg<br />
            E-Mail: <a href="mailto:info@buddenhagen.com" className="hover:text-accent">info@buddenhagen.com</a>
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Allgemeines</p>
          <p>
            Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Eine vollständige Datenschutzerklärung gemäß DSGVO wird in Kürze ergänzt.
          </p>
        </div>

      </section>
    </SiteLayout>
  ),
});