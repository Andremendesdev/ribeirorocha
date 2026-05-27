import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: {
          50:  "#FEFCF9",
          100: "#FAF7F2",
          200: "#F5EFE6",
          300: "#EDE3D5",
          400: "#DDD0BC",
          500: "#C8B89A",
        },
        rose: {
          900: "#3D0A0A",
          800: "#5C1212",
          700: "#7A1A1A",
          600: "#931F1F",
          500: "#A8251E",
          400: "#C43C3C",
          300: "#D97070",
        },
        gold: {
          700: "#8A6A2E",
          600: "#A67C3A",
          500: "#C49A4A",
          400: "#D4AD5E",
          300: "#E8C880",
          200: "#F0D9A8",
          100: "#F8ECCC",
        },
        warm: {
          900: "#1C1008",
          800: "#2C1A0E",
          700: "#3D2416",
          600: "#5A3520",
          500: "#7A4D30",
          400: "#9A6A4A",
          300: "#B8906C",
          200: "#D4B49A",
          100: "#EDD5BC",
        },
      },
      backgroundImage: {
        "cream-gradient": "linear-gradient(135deg, #FAF7F2 0%, #F5EFE6 50%, #EDE3D5 100%)",
        "hero-gradient": "linear-gradient(160deg, #FEFCF9 0%, #F5EFE6 60%, #EDE3D5 100%)",
        "rose-gradient": "linear-gradient(135deg, #7A1A1A 0%, #931F1F 100%)",
        "gold-gradient": "linear-gradient(135deg, #C49A4A 0%, #D4AD5E 50%, #C49A4A 100%)",
        "section-gradient": "linear-gradient(180deg, #FAF7F2 0%, #F5EFE6 100%)",
      },
      boxShadow: {
        "warm-sm": "0 2px 8px rgba(92, 18, 18, 0.08)",
        "warm-md": "0 4px 24px rgba(92, 18, 18, 0.1)",
        "warm-lg": "0 8px 40px rgba(92, 18, 18, 0.14)",
        "warm-xl": "0 16px 60px rgba(92, 18, 18, 0.18)",
        "card": "0 2px 12px rgba(92, 18, 18, 0.06), 0 8px 32px rgba(92, 18, 18, 0.08)",
        "card-hover": "0 4px 20px rgba(92, 18, 18, 0.1), 0 16px 48px rgba(92, 18, 18, 0.14)",
        "image": "0 20px 60px rgba(44, 24, 14, 0.2), 0 4px 16px rgba(44, 24, 14, 0.1)",
        "gold": "0 4px 24px rgba(196, 154, 74, 0.3)",
        "rose": "0 4px 24px rgba(122, 26, 26, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "float": "float 5s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "scale-in": "scaleIn 0.5s ease forwards",
        "count-up": "countUp 2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
