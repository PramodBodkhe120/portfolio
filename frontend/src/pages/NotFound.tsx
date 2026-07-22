import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="section-shell grid min-h-[calc(100vh-145px)] place-items-center py-16 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">404</p>
        <h1 className="mt-3 text-4xl font-black">Page not found</h1>
        <Link
          to="/"
          className="focus-ring mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold text-citron dark:bg-citron dark:text-ink"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}

