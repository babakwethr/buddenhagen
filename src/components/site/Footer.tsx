import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import logoUrl from "@/assets/logo-footer.png";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="container-page py-20 grid gap-12 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <img src={logoUrl} alt="Buddenhagen & Söhne — Established 1926" className="h-14 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-background/70 max-w-xs">{t.common.tagline}</p>
          <p className="mt-2 text-xs text-background/50">{t.common.since}</p>
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