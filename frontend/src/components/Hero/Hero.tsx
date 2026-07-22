import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import resumeUrl from "../../assets/resume-placeholder.pdf";
import { profile } from "../../data/portfolio";

const metrics = [
  { label: "Projects shipped", value: "30+" },
  { label: "Core stack", value: "React + API" },
  { label: "Focus", value: "Product polish" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 dark:border-porcelain/10">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(120deg,rgba(247,247,242,0.95),rgba(219,238,225,0.7)),url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center dark:bg-[linear-gradient(120deg,rgba(16,21,21,0.94),rgba(79,111,82,0.62)),url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')]" />
      </div>

      <div className="section-shell relative grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-md bg-ink px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-citron dark:bg-citron dark:text-ink">
            {profile.role}
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-ink sm:text-6xl lg:text-7xl dark:text-porcelain">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/76 dark:text-porcelain/76">
            {profile.headline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ember px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:brightness-95"
            >
              <Mail size={18} />
              Contact me
            </a>
            <a
              href={resumeUrl}
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 bg-porcelain/90 px-5 py-3 text-sm font-bold text-ink transition hover:bg-white dark:border-porcelain/20 dark:bg-midnight/70 dark:text-porcelain dark:hover:bg-porcelain/10"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="grid gap-4"
        >
          <div className="rounded-lg border border-white/45 bg-white/66 p-4 shadow-soft backdrop-blur-md dark:border-porcelain/15 dark:bg-midnight/70">
            <div className="grid aspect-[4/3] overflow-hidden rounded-md bg-ink text-porcelain">
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(214,243,109,0.35),transparent_32%),linear-gradient(135deg,rgba(255,112,88,0.22),transparent_44%)]" />
                <div className="relative flex items-center justify-between">
                  <span className="rounded-md bg-white/12 px-3 py-1 text-xs font-semibold">Available</span>
                  <span className="h-3 w-3 rounded-full bg-citron" />
                </div>
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.18em] text-porcelain/60">Current workbench</p>
                  <p className="mt-3 max-w-sm text-3xl font-black leading-tight">
                    Clean interfaces backed by reliable systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-ink/10 bg-white/76 p-4 backdrop-blur dark:border-porcelain/10 dark:bg-porcelain/10"
              >
                <p className="text-2xl font-black text-ink dark:text-porcelain">{metric.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/55 dark:text-porcelain/55">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <a
          href="#about"
          className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/60 transition hover:bg-ink/5 dark:text-porcelain/60 dark:hover:bg-porcelain/10 md:flex"
        >
          <ArrowDown size={15} />
          Explore
        </a>
      </div>
    </section>
  );
}

