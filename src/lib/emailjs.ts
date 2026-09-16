import emailjs from "@emailjs/browser";

export const EMAILJS = {
  publicKey: "aLlN6EcHszMnWZvmd",
  serviceId: "service_3zd6e9i",
  templateId: "template_wn3559j",
};

export type EmailPayload = Record<string, string>;

export async function sendEmail(params: EmailPayload) {
  return emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, params, {
    publicKey: EMAILJS.publicKey,
  });
}
