import crockeryPdf from "@/assets/bhilva-crockery-catalog.pdf.asset.json";
import crockeryCover from "@/assets/cat-crockery.jpg";

export type Catalog = {
  slug: string;
  name: string;
  description: string;
  file: string;
  fileName: string;
  cover: string;
  pages?: number;
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
  },
];
