import { motion } from "framer-motion";
import { MapPin, Sparkles, Workflow } from "lucide-react";
import { profile } from "../../data/portfolio";

const values = [
  {
    icon: Sparkles,
    title: "Polished by default",
    text: "Interfaces should feel calm, quick, and intentional from the first click.",
  },
  {
    icon: Workflow,
    title: "Systems thinker",
    text: "Good frontend work is easier when APIs, data, and deployment are shaped with care.",
  },
  {
    icon: MapPin,
    title: profile.location,
    text: "Working remotely with teams that value pragmatic craft and strong communication.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-porcelain py-20 dark:bg-midnight">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">About</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">A practical builder with a product eye.</h2>
        </div>
        <div className="grid gap-6">
          <p className="text-lg leading-8 text-ink/72 dark:text-porcelain/72">
            I help turn product ideas into reliable, responsive web applications. My work tends to sit at the point where
            clean UI, maintainable APIs, and launch-minded decisions meet.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-md border border-ink/10 bg-white p-5 dark:border-porcelain/10 dark:bg-porcelain/5"
              >
                <item.icon className="text-moss dark:text-citron" size={22} />
                <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65 dark:text-porcelain/65">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

