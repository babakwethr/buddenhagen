import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:text-sm focus:font-display"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}