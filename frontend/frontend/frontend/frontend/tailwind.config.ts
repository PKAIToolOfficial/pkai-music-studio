import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
          dark: "#5B21B6"
        },

        studio: {
          background: "#080B14",
          surface: "#111827",
          panel: "#1F2937",
          border: "#374151"
        },

        accent: {
          cyan: "#06B6D4",
          blue: "#3B82F6",
          pink: "#EC4899",
          gold: "#F59E0B"
        }
      },

      fontFamily: {
        sans: [
          "Inter",
          "Arial",
          "sans-serif"
        ]
      },

      borderRadius: {
        studio: "1rem"
      },

      boxShadow: {
        studio: "0 8px 32px rgba(0, 0, 0, 0.35)",
        glow: "0 0 25px rgba(124, 58, 237, 0.25)"
      },

      backgroundImage: {
        "studio-gradient":
          "linear-gradient(135deg, #080B14 0%, #111827 100%)",

        "brand-gradient":
          "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)"
      },

      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out"
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },

        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(12px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      }
    }
  },

  plugins: []
};

export default config;
