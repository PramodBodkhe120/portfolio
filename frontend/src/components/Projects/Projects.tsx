import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="bg-porcelain py-20 dark:bg-midnight">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">Projects</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Selected work with measurable outcomes.</h2>
          </div>
          <a
            href="#contact"
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-md border border-ink/15 px-4 py-3 text-sm font-bold transition hover:bg-ink hover:text-citron dark:border-porcelain/15 dark:hover:bg-citron dark:hover:text-ink"
          >
            Start a project
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex min-h-[340px] flex-col justify-between rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-porcelain/10 dark:bg-porcelain/5"
            >
              <div>
                <div className="mb-6 h-36 rounded-md bg-[linear-gradient(135deg,#17211d,#4f6f52_55%,#d6f36d)] p-4 text-citron">
                  <div className="flex h-full flex-col justify-between rounded-md border border-white/20 p-4">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Case study</span>
                    <span className="max-w-[12rem] text-2xl font-black leading-tight">{project.title}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68 dark:text-porcelain/68">{project.summary}</p>
                <p className="mt-4 text-sm font-bold text-moss dark:text-citron">{project.impact}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-mint px-3 py-2 text-xs font-bold text-ink dark:bg-midnight dark:text-porcelain"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

