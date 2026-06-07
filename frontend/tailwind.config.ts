import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Logo navy — primary brand */
        brand: {
          50: "#E8EFFF",
          100: "#D1E0F9",
          200: "#A4C1F2",
          300: "#77A2EB",
          400: "#4B83E3",
          500: "#1F64DC",
          600: "#1953B8",
          700: "#144294",
          800: "#0F3270",
          900: "#0A214B",
          950: "#051026",
        },
        /** Logo bright blue — secondary */
        sky: {
          50: "#F3FAFE",
          100: "#E6F5FC",
          200: "#C0E6F9",
          300: "#99D5F3",
          400: "#72C4ED",
          500: "#4BB3E6",
          600: "#259CD7",
          700: "#1A7CAE",
          800: "#135C81",
          900: "#0C3B53",
          950: "#061F2C",
        },
        accent: {
          50: "#F3FAFE",
          100: "#E6F5FC",
          200: "#C0E6F9",
          300: "#99D5F3",
          400: "#72C4ED",
          500: "#4BB3E6",
          600: "#259CD7",
          700: "#1A7CAE",
          800: "#135C81",
          900: "#0C3B53",
          950: "#061F2C",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F4F8FC",
          elevated: "#FFFFFF",
        },
        border: {
          DEFAULT: "#D1E0F9",
          strong: "#A4C1F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(75, 179, 230, 0.18), transparent 70%), radial-gradient(ellipse 60% 40% at 80% 0%, rgba(10, 33, 75, 0.12), transparent)",
        "brand-gradient": "linear-gradient(135deg, #0A214B 0%, #4BB3E6 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #0A214B 0%, #259CD7 45%, #4BB3E6 100%)",
      },
      boxShadow: {
        brand: "0 10px 40px -12px rgba(10, 33, 75, 0.25)",
        sky: "0 10px 40px -12px rgba(75, 179, 230, 0.3)",
        accent: "0 10px 40px -12px rgba(75, 179, 230, 0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "marquee-rtl": "marquee-rtl 35s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "marquee-rtl": {
          "0%": { transform: "translate3d(0%, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
