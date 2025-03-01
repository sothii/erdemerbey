import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a4977",
        secondary: "#0d2539",
        accent: "#ffffff"
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
        humanist: ["Humanist521BT", "sans-serif"],
      },
      backgroundImage: {
        'gradient-nav': 'linear-gradient(180deg, #1a4977 0%, #0d2539 100%)',
      },
    },
  },
  plugins: [],
};
export default config;