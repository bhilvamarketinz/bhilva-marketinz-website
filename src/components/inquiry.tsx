import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORIES, CONTACT, whatsappLink } from "@/lib/site";

type Mode = "inquiry" | "quote";

type InquiryState = {
  open: boolean;
  mode: Mode;
  product?: string | undefined;
  category?: string | undefined;
};


type Ctx = {
  openInquiry: (opts?: {
    mode?: Mode | undefined;
    product?: string | undefined;
    category?: string | undefined;
  }) => void;
};

const InquiryContext = createContext<Ctx>({ openInquiry: () => {} });

export const useInquiry = () => useContext(InquiryContext);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<InquiryState>({ open: false, mode: "inquiry" });

  const openInquiry = useCallback<Ctx["openInquiry"]>((opts) => {
    setState({
      open: true,
      mode: opts?.mode ?? "inquiry",
      product: opts?.product,
      category: opts?.category,
    });
  }, []);

  const value = useMemo(() => ({ openInquiry }), [openInquiry]);

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <InquiryDialog state={state} onOpenChange={(open) => setState((s) => ({ ...s, open }))} />
    </InquiryContext.Provider>
  );
}

function InquiryDialog({
  state,
  onOpenChange,
}: {
  state: InquiryState;
  onOpenChange: (open: boolean) => void;
}) {
  const isQuote = state.mode === "quote";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      isQuote ? "Quote request — Bhilva Marketinz" : "Product inquiry — Bhilva Marketinz",
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "-"}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "-"}`,
      `Category: ${data.get("category") || "-"}`,
      `Product / requirement: ${data.get("product") || "-"}`,
      `Quantity: ${data.get("quantity") || "-"}`,
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");

    window.open(whatsappLink(lines), "_blank", "noopener");
    toast.success(isQuote ? "Quote request ready to send" : "Inquiry ready to send", {
      description: `Your details are prefilled for WhatsApp. You can also email ${CONTACT.email}.`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={state.open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {isQuote ? "Get a Quote" : "Product Inquiry"}
          </DialogTitle>
          <DialogDescription>
            {isQuote
              ? "Share your bulk or commercial requirement and we will respond with a quotation."
              : "Tell us what you are looking for — built for wholesale and business customers."}
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Name" required />
            <Field id="company" label="Company / Business name" />
            <Field id="phone" label="Phone number" type="tel" required />
            <Field id="email" label="Email" type="email" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="category">Product category</Label>
              <select
                id="category"
                name="category"
                defaultValue={state.category ?? ""}
                className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40"
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <Field id="quantity" label="Quantity / requirement" />
          </div>

          <Field id="product" label="Product interested in" defaultValue={state.product} />

          <div className="grid gap-1.5">
            <Label htmlFor="message">
              {isQuote ? "Additional requirements" : "Message"}
            </Label>
            <Textarea id="message" name="message" rows={3} />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button type="submit" variant="brand" className="flex-1 group">
              {isQuote ? "Submit Request" : "Submit Product Inquiry"}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button asChild type="button" variant="outline">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> WhatsApp
              </a>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  defaultValue,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  defaultValue?: string | undefined;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>
      <Input id={id} name={id} type={type} required={required} defaultValue={defaultValue} />
    </div>
  );
}
