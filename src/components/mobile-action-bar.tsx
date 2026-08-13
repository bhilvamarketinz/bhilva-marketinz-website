import { Phone, MessageCircle, Send } from "lucide-react";

import { CONTACT } from "@/lib/site";
import { useInquiry } from "@/components/inquiry";

export function MobileActionBar() {
  const { openInquiry } = useInquiry();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
      <a
        href={CONTACT.phoneHref}
        className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-foreground active:bg-accent"
      >
        <Phone className="size-4 text-primary" />
        Call
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-border py-2.5 text-xs font-medium text-foreground active:bg-accent"
      >
        <MessageCircle className="size-4 text-primary" />
        WhatsApp
      </a>
      <button
        onClick={() => openInquiry({ mode: "inquiry" })}
        className="flex cursor-pointer flex-col items-center gap-1 py-2.5 text-xs font-medium text-foreground active:bg-accent"
      >
        <Send className="size-4 text-primary" />
        Inquiry
      </button>
    </div>
  );
}
