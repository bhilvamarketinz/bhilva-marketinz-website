import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-kitchenware.jpg";
import portfolioImage from "@/assets/supply-portfolio.jpg";
import { Button } from "@/components/ui/button";
import { Reveal, MaskedImage } from "@/components/reveal";
import { CategoryShowcase } from "@/components/category-showcase";
import {
  CatalogBand,
  CheckList,
  FinalCtaSection,
  SectionHeading,
  SupplyReachSection,
  WhyChooseSection,
} from "@/components/sections";
import { useInquiry } from "@/components/inquiry";
import { BRAND, CATEGORIES, CONTACT } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhilva Marketinz — Premium Kitchenware & Hospitality Supplies" },
      {
        name: "description",
        content:
          "Bhilva Marketinz supplies cutlery, crockery, pots & pans, glassware, barware and bakery products for professional kitchens, hotels, restaurants and bars.",
      },
      { property: "og:title", content: "Bhilva Marketinz — Kitchenware & Hospitality Supplies" },
      {
        property: "og:description",
        content:
          "Quality products for professional kitchens, restaurants, hotels, bakeries, bars and commercial requirements.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BRAND,
          description:
            "Product-supply company for kitchenware, hospitality, restaurant, hotel and commercial-use products.",
          telephone: "+91 97403 68339",
          email: CONTACT.email,
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <AboutPreview />
      <WhyChooseSection />
      <SupplyReachSection />
      <PortfolioSection />
      <div className="py-20 lg:py-24">
        <CatalogBand />
      </div>
      <FinalCtaSection />
    </>
  );
}

function Hero() {
  const { openInquiry } = useInquiry();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92svh] overflow-hidden bg-charcoal">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional cookware, cutlery, crockery and glassware supplied by Bhilva Marketinz"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/70" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-5 pb-28 pt-28 sm:px-8 lg:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="eyebrow flex items-center gap-2 text-leaf"
        >
          <Sparkles className="size-3.5" /> Kitchenware &amp; Hospitality Supply
        </motion.p>

        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.06] text-forest-foreground sm:text-6xl lg:text-7xl">
          {"Premium Kitchenware & Hospitality Supplies".split(" ").map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-forest-foreground/72 sm:text-lg"
        >
          Quality products for professional kitchens, restaurants, hotels, hospitality
          businesses, bakeries, bars and commercial requirements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button asChild variant="brand" size="xl" className="group">
            <Link to="/products">
              View Products
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="onDark" size="xl" onClick={() => openInquiry({ mode: "inquiry" })}>
            Product Inquiry
          </Button>
          <Button variant="onDark" size="xl" onClick={() => openInquiry({ mode: "quote" })}>
            Get a Quote
          </Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> WhatsApp Inquiry
            </a>
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-forest-foreground/15 pt-6"
        >
          {CATEGORIES.map((c) => (
            <li key={c.slug} className="eyebrow text-forest-foreground/55">
              {c.name}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative">
          <MaskedImage
            src={CATEGORIES[2]!.image}
            alt="Crockery and tableware supplied for hospitality businesses"
            width={1200}
            height={900}
            className="aspect-4/5 rounded-xl"
          />
          <MaskedImage
            src={CATEGORIES[0]!.image}
            alt="Professional cookware range"
            width={1200}
            height={900}
            className="absolute -bottom-8 -right-4 hidden aspect-square w-48 rounded-xl border-4 border-sand sm:block lg:w-60"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow={`About ${BRAND}`}
            title="A professional product-supply company"
            copy="Bhilva Marketinz serves requirements across kitchenware, hospitality and related commercial product categories, bringing multiple product lines together under one supply partner."
          />
          <Reveal delay={0.15} className="mt-8">
            <CheckList
              items={[
                "Six core product categories under one supplier",
                "Products intended for professional and commercial use",
                "Inquiry and quotation support for business and bulk requirements",
              ]}
            />
          </Reveal>
          <Reveal delay={0.25} className="mt-8">
            <Button asChild variant="quiet" size="lg" className="group">
              <Link to="/about">
                More about the company
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const { openInquiry } = useInquiry();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Portfolio"
        title="Our Supply Portfolio"
        copy="A flexible space for real supply projects, product-supply photographs and project highlights as they are added by the business."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <MaskedImage
          src={portfolioImage}
          alt="Hospitality supplies prepared for dispatch"
          width={1400}
          height={1000}
          className="aspect-16/10 rounded-xl"
          imgClassName="transition-transform duration-[1.4s] hover:scale-105"
        />
        <div className="grid gap-6">
          {[
            {
              title: "Hospitality supply",
              body: "Kitchen and service products supplied for hotel and restaurant operations.",
            },
            {
              title: "Bakery & bar supply",
              body: "Bakery supplies and bar service products for commercial venues.",
            },
          ].map((item, i) => (
            <Reveal
              key={item.title}
              delay={0.12 * i}
              className="flex h-full flex-col justify-between rounded-xl border border-dashed border-border bg-card p-7"
            >
              <div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground/70">
                Project photographs and details can be added here.
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
        <Button variant="brand" size="lg" onClick={() => openInquiry({ mode: "inquiry" })}>
          Product Inquiry
        </Button>
        <Button asChild variant="quiet" size="lg">
          <a href={CONTACT.phoneHref}>
            <Phone /> Call Now
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
