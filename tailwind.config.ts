import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },

      colors: {
        brown: {
          100: "#341616",
          90: "#655046",
          80: "#987868",
          70: "#A98574",
          60: "#E4D9D4",
          50: "#FFFDF9",
        },

        neutral: {
          100: "#000000",
          90: "#1e1915",
          80: "#3c3c3c",
          60: "#A7A7A7",
          40: "#d9d9d9",
          30: "#f3f3f6",
        },

        toggle: "#c74524",
      },

      boxShadow: {
        card: "0 2px 4px -2px rgba(19,25,39,0.12), 0 4px 4px -2px rgba(19,25,39,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
