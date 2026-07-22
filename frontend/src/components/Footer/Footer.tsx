import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { profile } from "../../data/portfolio";

const links = [
  { label: "Code", href: "https://github.com", icon: Code2 },
  { label: "Work", href: "https://linkedin.com", icon: BriefcaseBusiness },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-porcelain py-8 dark:border-porcelain/10 dark:bg-midnight">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/60 dark:text-porcelain/60">
          © {new Date().getFullYear()} {profile.name}. Built with React and FastAPI.
        </p>
        <div className="flex gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/10 text-ink/70 transition hover:bg-ink hover:text-citron dark:border-porcelain/10 dark:text-porcelain/70 dark:hover:bg-citron dark:hover:text-ink"
              aria-label={link.label}
              title={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
