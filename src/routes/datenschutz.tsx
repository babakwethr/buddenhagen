import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz | Buddenhagen" }, { name: "description", content: "Datenschutzerklärung der Buddenhagen GmbH." }] }),
  component: () => (
    <SiteLayout>
      <PageHero title="Datenschutz" />
      <section className="container-page py-16 text-muted-foreground space-y-4 max-w-2xl">
        <p>Wir nehmen den Schutz Ihrer Daten sehr ernst. Diese Seite enthält eine Platzhalter-Datenschutzerklärung. Eine vollständige Fassung wird vor Veröffentlichung des Webangebots ergänzt.</p>
        <p>Verantwortlich: Buddenhagen & Söhne GmbH & Co. KG, Langenhorner Chaussee 155, 22415 Hamburg.</p>
      </section>
    </SiteLayout>
  ),
});