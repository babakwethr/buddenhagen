import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/agb")({
  head: () => ({ meta: [{ title: "AGB | Buddenhagen" }, { name: "description", content: "Allgemeine Geschäftsbedingungen der Buddenhagen GmbH." }] }),
  component: () => (
    <SiteLayout>
      <PageHero title="AGB" />
      <section className="container-page py-16 text-muted-foreground max-w-2xl">
        <p>Platzhalter für die Allgemeinen Geschäftsbedingungen.</p>
      </section>
    </SiteLayout>
  ),
});