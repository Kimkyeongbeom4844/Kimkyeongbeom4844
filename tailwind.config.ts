import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      // xs: { max: "375px" },
      // sm: { min: "376px", max: "640px" },
      // md: { min: "641px", max: "768px" },
      // lg: { min: "769px", max: "1024px" },
      // xl: { min: "1025px", max: "1280px" },
      // "2xl": { min: "1281px" },
      xs: { max: "375px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      // "2xl": { min: "1281px" },
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "1920px",
      },
      padding: "7.5vw",
    },
  },
  plugins: [],
};
export default config;
