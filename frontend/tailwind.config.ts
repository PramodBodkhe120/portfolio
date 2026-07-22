import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17211d",
        moss: "#4f6f52",
        mint: "#dbeee1",
        citron: "#d6f36d",
        ember: "#ff7058",
        porcelain: "#f7f7f2",
        midnight: "#101515",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 33, 29, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

