import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { useInquiry } from "@/components/inquiry";
import { CATEGORIES, type Category } from "@/lib/site";

const toneClass: Record<Category["tone"], string> = {
  light: "from-background/95 via-background/45",
  dark: "from-charcoal/95 via-charcoal/50",
  warm: "from-forest/90 via-forest/40",
};

export function CategoryShowcase() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Product Categories</p>
          <h2 className="mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            Six categories built for professional use
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each category is supplied for restaurants, hotels, bakeries, bars and commercial
            kitchens — explore the range and send a requirement.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button asChild variant="quiet" size="lg" className="group">
            <Link to="/products">
              View all products
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category, index) => (
          <CategoryCard key={category.slug} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const { openInquiry } = useInquiry();
  const isDark = category.tone !== "light";

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex min-h-100 flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-500 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={`${category.name} supplied by Bhilva Marketinz`}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-108"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t to-transparent ${toneClass[category.tone]}`}
        />
      </div>

      <div className="relative mt-auto p-6">
        <p className={`eyebrow ${isDark ? "text-leaf" : "text-primary"}`}>{category.tagline}</p>
        <h3 className={`mt-2 text-2xl ${isDark ? "text-forest-foreground" : "text-foreground"}`}>
          {category.name}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            isDark ? "text-forest-foreground/75" : "text-muted-foreground"
          }`}
        >
          {category.description}
        </p>

        <div className="grid max-h-0 gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
          <div className="flex flex-wrap gap-1.5">
            {category.highlights.map((h) => (
              <span
                key={h}
                className={`rounded-full border px-2.5 py-1 text-xs ${
                  isDark
                    ? "border-forest-foreground/25 text-forest-foreground/80"
                    : "border-border bg-background/70 text-muted-foreground"
                }`}
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild size="sm" variant={isDark ? "whatsapp" : "brand"}>
            <Link to="/products" search={{ category: category.slug }}>
              View Products
            </Link>
          </Button>
          <Button
            size="sm"
            variant={isDark ? "onDark" : "quiet"}
            onClick={() => openInquiry({ mode: "inquiry", category: category.name })}
          >
            Product Inquiry
          </Button>
          <Button
            size="sm"
            variant={isDark ? "onDark" : "quiet"}
            onClick={() => openInquiry({ mode: "quote", category: category.name })}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
