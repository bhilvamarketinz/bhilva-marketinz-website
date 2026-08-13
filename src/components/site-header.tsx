import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { useInquiry } from "@/components/inquiry";
import { NAV } from "@/lib/site";
import { toast } from "sonner";

export function requestCatalog() {
  toast("Product catalog", {
    description:
      "The Bhilva Marketinz PDF catalog will be available here shortly. Send an inquiry and we will share it directly.",
  });
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openInquiry } = useInquiry();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
        <Link to="/" aria-label="Bhilva Marketinz home">
          <BrandLogo animated />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/75 hover:text-foreground"
                  : "text-forest-foreground/75 hover:text-forest-foreground"
              }`}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={requestCatalog}
            className={`group ${scrolled ? "" : "text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground"}`}
          >
            <FileDown className="transition-transform group-hover:translate-y-0.5" />
            Catalog
          </Button>
          <Button variant="brand" size="sm" onClick={() => openInquiry({ mode: "quote" })}>
            Get a Quote
          </Button>
        </div>

        <button
          className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-md border lg:hidden ${
            scrolled || open
              ? "border-border bg-card/70 text-foreground"
              : "border-forest-foreground/25 bg-forest-foreground/10 text-forest-foreground"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="size-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="size-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-border bg-background/97 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Mobile">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    className="block border-b border-border/60 py-3 font-display text-xl text-foreground"
                    activeProps={{ className: "text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button variant="quiet" onClick={requestCatalog}>
                <FileDown /> Catalog
              </Button>
              <Button variant="brand" onClick={() => openInquiry({ mode: "quote" })}>
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
