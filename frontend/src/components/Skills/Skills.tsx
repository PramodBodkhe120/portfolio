import { motion } from "framer-motion";
import { skillGroups } from "../../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-y border-ink/10 bg-mint/55 py-20 dark:border-porcelain/10 dark:bg-porcelain/5">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">Skills</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">A stack that covers the full product loop.</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft dark:border-porcelain/10 dark:bg-midnight"
            >
              <h3 className="text-xl font-black">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-ink/10 bg-porcelain px-3 py-2 text-sm font-semibold text-ink/75 dark:border-porcelain/10 dark:bg-porcelain/10 dark:text-porcelain/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

