import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { MaskedImage, Reveal } from "@/components/reveal";
import { CatalogBand, FinalCtaSection, SectionHeading, SupplyReachSection } from "@/components/sections";
import { CATEGORIES } from "@/lib/site";
import portfolioImage from "@/assets/supply-portfolio.jpg";

export const Route = createFileRoute("/supply")({
  head: () => ({
    meta: [
      { title: "Supply Portfolio — India-Wide & International | Bhilva Marketinz" },
      {
        name: "description",
        content:
          "Bhilva Marketinz supports kitchenware and hospitality supply requirements across India and international markets.",
      },
      { property: "og:title", content: "Supply Portfolio — Bhilva Marketinz" },
      {
        property: "og:description",
        content:
          "India-wide and international supply of kitchenware and hospitality products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/supply" },
    ],
    links: [{ rel: "canonical", href: "/supply" }],
  }),
  component: SupplyPage,
});

function SupplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Supply"
        title="Our Supply Portfolio"
        copy="Product-supply capability across kitchenware, hospitality and commercial categories — for customers in India and internationally."
        image={CATEGORIES[5]!.image}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Selected supply projects"
          title="Space reserved for real project highlights"
          copy="Project photographs, supply details and customer information can be added to these areas as the business shares them."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <MaskedImage
            src={portfolioImage}
            alt="Kitchenware and hospitality products packed for supply"
            width={1400}
            height={1000}
            className="aspect-4/3 rounded-xl lg:col-span-2"
          />
          <Reveal className="flex flex-col justify-center rounded-xl border border-dashed border-border bg-card p-8">
            <h3 className="text-xl">Add a supply project</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Each project block can hold photographs, the categories supplied and a short
              description of the requirement.
            </p>
          </Reveal>
          {CATEGORIES.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08} className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={c.image}
                alt={`${c.name} supplied by Bhilva Marketinz`}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-16/10 w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg">{c.name} supply</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.tagline}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SupplyReachSection />

      <div className="py-20 lg:py-24">
        <CatalogBand />
      </div>
      <FinalCtaSection />
    </>
  );
}
