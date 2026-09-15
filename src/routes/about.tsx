import { createFileRoute } from "@tanstack/react-router";

import { MaskedImage, Reveal } from "@/components/reveal";
import { CatalogBand, CheckList, FinalCtaSection, SectionHeading } from "@/components/sections";
import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/site";
import portfolioImage from "@/assets/supply-portfolio.jpg";
import premisesImage from "@/assets/bhilva-premises-about.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bhilva Marketinz — Kitchenware & Hospitality Supplier" },
      {
        name: "description",
        content:
          "Bhilva Marketinz is a professional product-supply company serving kitchenware, hospitality and related commercial product categories.",
      },
      { property: "og:title", content: "About Bhilva Marketinz" },
      {
        property: "og:description",
        content:
          "A professional product-supply company for kitchenware, hospitality and commercial product categories.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`About ${BRAND}`}
        copy="A professional product-supply company serving requirements across kitchenware, hospitality and related commercial product categories."
        image={premisesImage.url}
        layout="split"
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <MaskedImage
          src={portfolioImage}
          alt="Hospitality and kitchenware products prepared for supply"
          width={1400}
          height={1000}
          className="aspect-4/3 rounded-xl"
        />
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="One supply partner across six product categories"
            copy="Bhilva Marketinz brings cutlery, crockery, pots & pans, glassware, barware and bakery supplies together, so professional kitchens and hospitality businesses can source multiple product lines from a single point of contact."
          />
          <Reveal delay={0.15} className="mt-8">
            <CheckList
              items={[
                "Product categories intended for professional and commercial usage",
                "Support for business, wholesale and bulk inquiries",
                "Supply across India with support for international requirements",
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Coming soon"
            title="Company story, team and milestones"
            copy="These areas are reserved for content the business will add — company story, founder information, team photographs, business photographs and milestones."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Company Story", "Founder", "Team Photographs", "Milestones"].map((title, i) => (
              <Reveal
                key={title}
                delay={i * 0.08}
                className="rounded-xl border border-dashed border-border bg-card p-7"
              >
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Content and photographs can be added to this section later.
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 lg:py-24">
        <CatalogBand />
      </div>
      <FinalCtaSection />
    </>
  );
}
