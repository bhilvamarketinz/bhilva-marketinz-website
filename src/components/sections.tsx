import { motion } from "motion/react";
import { ArrowRight, FileDown, MessageCircle, Phone, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, staggerChild, staggerParent } from "@/components/reveal";
import { useInquiry } from "@/components/inquiry";
import { CatalogGrid } from "@/components/catalog-grid";

import { requestCatalog } from "@/components/site-header";
import { CONTACT, WHY_CHOOSE } from "@/lib/site";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${tone === "dark" ? "text-leaf" : "text-primary"}`}>{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl ${
          tone === "dark" ? "text-forest-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === "dark" ? "text-forest-foreground/70" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

export function WhyChooseSection() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="A supply partner built around professional kitchens"
        copy="Bhilva Marketinz focuses on product categories that hospitality and commercial businesses depend on every day."
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {WHY_CHOOSE.map((item, i) => (
          <motion.div
            key={item.title}
            variants={staggerChild}
            className="group relative bg-card p-8 transition-colors duration-500 hover:bg-secondary"
          >
            <span className="eyebrow text-muted-foreground/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-xl text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const NODES = [
  { x: 22, y: 42, label: "International" },
  { x: 50, y: 30, label: "Europe" },
  { x: 68, y: 55, label: "India" },
  { x: 82, y: 40, label: "Asia Pacific" },
  { x: 40, y: 66, label: "Africa" },
];

export function SupplyReachSection() {
  const { openInquiry } = useInquiry();

  return (
    <section id="supply" className="relative overflow-hidden bg-forest py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-10 size-80 rounded-full bg-leaf/10 blur-3xl animate-float-slow" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Reach"
            title="India-Wide & International Supply"
            copy="Bhilva Marketinz serves customers across India and supports international supply requirements for kitchenware and hospitality products."
          />
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <Button variant="whatsapp" size="lg" onClick={() => openInquiry({ mode: "quote" })}>
              Get a Quote <ArrowRight />
            </Button>
            <Button asChild variant="onDark" size="lg">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> WhatsApp Inquiry
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-4/3 w-full rounded-xl border border-forest-foreground/15 bg-forest-foreground/4 p-6">
            <svg viewBox="0 0 100 80" className="h-full w-full" role="img" aria-label="Illustrative supply reach map">
              <defs>
                <pattern id="dots" width="2.4" height="2.4" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.42" className="fill-forest-foreground/18" />
                </pattern>
              </defs>
              <rect width="100" height="80" fill="url(#dots)" />
              {NODES.map((n, i) =>
                i === 2 ? null : (
                  <motion.path
                    key={n.label}
                    d={`M ${NODES[2]!.x} ${NODES[2]!.y} Q ${(NODES[2]!.x + n.x) / 2} ${
                      Math.min(NODES[2]!.y, n.y) - 14
                    } ${n.x} ${n.y}`}
                    fill="none"
                    className="stroke-leaf/70"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 * i, ease: "easeInOut" }}
                  />
                ),
              )}
              {NODES.map((n, i) => (
                <motion.g
                  key={`n-${n.label}`}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                >
                  <circle cx={n.x} cy={n.y} r={i === 2 ? 2 : 1.2} className="fill-leaf" />
                  {i === 2 && (
                    <circle cx={n.x} cy={n.y} r="4" className="fill-none stroke-leaf/50" strokeWidth="0.4" />
                  )}
                </motion.g>
              ))}
            </svg>
            <p className="eyebrow absolute bottom-4 left-6 text-forest-foreground/45">
              Illustrative reach diagram
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CatalogBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-12">
        <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 shimmer-line opacity-60 [animation:sheen_5s_ease-in-out_infinite]" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow text-primary">Catalog</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">View or Download Our Catalogs</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Read the complete catalog online or download the PDF. Need a category we have not
              published yet? Request it and we will share the current catalog.
            </p>
          </div>
          <Button variant="quiet" size="xl" className="group" onClick={requestCatalog}>
            <FileDown className="transition-transform duration-300 group-hover:translate-y-1" />
            Request a Catalog
          </Button>
        </div>

        <div className="relative mt-10">
          <h3 className="text-xl font-medium text-foreground">Cutlery Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="cutlery" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Crockery Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="crockery" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Glassware Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="glassware" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Bakery Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="bakery" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Chafing Dish Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="chafing" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Pots & Pans Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="pots-pans" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">GN Pans & Lids Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="gn-pans" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Kitchen, Bar & Bakery Accessories Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="kitchen-bar-bakery" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Knife & Kitchen Accessories Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="knife-kitchen-accessories" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Table Top Machinery & Accessories Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="table-top-machinery" />
          </div>
        </div>

        <div className="relative mt-14">
          <h3 className="text-xl font-medium text-foreground">Wooden Buffetware Accessories Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="wooden-buffetware" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}


export function FinalCtaSection() {
  const { openInquiry } = useInquiry();

  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-forest-foreground lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 size-[28rem] rounded-full bg-primary/15 blur-[110px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl leading-[1.12] text-forest-foreground sm:text-4xl lg:text-5xl">
            Looking for Quality Kitchenware &amp; Hospitality Supplies?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-forest-foreground/70">
            Explore our product categories or connect with Bhilva Marketinz for your product
            requirements.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-9 flex flex-wrap justify-center gap-3">
          <Button variant="brand" size="xl" onClick={() => openInquiry({ mode: "inquiry" })}>
            Product Inquiry <ArrowRight />
          </Button>
          <Button variant="onDark" size="xl" onClick={() => openInquiry({ mode: "quote" })}>
            Get a Quote
          </Button>
          <Button asChild variant="onDark" size="xl">
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> WhatsApp Inquiry
            </a>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <a href={CONTACT.phoneHref}>
              <Phone /> Call Now
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
