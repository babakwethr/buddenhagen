import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

type Kind = "general" | "hausverwaltung";

const CONTACT_EMAIL = "info@buddenhagen.com";

export function ContactForm({ kind = "general" }: { kind?: Kind }) {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = {
      website: String(fd.get("website") ?? ""),
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      kind,
    };

    const next: Record<string, string> = {};
    if (!data.name) next.name = t.common.required;
    if (!data.email) next.email = t.common.required;
    else if (!/.+@.+\..+/.test(data.email)) next.email = t.common.invalidEmail;
    if (!data.message) next.message = t.common.required;
    if (Object.keys(next).length) {
      setErrors(next);
      setStatus("idle");
      return;
    }

    // honeypot
    if (data.website) { setStatus("success"); return; }

    const subject = kind === "hausverwaltung"
      ? `[Hausverwaltung] Anfrage von ${data.name}`
      : `[Kontakt] Anfrage von ${data.name}`;
    const body = [
      `Name: ${data.name}`,
      `E-Mail: ${data.email}`,
      data.phone ? `Telefon: ${data.phone}` : null,
      data.company ? `Unternehmen: ${data.company}` : null,
      ``,
      data.message,
    ].filter((l) => l !== null).join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="border border-accent bg-accent/10 p-8">
        <h3 className="font-display text-2xl">{t.common.successTitle}</h3>
        <p className="mt-2 text-muted-foreground">{t.common.successBody}</p>
      </div>
    );
  }

  const showCompany = kind === "hausverwaltung";
  const labels = kind === "hausverwaltung" ? t.hv.f : { name: t.hv.f.name, phone: t.hv.f.phone, email: t.hv.f.email, message: t.hv.f.message, company: t.hv.f.company };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid md:grid-cols-2 gap-5">
        <Field label={labels.name} name="name" error={errors.name} required />
        {showCompany && <Field label={labels.company} name="company" />}
        <Field label={labels.phone} name="phone" type="tel" />
        <Field label={labels.email} name="email" type="email" error={errors.email} required />
      </div>
      <Field label={labels.message} name="message" textarea error={errors.message} required />

      {status === "error" && (
        <div className="border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <strong className="font-display">{t.common.errorTitle}.</strong> {t.common.errorBody}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-display uppercase tracking-wider hover:bg-[var(--copper-deep)] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? t.common.submitting : t.common.sendInquiry}
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", textarea, required, error,
}: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean; error?: string }) {
  const base = "w-full bg-card border border-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent px-4 py-3 text-sm transition";
  return (
    <label className="block">
      <span className="block text-xs font-display uppercase tracking-wider mb-2 text-muted-foreground">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={5} className={base} aria-invalid={!!error} />
      ) : (
        <input name={name} type={type} className={base} aria-invalid={!!error} />
      )}
      {error && <span className="block mt-1.5 text-xs text-destructive">{error}</span>}
    </label>
  );
}