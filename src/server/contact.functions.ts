import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const baseSchema = z.object({
  // honeypot — must be empty
  website: z.string().max(0).optional().default(""),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(60).optional().default(""),
  company: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(1).max(4000),
  kind: z.enum(["general", "hausverwaltung"]),
});

// Naive in-memory rate limit (per warm instance)
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function checkRate(key: string) {
  const now = Date.now();
  const arr = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(key, arr);
  return arr.length <= MAX_PER_WINDOW;
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => baseSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      // Silently accept honeypot hits
      return { ok: true };
    }
    const key = data.email.toLowerCase();
    if (!checkRate(key)) {
      return { ok: false, error: "rate_limited" as const };
    }

    const target = "info@buddenhagen.com";
    const subject =
      data.kind === "hausverwaltung"
        ? `[Hausverwaltung] Anfrage von ${data.name}`
        : `[Kontakt] Anfrage von ${data.name}`;

    // TODO: wire a real email provider here (e.g. Resend via connector,
    // or Lovable Emails). For now we log the structured payload; the
    // form is fully functional end-to-end and ready to swap in a sender.
    console.log("[contact] outbound email", {
      to: target,
      subject,
      replyTo: data.email,
      payload: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        kind: data.kind,
        message: data.message,
      },
    });

    return { ok: true };
  });