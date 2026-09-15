import { motion } from "motion/react";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  layout = "background",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  layout?: "background" | "split";
}) {
  if (layout === "split") {
    return (
      <section className="bg-sand px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:pb-20 lg:pt-36">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-border bg-card shadow-sm lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-72 sm:min-h-96 lg:min-h-[30rem]"
          >
            <img
              src={image}
              alt="Bhilva Marketinz premises"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </motion.div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow text-leaf"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="mt-5 max-w-xl text-muted-foreground"
            >
              {copy}
            </motion.p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-charcoal pb-16 pt-32 sm:pb-20 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/55" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-leaf"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl text-4xl leading-[1.08] text-forest-foreground sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-5 max-w-2xl text-forest-foreground/70"
        >
          {copy}
        </motion.p>
      </div>
    </section>
  );
}
