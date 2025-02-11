# Setting up LumeUI in your project

## Installation

1. Install LumeUI and its peer dependencies:

```bash
# npm
npm install lume-ui

# yarn
yarn add lume-ui

# pnpm
pnpm add lume-ui

# bun
bun add lume-ui
```

## Configuration

### 1. Tailwind CSS Setup

Add LumeUI to your Tailwind CSS configuration:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    // Add LumeUI components
    "./node_modules/lume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
```

### 2. CSS Variables

Add these CSS variables to your global CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}
```

### 3. Using Components

Now you can import and use LumeUI components in your project:

```tsx
import { Button } from "lume-ui";

export default function App() {
  return (
    <div>
      {/* Basic usage */}
      <Button>Click me</Button>

      {/* With variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>

      {/* With sizes */}
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>

      {/* With animations */}
      <Button animation="shine">Shine Effect</Button>
      <Button animation="pulse">Pulse Effect</Button>

      {/* With icons */}
      <Button icon={<HeartIcon />}>Like</Button>

      {/* With badge */}
      <Button badge="3">Notifications</Button>
    </div>
  );
}
```

## TypeScript Support

LumeUI is built with TypeScript and provides full type definitions. You'll get autocomplete and type checking out of the box.

## Dark Mode Support

LumeUI supports dark mode out of the box. To enable dark mode, you can use the `dark` class on your `html` or any parent element:

```tsx
<html className="dark">{/* Your app content */}</html>
```

## Customization

You can customize the default theme by modifying the CSS variables in your global CSS file. You can also override the Tailwind configuration to add your own colors, spacing, or other design tokens.
