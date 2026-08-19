import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FinalCtaSection, SectionHeading } from "@/components/sections";
import { useInquiry } from "@/components/inquiry";
import { CATEGORIES, CONTACT, whatsappLink } from "@/lib/site";
import { sendEmail } from "@/lib/emailjs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bhilva Marketinz — Call, WhatsApp or Send an Inquiry" },
      {
        name: "description",
        content:
          "Contact Bhilva Marketinz for kitchenware and hospitality product inquiries. Call 97403 68339, WhatsApp 9964335352 or email trendinfkix@gmail.com.",
      },
      { property: "og:title", content: "Contact Bhilva Marketinz" },
      {
        property: "og:description",
        content: "Call, WhatsApp or email us for product inquiries and quotations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { openInquiry } = useInquiry();
  const [sending, setSending] = useState(false);
  const mountedAt = useRef(Date.now());

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Anti-spam: hidden honeypot + minimum fill time. Silently accept so bots
    // get no signal about why the message went nowhere.
    if (isHoneypotTripped(data) || isTooFast(mountedAt.current)) {
      toast.success("Message sent", {
        description: "Thanks — we've received your message and will get back to you shortly.",
      });
      form.reset();
      return;
    }

    const limit = checkRateLimit("contact-form");
    if (!limit.allowed) {
      toast.error("Too many messages", {
        description: `Please wait ${formatWait(limit.retryAfterMs)} before sending again, or call ${CONTACT.phone}.`,
      });
      return;
    }

    const message = [
      "Contact message — Bhilva Marketinz",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "-"}`,
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");

    setSending(true);
    try {
      await sendEmail({
        subject: "New contact message — Bhilva Marketinz",
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
        full_message: message,
      });
      toast.success("Message sent", {
        description: "Thanks — we've received your message and will get back to you shortly.",
      });
      form.reset();
    } catch {
      window.open(whatsappLink(message), "_blank", "noopener");
      toast.error("Could not send email", {
        description: `We opened WhatsApp with your details instead. You can also email ${CONTACT.email}.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Bhilva Marketinz"
        copy="Call, WhatsApp or send a message with your product requirement — we respond to business and bulk inquiries."
        image={CATEGORIES[4]!.image}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:py-28">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Direct contact"
            copy="Reach us on phone or WhatsApp for the quickest response to product inquiries and quotations."
          />

          <div className="mt-8 grid gap-3">
            <ContactRow
              icon={<Phone className="size-4" />}
              label="Phone"
              value={CONTACT.phone}
              href={CONTACT.phoneHref}
            />
            <ContactRow
              icon={<MessageCircle className="size-4" />}
              label="WhatsApp"
              value={CONTACT.whatsapp}
              href={CONTACT.whatsappHref}
              external
            />
            <ContactRow
              icon={<Mail className="size-4" />}
              label="Email"
              value={CONTACT.email}
              href={CONTACT.emailHref}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Button variant="brand" onClick={() => openInquiry({ mode: "inquiry" })}>
              <Send /> Product Inquiry
            </Button>
            <Button variant="quiet" onClick={() => openInquiry({ mode: "quote" })}>
              Get a Quote
            </Button>
          </div>
        </div>

        <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elegant)] sm:p-9">
          <h2 className="text-2xl">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share your requirement and we will get back to you.
          </p>
          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="c-name">Name *</Label>
                <Input id="c-name" name="name" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="c-phone">Phone *</Label>
                <Input id="c-phone" name="phone" type="tel" required />
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" name="email" type="email" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="c-message">Message</Label>
              <Textarea id="c-message" name="message" rows={4} />
            </div>
            <Button type="submit" variant="brand" size="lg" className="group" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
              <Send className="transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </Reveal>
      </section>

      <section id="map" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <SectionHeading
          eyebrow="Location"
          title="Find us on Google Maps"
          copy="The business location map will be embedded here once the official Google Maps location is provided."
        />
        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-2xl border border-border bg-secondary">
          <div className="flex min-h-64 flex-col items-center justify-center gap-3 p-12 text-center">
            <MapPin className="size-8 text-primary" />
            <p className="font-display text-xl">Google Maps embed</p>
            <p className="max-w-md text-sm text-muted-foreground">
              Share the Bhilva Marketinz Google Maps link and it will be embedded here,
              styled into the page rather than a plain iframe.
            </p>
            <Button asChild variant="quiet" size="sm">
              <a href={CONTACT.phoneHref}>
                <Phone /> Call for directions
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <FinalCtaSection />
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </span>
      <span>
        <span className="eyebrow block text-muted-foreground">{label}</span>
        <span className="text-base text-foreground">{value}</span>
      </span>
    </a>
  );
}
