import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: t.nav.start },
    { to: "/leistungen", label: t.nav.leistungen },
    { to: "/projekte", label: t.nav.projekte },
    { to: "/privatkunden", label: t.nav.privat },
    { to: "/unternehmen-kunden", label: t.nav.unternehmen },
    { to: "/unternehmen", label: t.nav.ueber },
    { to: "/wissenswertes", label: t.nav.wissen },
    { to: "/karriere", label: t.nav.karriere },
    { to: "/kontakt", label: t.nav.kontakt },
  ] as const;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || open
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent",
        )}
      >
        <div className="container-page flex h-16 md:h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Buddenhagen">
            <div className="h-8 w-8 bg-foreground text-background grid place-items-center font-display font-bold text-sm">B</div>
            <span className="font-display font-semibold tracking-tight text-lg">Buddenhagen</span>
            <span className="hidden md:inline text-xs text-muted-foreground ml-2">est. 1926</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-foreground/75 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-xs font-display tracking-wider">
              <button
                onClick={() => setLocale("de")}
                className={cn("px-2 py-1 transition", locale === "de" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground")}
                aria-label="Deutsch"
              >DE</button>
              <span className="text-border">/</span>
              <button
                onClick={() => setLocale("en")}
                className={cn("px-2 py-1 transition", locale === "en" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground")}
                aria-label="English"
              >EN</button>
            </div>

            <Link
              to="/hausverwaltung-elektriker-hamburg"
              className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 text-xs font-display font-medium tracking-wide uppercase hover:bg-[var(--copper-deep)] transition-colors"
            >
              {t.nav.cta}
            </Link>

            <button
              className="xl:hidden p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 pt-16 md:pt-20 bg-background animate-fade-in xl:hidden">
          <div className="container-page py-8 flex flex-col gap-1 overflow-y-auto h-full">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 text-2xl font-display border-b border-border"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/hausverwaltung-elektriker-hamburg"
              className="mt-6 inline-flex items-center justify-center bg-accent text-accent-foreground px-5 py-3.5 font-display uppercase text-sm tracking-wider"
            >
              {t.nav.cta}
            </Link>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <button onClick={() => setLocale("de")} className={cn("px-3 py-1.5 border", locale === "de" ? "border-foreground" : "border-border text-muted-foreground")}>Deutsch</button>
              <button onClick={() => setLocale("en")} className={cn("px-3 py-1.5 border", locale === "en" ? "border-foreground" : "border-border text-muted-foreground")}>English</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}