import { useI18n } from "@/i18n/I18nProvider";
import {
  WHATSAPP_DEFAULT_MESSAGE_DE,
  WHATSAPP_DEFAULT_MESSAGE_EN,
  whatsappUrl,
} from "@/lib/contact-info";
import { cn } from "@/lib/utils";

type Variant = "header" | "floating" | "inline";

export function WhatsAppButton({
  variant = "floating",
  className,
  message,
}: {
  variant?: Variant;
  className?: string;
  message?: string;
}) {
  const { locale, t } = useI18n();
  const defaultMsg =
    message ?? (locale === "de" ? WHATSAPP_DEFAULT_MESSAGE_DE : WHATSAPP_DEFAULT_MESSAGE_EN);
  const label = t.navGroups.whatsapp;

  if (variant === "header") {
    return (
      <a
        href={whatsappUrl(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          "hidden md:inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-foreground/80 hover:text-foreground hover:border-foreground hover:bg-[#25D366]/10 transition-colors",
          className,
        )}
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
    );
  }

  if (variant === "inline") {
    return (
      <a
        href={whatsappUrl(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 border border-foreground px-6 py-3.5 text-xs font-display uppercase tracking-wider hover:bg-foreground hover:text-background transition",
          className,
        )}
      >
        <WhatsAppIcon className="h-4 w-4" />
        {label}
      </a>
    );
  }

  // floating
  return (
    <a
      href={whatsappUrl(defaultMsg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all font-display text-sm",
        className,
      )}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 22.001h-.005a9.94 9.94 0 0 1-5.063-1.385l-.363-.215-3.766.988 1.005-3.671-.236-.376a9.93 9.93 0 0 1-1.523-5.291c.002-5.488 4.467-9.953 9.957-9.953 2.66 0 5.16 1.037 7.04 2.92a9.873 9.873 0 0 1 2.913 7.039c-.003 5.489-4.468 9.954-9.959 9.954zm8.413-18.365A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}