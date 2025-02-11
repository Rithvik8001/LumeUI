import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export function withLume(config: Config): Config {
  const existingContent = Array.isArray(config.content)
    ? config.content
    : (config.content?.files ?? []);

  return {
    ...config,
    content: [
      ...existingContent,
      "./node_modules/lume-ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ["class"],
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
        },
      },
    },
    plugins: [
      ...(config.plugins ?? []),
      plugin(({ addBase }) => {
        addBase({
          ":root": {
            "--background": "0 0% 100%",
            "--foreground": "240 10% 3.9%",
            "--card": "0 0% 100%",
            "--card-foreground": "240 10% 3.9%",
            "--popover": "0 0% 100%",
            "--popover-foreground": "240 10% 3.9%",
            "--primary": "240 5.9% 10%",
            "--primary-foreground": "0 0% 98%",
            "--secondary": "240 4.8% 95.9%",
            "--secondary-foreground": "240 5.9% 10%",
            "--muted": "240 4.8% 95.9%",
            "--muted-foreground": "240 3.8% 46.1%",
            "--accent": "240 4.8% 95.9%",
            "--accent-foreground": "240 5.9% 10%",
            "--destructive": "0 84.2% 60.2%",
            "--destructive-foreground": "0 0% 98%",
            "--border": "240 5.9% 90%",
            "--input": "240 5.9% 90%",
            "--ring": "240 5.9% 10%",
            "--radius": "0.5rem",
          },
          ".dark": {
            "--background": "240 10% 3.9%",
            "--foreground": "0 0% 98%",
            "--card": "240 10% 3.9%",
            "--card-foreground": "0 0% 98%",
            "--popover": "240 10% 3.9%",
            "--popover-foreground": "0 0% 98%",
            "--primary": "0 0% 98%",
            "--primary-foreground": "240 5.9% 10%",
            "--secondary": "240 3.7% 15.9%",
            "--secondary-foreground": "0 0% 98%",
            "--muted": "240 3.7% 15.9%",
            "--muted-foreground": "240 5% 64.9%",
            "--accent": "240 3.7% 15.9%",
            "--accent-foreground": "0 0% 98%",
            "--destructive": "0 62.8% 30.6%",
            "--destructive-foreground": "0 0% 98%",
            "--border": "240 3.7% 15.9%",
            "--input": "240 3.7% 15.9%",
            "--ring": "240 4.9% 83.9%",
          },
        });
      }),
    ],
  };
}
