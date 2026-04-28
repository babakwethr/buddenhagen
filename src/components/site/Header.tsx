import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import logoUrl from "@/assets/logo.png";

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  type NavItem =
    | { kind: "link"; to: string; label: string }
    | { kind: "group"; id: string; label: string; items: { to: string; label: string }[] };

  const nav: NavItem[] = [
    { kind: "link", to: "/", label: t.nav.start },
    { kind: "link", to: "/leistungen", label: t.nav.leistungen },
    { kind: "link", to: "/projekte", label: t.nav.projekte },
    {
      kind: "group",
      id: "kunden",
      label: t.navGroups.kunden,
      items: [
        { to: "/privatkunden", label: t.nav.privat },
        { to: "/unternehmen-kunden", label: t.nav.unternehmen },
      ],
    },
    {
      kind: "group",
      id: "ueber",
      label: t.navGroups.ueberUns,
      items: [
        { to: "/unternehmen", label: t.nav.ueber },
        { to: "/wissenswertes", label: t.nav.wissen },
        { to: "/karriere", label: t.nav.karriere },
      ],
    },
    { kind: "link", to: "/kontakt", label: t.nav.kontakt },
  ];

  // Flat list for the mobile menu
  const mobileLinks = [
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
          <Link to="/" className="flex items-center group" aria-label="Buddenhagen & Söhne">
            <img
              src={logoUrl}
              alt="Buddenhagen & Söhne — established 1926"
              className="h-9 md:h-11 w-auto"
            />
          </Link>

          <nav ref={menuRef} className="hidden lg:flex items-center gap-6 text-sm">
            {nav.map((item) => {
              if (item.kind === "link") {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "transition-colors",
                      scrolled
                        ? "text-foreground/75 hover:text-foreground"
                        : "text-neutral-600 hover:text-foreground",
                    )}
                    activeProps={{ className: "font-medium" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                );
              }
              const isOpen = openMenu === item.id;
              return (
                <div key={item.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(isOpen ? null : item.id)}
                    className={cn(
                      "inline-flex items-center gap-1 transition-colors",
                      scrolled
                        ? "text-foreground/75 hover:text-foreground"
                        : "text-neutral-600 hover:text-foreground",
                      isOpen && "text-foreground",
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 top-full mt-3 min-w-[240px] bg-background border border-border shadow-lg animate-fade-in py-2">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                          activeProps={{ className: "text-accent font-medium" }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <WhatsAppButton variant="header" />

            <div className="hidden sm:flex items-center text-xs font-display tracking-wider">
              <button
                onClick={() => setLocale("de")}
                className={cn(
                  "px-2 py-1 transition",
                  locale === "de"
                    ? scrolled ? "text-foreground font-semibold" : "text-neutral-700 font-semibold"
                    : scrolled ? "text-muted-foreground hover:text-foreground" : "text-neutral-500 hover:text-foreground",
                )}
                aria-label="Deutsch"
              >DE</button>
              <span className="text-border">/</span>
              <button
                onClick={() => setLocale("en")}
                className={cn(
                  "px-2 py-1 transition",
                  locale === "en"
                    ? scrolled ? "text-foreground font-semibold" : "text-neutral-700 font-semibold"
                    : scrolled ? "text-muted-foreground hover:text-foreground" : "text-neutral-500 hover:text-foreground",
                )}
                aria-label="English"
              >EN</button>
            </div>

            <Link
              to="/hausverwaltung-elektriker-hamburg"
              className="hidden md:inline-flex items-center gap-2 group bg-foreground text-background pl-4 pr-3 py-2.5 text-xs font-display font-medium tracking-wider uppercase hover:bg-accent transition-colors"
            >
              <span>{t.nav.cta}</span>
              <span className="inline-flex items-center justify-center h-5 w-5 bg-accent text-accent-foreground transition-transform group-hover:translate-x-0.5 group-hover:bg-background group-hover:text-foreground">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 pt-16 md:pt-20 bg-background animate-fade-in lg:hidden">
          <div className="container-page py-8 flex flex-col gap-1 overflow-y-auto h-full">
            {mobileLinks.map((l) => (
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
              className="mt-6 inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3.5 font-display uppercase text-sm tracking-wider"
            >
              {t.nav.cta} <ArrowUpRight className="h-4 w-4" />
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