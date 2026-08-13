import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { CatalogBand, FinalCtaSection, WhyChooseSection } from "@/components/sections";
import { CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Bhilva Marketinz — Hospitality Supply Partner" },
      {
        name: "description",
        content:
          "Wide product selection, professional product focus and business inquiry support across kitchenware and hospitality supply categories.",
      },
      { property: "og:title", content: "Why Choose Bhilva Marketinz" },
      {
        property: "og:description",
        content:
          "A supply partner built around professional kitchens, hotels, bakeries and bars.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUsPage,
});

function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Why businesses work with Bhilva Marketinz"
        copy="Product categories, supply support and an inquiry process designed for professional and commercial buyers."
        image={CATEGORIES[0]!.image}
      />
      <WhyChooseSection />
      <div className="pb-20 lg:pb-24">
        <CatalogBand />
      </div>
      <FinalCtaSection />
    </>
  );
}
