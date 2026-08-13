import { motion } from "motion/react";

export function LeafMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" className="fill-primary/10" />
      <path
        d="M34.5 12c0 12-7.5 19.5-17.5 21 0-11.5 6.8-19.2 17.5-21Z"
        className="fill-primary"
      />
      <path
        d="M13 36c2.5-8.5 8-14.5 16-18"
        className="stroke-forest"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
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
