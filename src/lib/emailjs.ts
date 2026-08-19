import emailjs from "@emailjs/browser";

export const EMAILJS = {
  publicKey: "aLlN6EcHszMnWZvmd",
  serviceId: "service_95o4lmm",
  templateId: "template_nu238dw",
};

export type EmailPayload = Record<string, string>;

export async function sendEmail(params: EmailPayload) {
  return emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, params, {
    publicKey: EMAILJS.publicKey,
  });
}
