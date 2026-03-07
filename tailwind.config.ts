import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./obrigado/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
        secondary: "var(--secondary)",
        "muted-foreground": "var(--muted-foreground)",
        "cta-green": "var(--cta-green)",
        "cta-green-hover": "var(--cta-green-hover)",
      },
    },
  },
  plugins: [],
};

export default config;
