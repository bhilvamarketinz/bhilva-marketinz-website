import { motion } from "motion/react";

import logoAsset from "@/assets/bhilva-logo.jpg.asset.json";

export function LeafMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Bhilva Marketinz leaf logo"
      className={`${className} rounded-md object-contain`}
      loading="eager"
      decoding="async"
    />
  );
}

export function BrandLogo({
  variant = "default",
  animated = false,
}: {
  variant?: "default" | "light";
  animated?: boolean;
}) {
  const Wrapper = animated ? motion.div : "div";
  const props = animated
    ? {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  return (
    <Wrapper className="flex items-center gap-2.5" {...props}>
      <LeafMark />
      <span className="leading-none">
        <span
          className={`block font-display text-lg tracking-tight ${
            variant === "light" ? "text-forest-foreground" : "text-primary"
          }`}
        >
          Bhilva
        </span>
        <span
          className={`eyebrow block text-[0.6rem] ${
            variant === "light" ? "text-forest-foreground/70" : "text-muted-foreground"
          }`}
        >
          Marketinz
        </span>
      </span>
    </Wrapper>
  );
}
