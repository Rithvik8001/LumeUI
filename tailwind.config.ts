import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        heading: ["var(--font-geist-sans)"],
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 0%",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "100% 100%",
          },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
        magnetic: {
          "0%": {
            transform: "translate(-100%, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        spotlight: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "float-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "float-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "float-left": {
          "0%": { transform: "translateX(10px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "float-right": {
          "0%": { transform: "translateX(-10px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(var(--primary), 0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(var(--primary), 0.4)" },
          "100%": { boxShadow: "0 0 15px rgba(var(--primary), 0.2)" },
        },
        "flip-in": {
          "0%": {
            transform: "perspective(400px) rotateX(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "perspective(400px) rotateX(0deg)",
            opacity: "1",
          },
        },
        "flip-out": {
          "0%": { transform: "perspective(400px) rotateX(0deg)", opacity: "1" },
          "100%": {
            transform: "perspective(400px) rotateX(90deg)",
            opacity: "0",
          },
        },
        "elastic-in": {
          "0%": { transform: "scale(0)" },
          "55%": { transform: "scale(1.05)" },
          "75%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "elastic-out": {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(0.95)" },
          "45%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(0)" },
        },
        "reveal-in": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "reveal-out": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
      animation: {
        "gradient-xy": "gradient-xy 15s ease infinite",
        shake: "shake 0.5s ease-in-out",
        magnetic: "magnetic 0.5s ease-in-out",
        spotlight: "spotlight 2s ease-in-out infinite",
        "float-up": "float-up 0.3s ease-out",
        "float-down": "float-down 0.3s ease-out",
        "float-left": "float-left 0.3s ease-out",
        "float-right": "float-right 0.3s ease-out",
        glow: "glow 2s ease-in-out infinite",
        "flip-in": "flip-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "flip-out": "flip-out 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "elastic-in": "elastic-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "elastic-out": "elastic-out 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "reveal-in": "reveal-in 0.3s ease-out",
        "reveal-out": "reveal-out 0.3s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
