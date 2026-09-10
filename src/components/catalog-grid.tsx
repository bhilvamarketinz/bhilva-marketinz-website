import { useState } from "react";
import { Eye, FileDown, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/reveal";
import { CATALOGS, type Catalog } from "@/lib/catalogs";

export function CatalogGrid({
  compact = false,
  category,
}: {
  compact?: boolean;
  category?: "crockery" | "glassware" | "bakery";
}) {
  const [open, setOpen] = useState<Catalog | null>(null);
  const items = category ? CATALOGS.filter((c) => c.category === category) : CATALOGS;

  return (
    <>
      <div
        className={`grid gap-6 ${compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}
      >
        {items.map((catalog, i) => (
          <Reveal key={catalog.slug} delay={i * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-500 hover:shadow-[var(--shadow-lift)]">
              <button
                onClick={() => setOpen(catalog)}
                className="relative block w-full cursor-pointer overflow-hidden"
                aria-label={`View ${catalog.name}`}
              >
                <img
                  src={catalog.cover}
                  alt={`${catalog.name} cover`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover transition-transform duration-[1.2s] group-hover:scale-107"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground">
                  PDF{catalog.pages ? ` · ${catalog.pages} pages` : ""}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl">{catalog.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {catalog.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button size="sm" variant="brand" onClick={() => setOpen(catalog)}>
                    <Eye /> View Catalog
                  </Button>
                  <Button asChild size="sm" variant="quiet" className="group/dl">
                    <a href={catalog.file} download={catalog.fileName}>
                      <FileDown className="transition-transform duration-300 group-hover/dl:translate-y-0.5" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{open?.name}</DialogTitle>
            <DialogDescription>{open?.description}</DialogDescription>
          </DialogHeader>
          {open ? (
            <>
              <object
                data={open.file}
                type="application/pdf"
                className="h-[65vh] w-full rounded-md border border-border"
                aria-label={`${open.name} preview`}
              >
                <div className="p-6 text-sm text-muted-foreground">
                  Your browser cannot display the PDF inline. Use the buttons below to open or
                  download it.
                </div>
              </object>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="brand">
                  <a href={open.file} target="_blank" rel="noopener noreferrer">
                    <ExternalLink /> Open in new tab
                  </a>
                </Button>
                <Button asChild variant="quiet">
                  <a href={open.file} download={open.fileName}>
                    <FileDown /> Download PDF
                  </a>
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
