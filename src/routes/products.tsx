import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Phone, ZoomIn } from "lucide-react";
import { CatalogGrid } from "@/components/catalog-grid";


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PageHero } from "@/components/page-hero";
import { CatalogBand, FinalCtaSection } from "@/components/sections";
import { useInquiry } from "@/components/inquiry";
import { CATEGORIES, CONTACT, whatsappLink, type Category } from "@/lib/site";

const searchSchema = z.object({
  category: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/products")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Products — Cutlery, Crockery, Glassware & More | Bhilva Marketinz" },
      {
        name: "description",
        content:
          "Browse Bhilva Marketinz product categories: pots & pans, cutlery, crockery, glassware, barware and bakery supplies for commercial kitchens and hospitality businesses.",
      },
      { property: "og:title", content: "Product Categories — Bhilva Marketinz" },
      {
        property: "og:description",
        content:
          "Kitchenware and hospitality products for restaurants, hotels, bakeries and bars.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/products" });
  const [preview, setPreview] = useState<Category | null>(null);
  const { openInquiry } = useInquiry();

  const active = category ?? "all";
  const visible = active === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.slug === active);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Product Gallery"
        copy="Explore product categories supplied by Bhilva Marketinz. Product photographs, variants and specifications are added by the business as they become available."
        image={CATEGORIES[3]!.image}
      />

      <section id="catalogs" className="mx-auto max-w-7xl px-5 pt-12 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">Catalogs</p>
          <h2 className="mt-2 text-2xl sm:text-3xl">Browse our product catalogs</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            View the complete catalog right here in your browser, or download the PDF to share
            with your team.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-medium text-foreground">Cutlery Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="cutlery" />
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-medium text-foreground">Crockery Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="crockery" />
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-medium text-foreground">Glassware Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="glassware" />
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-medium text-foreground">Bakery Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="bakery" />
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-medium text-foreground">Chafing Dish Catalogs</h3>
          <div className="mt-5">
            <CatalogGrid category="chafing" />
          </div>
        </div>
      </section>




      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="flex flex-wrap gap-2">
          {[{ slug: "all", name: "All Products" }, ...CATEGORIES].map((c) => {
            const isActive = active === c.slug;
            return (
              <button
                key={c.slug}
                onClick={() =>
                  navigate({
                    search: c.slug === "all" ? {} : { category: c.slug },
                    resetScroll: false,
                  })
                }
                className={`relative cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((c, i) => (
              <motion.article
                key={c.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-xl border border-border bg-card"
              >
                <button
                  onClick={() => setPreview(c)}
                  className="relative block w-full cursor-zoom-in overflow-hidden"
                  aria-label={`Preview ${c.name}`}
                >
                  <img
                    src={c.image}
                    alt={`${c.name} products supplied by Bhilva Marketinz`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="aspect-4/3 w-full object-cover transition-transform duration-[1.2s] group-hover:scale-107"
                  />
                  <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-background/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="size-4 text-foreground" />
                  </span>
                </button>

                <div className="p-6">
                  <p className="eyebrow text-primary">{c.tagline}</p>
                  <h2 className="mt-2 text-2xl">{c.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground/70">
                    Materials, sizes and variants are shared on request.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="brand"
                      onClick={() => openInquiry({ mode: "inquiry", category: c.name })}
                    >
                      Product Inquiry
                    </Button>
                    <Button
                      size="sm"
                      variant="quiet"
                      onClick={() => openInquiry({ mode: "quote", category: c.name })}
                    >
                      Get a Quote
                    </Button>
                    <Button asChild size="sm" variant="quiet">
                      <a
                        href={whatsappLink(
                          `Hello Bhilva Marketinz, I would like details about ${c.name}.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle /> WhatsApp
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="quiet">
                      <a href={CONTACT.phoneHref}>
                        <Phone /> Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 rounded-xl border border-dashed border-border p-8 text-center">
          <h2 className="text-xl">More product photographs coming soon</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            This gallery is built to grow — real Bhilva Marketinz product photographs, names,
            sizes and variants can be added to each category.
          </p>
        </div>
      </section>

      <div className="pb-20">
        <CatalogBand />
      </div>
      <FinalCtaSection />

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{preview?.name}</DialogTitle>
            <DialogDescription>{preview?.description}</DialogDescription>
          </DialogHeader>
          {preview ? (
            <img
              src={preview.image}
              alt={`${preview.name} — large preview`}
              width={1200}
              height={900}
              className="w-full rounded-md object-cover"
            />
          ) : null}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="brand"
              onClick={() => {
                openInquiry({ mode: "inquiry", category: preview?.name });
                setPreview(null);
              }}
            >
              Product Inquiry
            </Button>
            <Button
              variant="quiet"
              onClick={() => {
                openInquiry({ mode: "quote", category: preview?.name });
                setPreview(null);
              }}
            >
              Get a Quote
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
