import { motion } from "framer-motion";
import { experience } from "../../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-y border-ink/10 bg-ink py-20 text-porcelain dark:border-porcelain/10">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-citron">Experience</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">A timeline of building, shipping, and improving.</h2>
        </div>

        <div className="mt-12 grid gap-6">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="grid gap-5 border-l border-citron/55 pl-6 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <div>
                <p className="text-sm font-bold text-citron">{item.period}</p>
                <p className="mt-2 text-lg font-black">{item.company}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/8 p-6">
                <h3 className="text-2xl font-black">{item.role}</h3>
                <p className="mt-3 leading-7 text-porcelain/70">{item.summary}</p>
                <ul className="mt-5 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-porcelain/76">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ember" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

