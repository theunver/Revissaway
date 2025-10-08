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
        cream: {
          50: '#fffaf3',
          100: '#f8f5f0',
        },
        gold: {
          400: '#FFD700',
          500: '#DAA520',
          600: '#B8860B',
          700: '#9a7209',
        },
        dark: {
          50: '#f5f5f5',
          100: '#3a3a3a',
          200: '#2f2f2f',
          300: '#2a2a2a',
          400: '#1f1f1f',
          500: '#1a1a1a',
          600: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
};
export default config;

