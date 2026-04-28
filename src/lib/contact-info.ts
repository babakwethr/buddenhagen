// Central contact info — change WhatsApp number here.
// Format: digits only, with country code, no spaces or "+".
export const WHATSAPP_NUMBER = "491701234567"; // TODO: replace with real number
export const WHATSAPP_DEFAULT_MESSAGE_DE =
  "Hallo Buddenhagen, ich habe eine Frage…";
export const WHATSAPP_DEFAULT_MESSAGE_EN =
  "Hello Buddenhagen, I have a question…";

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? WHATSAPP_DEFAULT_MESSAGE_DE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}