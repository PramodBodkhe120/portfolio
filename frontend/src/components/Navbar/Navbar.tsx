import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-porcelain/90 backdrop-blur-xl dark:border-porcelain/10 dark:bg-midnight/90">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={closeMenu}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm font-black text-citron dark:bg-citron dark:text-ink">
            P
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.18em]">Portfolio</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-ink/5 hover:text-ink dark:text-porcelain/70 dark:hover:bg-porcelain/10 dark:hover:text-porcelain"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/admin"
            className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
              location.pathname === "/admin"
                ? "bg-ink text-citron dark:bg-citron dark:text-ink"
                : "text-ink/70 hover:bg-ink/5 hover:text-ink dark:text-porcelain/70 dark:hover:bg-porcelain/10 dark:hover:text-porcelain"
            }`}
          >
            Admin
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/10 text-ink transition hover:bg-ink/5 dark:border-porcelain/15 dark:text-porcelain dark:hover:bg-porcelain/10"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/10 text-ink transition hover:bg-ink/5 dark:border-porcelain/15 dark:text-porcelain dark:hover:bg-porcelain/10 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            title={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-ink/10 bg-porcelain px-4 py-3 dark:border-porcelain/10 dark:bg-midnight md:hidden">
          <div className="mx-auto grid max-w-md gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-ink/75 hover:bg-ink/5 dark:text-porcelain/75 dark:hover:bg-porcelain/10"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/admin"
              className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-ink/75 hover:bg-ink/5 dark:text-porcelain/75 dark:hover:bg-porcelain/10"
              onClick={closeMenu}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

