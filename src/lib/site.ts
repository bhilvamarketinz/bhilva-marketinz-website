import potsPans from "@/assets/cat-pots-pans.jpg";
import cutlery from "@/assets/cat-cutlery.jpg";
import crockery from "@/assets/cat-crockery.jpg";
import glassware from "@/assets/cat-glassware.jpg";
import barware from "@/assets/cat-barware.jpg";
import bakery from "@/assets/cat-bakery.jpg";

export const BRAND = "Bhilva Marketinz";

export const CONTACT = {
  phone: "97403 68339",
  phoneHref: "tel:+919740368339",
  whatsapp: "9964335352",
  whatsappHref: "https://wa.me/919964335352",
  email: "trendinfkix@gmail.com",
  emailHref: "mailto:trendinfkix@gmail.com",
};

export function whatsappLink(message: string) {
  return `${CONTACT.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Supply", to: "/supply" },
  { label: "Contact", to: "/contact" },
] as const;

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  tone: "light" | "dark" | "warm";
};

export const CATEGORIES: Category[] = [
  {
    slug: "pots-pans",
    name: "Pots & Pans",
    tagline: "Professional cookware",
    description:
      "Cookware for professional kitchens — pots, pans and commercial cooking vessels suited to continuous kitchen use.",
    highlights: ["Cooking pots", "Frying & sauté pans", "Commercial cookware"],
    image: potsPans,
    tone: "light",
  },
  {
    slug: "cutlery",
    name: "Cutlery",
    tagline: "Table & service cutlery",
    description:
      "Spoons, forks, knives and service cutlery for restaurants, hotels and catering operations.",
    highlights: ["Spoons", "Forks", "Knives & service pieces"],
    image: cutlery,
    tone: "light",
  },
  {
    slug: "crockery",
    name: "Crockery",
    tagline: "Plates, bowls & serveware",
    description:
      "Plates, bowls and serving pieces for dining rooms, banquets and hospitality service.",
    highlights: ["Plates", "Bowls", "Serving pieces"],
    image: crockery,
    tone: "light",
  },
  {
    slug: "glassware",
    name: "Glassware",
    tagline: "Drinking & service glass",
    description:
      "Drinking glasses and professional glassware for restaurants, hotels and beverage service.",
    highlights: ["Tumblers", "Stemware", "Service glassware"],
    image: glassware,
    tone: "light",
  },
  {
    slug: "barware",
    name: "Barware",
    tagline: "Bar & beverage service",
    description:
      "Bar and beverage-service products for professional bars, lounges and hospitality venues.",
    highlights: ["Bar tools", "Beverage service", "Bar accessories"],
    image: barware,
    tone: "dark",
  },
  {
    slug: "bakery",
    name: "Bakery",
    tagline: "Bakery products & supplies",
    description:
      "Bakery products, tools, equipment and supplies for commercial bakeries and pastry kitchens.",
    highlights: ["Bakery tools", "Baking equipment", "Bakery supplies"],
    image: bakery,
    tone: "warm",
  },
];

export const WHY_CHOOSE = [
  {
    title: "Wide Product Selection",
    body: "A broad range of kitchenware and hospitality products across six core categories.",
  },
  {
    title: "Kitchen & Hospitality Supply",
    body: "Products selected for restaurants, hotels, bakeries, bars and commercial kitchens.",
  },
  {
    title: "Professional Product Focus",
    body: "Product categories intended for professional and commercial usage requirements.",
  },
  {
    title: "Multiple Product Categories",
    body: "Cutlery, crockery, pots & pans, glassware, barware and bakery in one supply partner.",
  },
  {
    title: "Business & Bulk Inquiry Support",
    body: "Inquiry and quotation process designed for wholesale and business requirements.",
  },
  {
    title: "India-Wide & International Supply",
    body: "Supply support for customers across India and for international requirements.",
  },
];
