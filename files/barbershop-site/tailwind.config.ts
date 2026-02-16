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
        // Classic barbershop palette - warm and inviting
        brand: {
          50: "#fdf8f6",
          100: "#f9ebe5",
          200: "#f3d5c8",
          300: "#e9b8a3",
          400: "#dc9276",
          500: "#c96f4f",
          600: "#b85a3c",
          700: "#994832",
          800: "#7d3d2d",
          900: "#673528",
          950: "#381912",
        },
        // Rich, warm neutrals
        surface: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        // Accent gold for CTAs and highlights
        accent: {
          light: "#fbbf24",
          DEFAULT: "#d97706",
          dark: "#b45309",
        },
      },
      fontFamily: {
        // Display font for headings - bold and classic
        display: ["var(--font-display)", "serif"],
        // Body font - clean and readable
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
