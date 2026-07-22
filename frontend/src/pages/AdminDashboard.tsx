import { FormEvent, useState } from "react";
import { CheckCircle2, Inbox, KeyRound, RefreshCw } from "lucide-react";
import { api, type AdminMessage } from "../services/api";

export function AdminDashboard() {
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState<AdminMessage[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");

  const loadMessages = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setStatus("loading");

    try {
      const data = await api.getAdminMessages(token);
      setMessages(data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const markRead = async (id: number) => {
    const updated = await api.markMessageRead(id, token);
    setMessages((current) => current.map((message) => (message.id === id ? updated : message)));
  };

  return (
    <main className="min-h-[calc(100vh-145px)] bg-mint/45 py-12 dark:bg-porcelain/5">
      <section className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">Admin</p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Contact message dashboard</h1>
            <p className="mt-4 max-w-2xl text-ink/68 dark:text-porcelain/68">
              Review incoming form submissions from the FastAPI backend.
            </p>
          </div>
          <form onSubmit={loadMessages} className="flex w-full max-w-md gap-2">
            <label className="sr-only" htmlFor="admin-token">
              Admin token
            </label>
            <div className="relative flex-1">
              <KeyRound className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/45 dark:text-porcelain/45" size={17} />
              <input
                id="admin-token"
                value={token}
                onChange={(event) => setToken(event.target.value)}
                className="focus-ring w-full rounded-md border border-ink/15 bg-white py-3 pl-10 pr-3 text-sm dark:border-porcelain/15 dark:bg-midnight"
                placeholder="Admin token"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="focus-ring grid h-12 w-12 place-items-center rounded-md bg-ink text-citron transition hover:brightness-110 dark:bg-citron dark:text-ink"
              aria-label="Load messages"
              title="Load messages"
            >
              <RefreshCw size={18} />
            </button>
          </form>
        </div>

        {status === "error" && (
          <div className="mt-6 rounded-md border border-ember/35 bg-ember/10 px-4 py-3 text-sm font-semibold text-ember">
            Could not load messages. Check the token and backend status.
          </div>
        )}

        <div className="mt-8 grid gap-4">
          {messages.length === 0 && status !== "loading" ? (
            <div className="rounded-lg border border-ink/10 bg-white p-8 text-center dark:border-porcelain/10 dark:bg-midnight">
              <Inbox className="mx-auto text-moss dark:text-citron" size={34} />
              <p className="mt-4 text-lg font-black">No messages loaded</p>
              <p className="mt-2 text-sm text-ink/62 dark:text-porcelain/62">Enter your admin token to fetch submissions.</p>
            </div>
          ) : null}

          {status === "loading" && (
            <div className="rounded-lg border border-ink/10 bg-white p-8 text-center text-sm font-semibold dark:border-porcelain/10 dark:bg-midnight">
              Loading messages...
            </div>
          )}

          {messages.map((message) => (
            <article
              key={message.id}
              className="grid gap-5 rounded-lg border border-ink/10 bg-white p-5 dark:border-porcelain/10 dark:bg-midnight md:grid-cols-[1fr_auto]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-black">{message.name}</h2>
                  <span className="rounded-md bg-mint px-2 py-1 text-xs font-bold text-ink dark:bg-porcelain/10 dark:text-porcelain">
                    {message.is_read ? "Read" : "New"}
                  </span>
                </div>
                <a className="mt-1 block text-sm font-semibold text-moss dark:text-citron" href={`mailto:${message.email}`}>
                  {message.email}
                </a>
                <p className="mt-4 leading-7 text-ink/72 dark:text-porcelain/72">{message.message}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45 dark:text-porcelain/45">
                  {new Date(message.created_at).toLocaleString()}
                </p>
              </div>
              {!message.is_read && (
                <button
                  type="button"
                  onClick={() => markRead(message.id)}
                  className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md border border-ink/15 px-4 text-sm font-bold transition hover:bg-ink hover:text-citron dark:border-porcelain/15 dark:hover:bg-citron dark:hover:text-ink"
                >
                  <CheckCircle2 size={17} />
                  Mark read
                </button>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

