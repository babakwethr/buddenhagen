import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/i18n/I18nProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Buddenhagen — Elektro, Energie & Sanierung in Hamburg seit 1926" },
      { name: "description", content: "Familienbetrieb aus Hamburg. Elektroinstallation, erneuerbare Energien und Sanierung – alles aus einer Hand." },
      { name: "author", content: "Buddenhagen" },
      { property: "og:title", content: "Buddenhagen — Hamburg seit 1926" },
      { property: "og:description", content: "Elektro, Energie und Sanierung – zuverlässig umgesetzt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Buddenhagen & Söhne GmbH & Co. KG",
          description: "Elektroinstallation, erneuerbare Energien und Sanierung in Hamburg seit 1926.",
          foundingDate: "1926",
          telephone: "+49 40 4710330",
          email: "info@buddenhagen.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Langenhorner Chaussee 155",
            postalCode: "22415",
            addressLocality: "Hamburg",
            addressCountry: "DE",
          },
          geo: { "@type": "GeoCoordinates", latitude: 53.5511, longitude: 9.9937 },
          openingHours: "Mo-Fr 07:30-17:00",
          areaServed: "Hamburg",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <Outlet />
    </I18nProvider>
  );
}
