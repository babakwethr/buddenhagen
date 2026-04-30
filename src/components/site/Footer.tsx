import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import logoUrl from "@/assets/logo-footer.png";

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/buddenhagenelektro?igsh=bnZpaG4zbXUxMzhr&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@buddenhagen?_r=1&_t=ZG-95y2OJxl3Tt",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.79 1.52V6.82a4.85 4.85 0 0 1-1.02-.13z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18TseSx7m5/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/buddenhagen-%26-s%C3%B6hne",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="container-page py-20 grid gap-12 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <img src={logoUrl} alt="Buddenhagen & Söhne — Established 1926" className="h-8 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-background/70 max-w-xs">{t.common.tagline}</p>
          <p className="mt-2 text-xs text-background/50">{t.common.since}</p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-background/50 hover:text-background transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow !text-background/60">{t.footer.services}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/leistungen" className="hover:text-accent transition-colors">{t.nav.leistungen}</Link></li>
            <li><Link to="/privatkunden" className="hover:text-accent transition-colors">{t.nav.privat}</Link></li>
            <li><Link to="/unternehmen-kunden" className="hover:text-accent transition-colors">{t.nav.unternehmen}</Link></li>
            <li><Link to="/hausverwaltung-elektriker-hamburg" className="hover:text-accent transition-colors">{t.nav.cta}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-background/60">{t.footer.company}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/unternehmen" className="hover:text-accent transition-colors">{t.nav.ueber}</Link></li>
            <li><Link to="/projekte" className="hover:text-accent transition-colors">{t.nav.projekte}</Link></li>
            <li><Link to="/wissenswertes" className="hover:text-accent transition-colors">{t.nav.wissen}</Link></li>
            <li><Link to="/karriere" className="hover:text-accent transition-colors">{t.nav.karriere}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-background/60">{t.footer.contact}</h4>
          <ul className="mt-5 space-y-3 text-sm text-background/80">
            <li><a href="mailto:info@buddenhagen.com" className="hover:text-accent">info@buddenhagen.com</a></li>
            <li><a href="tel:+49404710330" className="hover:text-accent">+49 40 4710330</a></li>
            <li>Langenhorner Chaussee 155<br />22415 Hamburg</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/60">
          <span>{t.footer.copyright}</span>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-accent">{t.footer.legal[0]}</Link>
            <Link to="/datenschutz" className="hover:text-accent">{t.footer.legal[1]}</Link>
            <Link to="/agb" className="hover:text-accent">{t.footer.legal[2]}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}