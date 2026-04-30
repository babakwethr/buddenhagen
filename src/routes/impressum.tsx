import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum | Buddenhagen" }, { name: "description", content: "Impressum der Buddenhagen GmbH." }] }),
  component: () => (
    <SiteLayout>
      <PageHero title="Impressum" />
      <section className="container-page py-16 prose-like text-muted-foreground space-y-8 max-w-2xl">

        <div className="space-y-1">
          <p><strong className="text-foreground text-lg">Buddenhagen & Söhne Installation GmbH & Co. KG</strong></p>
          <p>Langenhorner Chaussee 155<br />22415 Hamburg<br />Deutschland</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Kontakt</p>
          <p>
            Telefon: <a href="tel:+4940471033 0" className="hover:text-accent">040 47 10 33 0</a><br />
            Telefax: 040 47 70 29<br />
            E-Mail: <a href="mailto:info@buddenhagen.com" className="hover:text-accent">info@buddenhagen.com</a>
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Handelsregister</p>
          <p>
            Registergericht: Amtsgericht Hamburg<br />
            Registernummer: HRA 36349
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Vertretungsberechtigte Person</p>
          <p>Geschäftsführer: Frank Buddenhagen</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider font-display text-foreground">Umsatzsteuer</p>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            DE118982366
          </p>
          <p>Steuernummer: 49 609 00133</p>
        </div>

      </section>
    </SiteLayout>
  ),
});