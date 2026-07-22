import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { api } from "../../services/api";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      await api.sendMessage(form);
      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-mint/55 py-20 dark:bg-porcelain/5">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">Contact</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Have a project worth making real?</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/70 dark:text-porcelain/70">
            Send a note with what you are building, what timeline you have in mind, and where you need momentum.
          </p>
        </div>

        <form onSubmit={submit} className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft dark:border-porcelain/10 dark:bg-midnight">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              Name
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="focus-ring rounded-md border border-ink/15 bg-porcelain px-4 py-3 font-normal text-ink dark:border-porcelain/15 dark:bg-porcelain/10 dark:text-porcelain"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="focus-ring rounded-md border border-ink/15 bg-porcelain px-4 py-3 font-normal text-ink dark:border-porcelain/15 dark:bg-porcelain/10 dark:text-porcelain"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold">
            Message
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="focus-ring resize-none rounded-md border border-ink/15 bg-porcelain px-4 py-3 font-normal text-ink dark:border-porcelain/15 dark:bg-porcelain/10 dark:text-porcelain"
              placeholder="Tell me about the work."
            />
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "loading"}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-citron transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-citron dark:text-ink"
            >
              <Send size={17} />
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && <p className="text-sm font-semibold text-moss dark:text-citron">Message sent.</p>}
            {status === "error" && <p className="text-sm font-semibold text-ember">Could not send right now.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

