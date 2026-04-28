import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const KEY = "buddenhagen.cookies";

export function CookieBanner() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {}
  }, []);

  const decide = (val: "accepted" | "declined") => {
    try { localStorage.setItem(KEY, val); } catch {}
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-40 bg-foreground text-background p-5 shadow-2xl animate-fade-up">
      <p className="text-sm leading-relaxed">{t.cookie.text}</p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => decide("accepted")} className="bg-accent text-accent-foreground px-4 py-2 text-xs font-display uppercase tracking-wider">
          {t.cookie.accept}
        </button>
        <button onClick={() => decide("declined")} className="border border-background/30 px-4 py-2 text-xs font-display uppercase tracking-wider hover:bg-background/10">
          {t.cookie.decline}
        </button>
      </div>
    </div>
  );
}