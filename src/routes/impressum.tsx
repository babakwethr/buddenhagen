import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum | Buddenhagen" }, { name: "description", content: "Impressum der Buddenhagen GmbH." }] }),
  component: () => (
    <SiteLayout>
      <PageHero title="Impressum" />
      <section className="container-page py-16 prose-like text-muted-foreground space-y-4 max-w-2xl">
        <p><strong className="text-foreground">Buddenhagen GmbH</strong></p>
        <p>Musterstraße 1<br />20095 Hamburg<br />Deutschland</p>
        <p>Telefon: +49 40 1234 5678<br />E-Mail: info@buddenhagen.com</p>
        <p>Geschäftsführer: Max Mustermann<br />Handelsregister: HRB 00000<br />USt-IdNr.: DE000000000</p>
      </section>
    </SiteLayout>
  ),
});