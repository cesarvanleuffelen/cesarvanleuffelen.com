import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customb: "#4f75ff",
        customg: "#00c399",
        customy: "#ffbe3c",
        customr: "#ff6d7a",
        customgray: "#262427",
        customselectgray: "#333134",
      },
    },
  },
  plugins: [],
};
export default config;
