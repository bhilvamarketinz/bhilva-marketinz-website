import crockeryPdf from "@/assets/crockery-catalog-bhilva.pdf.asset.json";
import organicPdf from "@/assets/organic-series-crockery.pdf.asset.json";
import glasswarePdf from "@/assets/bhilva-cocktail-glassware.pdf.asset.json";
import mixologyGlasswarePdf from "@/assets/bhilva-mixology-glassware.pdf.asset.json";
import regularGlasswarePdf from "@/assets/bhilva-regular-glassware.pdf.asset.json";
import colouredPdf from "@/assets/coloured-crockery.pdf.asset.json";
import tablewarePdf from "@/assets/tableware-crockery.pdf.asset.json";
import bakeryAccessoriesPdf from "@/assets/BHILVA_BAKERY_ACCESSORIES.pdf.asset.json";
import bakeryPdf from "@/assets/BHILVA_BAKERY_compressed.pdf.asset.json";
import chafDishPdf from "@/assets/chaf-dish.pdf.asset.json";
import cutleryPdf from "@/assets/cutlery-catalog.pdf.asset.json";
import gnPansPdf from "@/assets/gn-pans-and-lids.pdf.asset.json";
import potsAndPansPdf from "@/assets/pots-and-pans.pdf.asset.json";
import kitchenBarBakeryPdf from "@/assets/kitchen-bar-bakery-accessories.pdf.asset.json";
import knifeKitchenPdf from "@/assets/knife-and-kitchen-accessories.pdf.asset.json";
import tableTopMachineryPdf from "@/assets/table-top-machinery-accessories.pdf.asset.json";
import woodenBuffetwarePdf from "@/assets/wooden-buffetware-accessories-raiser.pdf.asset.json";
import organicCatalogCover from "@/assets/catalog-organic-crockery.jpg.asset.json";
import colouredCatalogCover from "@/assets/catalog-coloured-crockery.jpg.asset.json";
import tablewareCatalogCover from "@/assets/catalog-tableware-crockery.jpg.asset.json";
import bakeryAccessoriesCatalogCover from "@/assets/catalog-bakery-accessories.jpg.asset.json";
import mixologyGlasswareCover from "@/assets/catalog-bhilva-mixology-glassware.jpg.asset.json";
import regularGlasswareCover from "@/assets/catalog-bhilva-regular-glassware.jpg.asset.json";
import crockeryCover from "@/assets/cat-crockery.jpg";
import crockeryCatalogCover from "@/assets/cat-crockery-cover.jpg";
import glasswareCover from "@/assets/cat-glassware.jpg";
import bakeryCover from "@/assets/cat-bakery.jpg";
import chafingCover from "@/assets/cat-chafing.jpg";
import cutleryCover from "@/assets/cat-cutlery.jpg";
import gnPansCover from "@/assets/cat-pots-pans.jpg";
import potsPansCover from "@/assets/cat-pots-pans-hero.jpg";
import kitchenBarBakeryCover from "@/assets/cat-kitchen-bar-bakery.jpg";
import knifeKitchenCover from "@/assets/cat-knife-kitchen.jpg";
import tableTopMachineryCover from "@/assets/cat-table-top-machinery.jpg";
import woodenBuffetwareCover from "@/assets/cat-wooden-buffetware.jpg";

export type Catalog = {
  slug: string;
  name: string;
  description: string;
  file: string;
  fileName: string;
  cover: string;
  pages?: number;
  category: "crockery" | "glassware" | "bakery" | "chafing" | "cutlery" | "gn-pans" | "pots-pans" | "kitchen-bar-bakery" | "knife-kitchen-accessories" | "table-top-machinery" | "wooden-buffetware";
};

export const CATALOGS: Catalog[] = [
  {
    slug: "cutlery-catalog",
    name: "Cutlery Catalog",
    description:
      "Premium cutlery collections for restaurants, hotels, catering and fine dining service.",
    file: cutleryPdf.url,
    fileName: "cutlery-catalog.pdf",
    cover: cutleryCover,
    pages: 20,
    category: "cutlery",
  },
  {
    slug: "crockery",
    name: "Crockery Catalog",
    description:
      "Plates, bowls and serveware for dining rooms, banquets and hospitality service.",
    file: crockeryPdf.url,
    fileName: "crockery-catalog-bhilva.pdf",
    cover: crockeryCatalogCover,
    pages: 45,
    category: "crockery",
  },
  {
    slug: "organic-series-crockery",
    name: "Organic Series Crockery",
    description:
      "Organic-inspired crockery series with natural textures and finishes for premium dining.",
    file: organicPdf.url,
    fileName: "organic-series-crockery.pdf",
    cover: organicCatalogCover.url,
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
    cover: colouredCatalogCover.url,
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
    cover: tablewareCatalogCover.url,
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
    slug: "bhilva-mixology-glassware",
    name: "Bhilva Mixology Glassware",
    description:
      "Specialist mixology glassware for cocktails, creative beverage presentation and professional bar service.",
    file: mixologyGlasswarePdf.url,
    fileName: "bhilva-mixology-glassware.pdf",
    cover: mixologyGlasswareCover.url,
    pages: 47,
    category: "glassware",
  },
  {
    slug: "bhilva-regular-glassware",
    name: "Bhilva Regular Glassware",
    description:
      "Everyday glassware collections for restaurants, hotels, catering and beverage service.",
    file: regularGlasswarePdf.url,
    fileName: "bhilva-regular-glassware.pdf",
    cover: regularGlasswareCover.url,
    pages: 20,
    category: "glassware",
  },
  {
    slug: "bakery",
    name: "Bakery Catalog",
    description:
      "Bakery supplies, tools and equipment for commercial bakeries, cafes and patisseries.",
    file: bakeryPdf.url,
    fileName: "BHILVA_BAKERY_compressed.pdf",
    cover: bakeryAccessoriesCatalogCover.url,
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
  {
    slug: "chaf-dish",
    name: "Chafing Dish Catalog",
    description:
      "Stainless steel chafing dishes, buffet warmers and serving equipment for hotels, catering and banquet service.",
    file: chafDishPdf.url,
    fileName: "CHAF_DISH.pdf",
    cover: chafingCover,
    pages: 14,
    category: "chafing",
  },
  {
    slug: "gn-pans-and-lids",
    name: "GN Pans & Lids Catalog",
    description:
      "Gastronorm pans and lids for commercial kitchens, buffet service and food preparation.",
    file: gnPansPdf.url,
    fileName: "gn-pans-and-lids.pdf",
    cover: gnPansCover,
    pages: 6,
    category: "gn-pans",
  },
  {
    slug: "pots-and-pans",
    name: "Pots & Pans Catalog",
    description:
      "Professional pots and pans for commercial kitchens, restaurants, hotels and catering operations.",
    file: potsAndPansPdf.url,
    fileName: "pots-and-pans.pdf",
    cover: potsPansCover,
    pages: 14,
    category: "pots-pans",
  },
  {
    slug: "kitchen-bar-bakery-accessories",
    name: "Kitchen, Bar & Bakery Accessories Catalog",
    description:
      "Comprehensive accessories for commercial kitchens, bar service and bakery operations — tools, utensils and service essentials.",
    file: kitchenBarBakeryPdf.url,
    fileName: "kitchen-bar-bakery-accessories.pdf",
    cover: kitchenBarBakeryCover,
    pages: 136,
    category: "kitchen-bar-bakery",
  },
  {
    slug: "knife-and-kitchen-accessories",
    name: "Knife & Kitchen Accessories Catalog",
    description:
      "Professional kitchen knives, cutting tools and kitchen accessories for restaurants, hotels, catering and commercial food service.",
    file: knifeKitchenPdf.url,
    fileName: "knife-and-kitchen-accessories.pdf",
    cover: knifeKitchenCover,
    pages: 71,
    category: "knife-kitchen-accessories",
  },
  {
    slug: "table-top-machinery-accessories",
    name: "Table Top Machinery & Accessories Catalog",
    description:
      "Commercial table top machinery and accessories for restaurants, hotels, catering and food service operations.",
    file: tableTopMachineryPdf.url,
    fileName: "table-top-machinery-accessories.pdf",
    cover: tableTopMachineryCover,
    pages: 27,
    category: "table-top-machinery",
  },
  {
    slug: "wooden-buffetware-accessories-raiser",
    name: "Wooden Buffetware Accessories Raiser Catalog",
    description:
      "Elegant wooden buffetware risers, serving boards and display accessories for hotels, banquets, catering and buffet presentations.",
    file: woodenBuffetwarePdf.url,
    fileName: "WOODEN_BUFFETWARE_ACCESSORIES_RAISER.pdf",
    cover: woodenBuffetwareCover,
    pages: 55,
    category: "wooden-buffetware",
  },
];
