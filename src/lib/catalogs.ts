import crockeryPdf from "@/assets/bhilva-crockery-catalog.pdf.asset.json";
import organicPdf from "@/assets/organic-series-crockery.pdf.asset.json";
import glasswarePdf from "@/assets/bhilva-cocktail-glassware.pdf.asset.json";
import colouredPdf from "@/assets/coloured-crockery.pdf.asset.json";
import tablewarePdf from "@/assets/tableware-crockery.pdf.asset.json";
import bakeryAccessoriesPdf from "@/assets/BHILVA_BAKERY_ACCESSORIES.pdf.asset.json";
import bakeryPdf from "@/assets/BHILVA_BAKERY_compressed.pdf.asset.json";
import crockeryCover from "@/assets/cat-crockery.jpg";
import glasswareCover from "@/assets/cat-glassware.jpg";
import bakeryCover from "@/assets/cat-bakery.jpg";

export type Catalog = {
  slug: string;
  name: string;
  description: string;
  file: string;
  fileName: string;
  cover: string;
  pages?: number;
  category: "crockery" | "glassware" | "bakery";
};

export const CATALOGS: Catalog[] = [
  {
    slug: "crockery",
    name: "Crockery Catalog",
    description:
      "Plates, bowls and serveware for dining rooms, banquets and hospitality service.",
    file: crockeryPdf.url,
    fileName: "bhilva-crockery-catalog.pdf",
    cover: crockeryCover,
    pages: 5,
    category: "crockery",
  },
  {
    slug: "organic-series-crockery",
    name: "Organic Series Crockery",
    description:
      "Organic-inspired crockery series with natural textures and finishes for premium dining.",
    file: organicPdf.url,
    fileName: "organic-series-crockery.pdf",
    cover: crockeryCover,
    pages: 19,
    category: "crockery",
  },
  {
    slug: "coloured-crockery",
    name: "Coloured Crockery — 10 Colors",
    description:
      "Crockery collections available in ten colourways for restaurants, cafes and catering.",
    file: colouredPdf.url,
    fileName: "coloured-crockery-10-colors.pdf",
    cover: crockeryCover,
    pages: 62,
    category: "crockery",
  },
  {
    slug: "tableware-crockery",
    name: "Tableware Crockery",
    description:
      "Complete tableware and crockery ranges for hotels, banquets and everyday service.",
    file: tablewarePdf.url,
    fileName: "tableware-crockery.pdf",
    cover: crockeryCover,
    pages: 29,
    category: "crockery",
  },
  {
    slug: "cocktail-glassware",
    name: "Cocktail & Mocktail Glassware",
    description:
      "Cocktail and mocktail glassware for bars, lounges and beverage service.",
    file: glasswarePdf.url,
    fileName: "bhilva-cocktail-mocktail-glassware.pdf",
    cover: glasswareCover,
    pages: 44,
    category: "glassware",
  },
  {
    slug: "bakery",
    name: "Bakery Catalog",
    description:
      "Bakery supplies, tools and equipment for commercial bakeries, cafes and patisseries.",
    file: bakeryPdf.url,
    fileName: "BHILVA_BAKERY_compressed.pdf",
    cover: bakeryCover,
    pages: 26,
    category: "bakery",
  },
  {
    slug: "bakery-accessories",
    name: "Bakery Accessories Catalog",
    description:
      "Specialist bakery accessories and service items for professional baking operations.",
    file: bakeryAccessoriesPdf.url,
    fileName: "BHILVA_BAKERY_ACCESSORIES.pdf",
    cover: bakeryCover,
    pages: 10,
    category: "bakery",
  },
];
