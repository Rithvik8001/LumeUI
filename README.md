# LumeUI

A modern, beautiful, and type-safe UI component library for React. Built with Radix UI and Tailwind CSS.

## Features

- 🎨 Beautiful, modern components
- 🔒 Type-safe with TypeScript
- 🎭 Multiple variants for each component
- 📱 Responsive and accessible
- 🎯 Easy to customize
- 🚀 Built on Radix UI primitives
- 🎨 Styled with Tailwind CSS

## Quick Start

1. Install the package:

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

2. Add the following to your Tailwind config:

For JavaScript (tailwind.config.js):

```js
const { withLume } = require("lume-ui/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = withLume({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
});
```

For TypeScript (tailwind.config.ts):

```ts
import { withLume } from "lume-ui/plugin";
import type { Config } from "tailwindcss";

const config: Config = withLume({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
});

export default config;
```

3. Import the styles in your root layout or global CSS:

```tsx
import "lume-ui/styles.css";
```

4. Import and use components:

```tsx
import { Button } from "lume-ui";

export default function Page() {
  return <Button variant="default">Click me</Button>;
}
```

## Available Components

- **Buttons** - 27 variants
- **Badges** - 13 variants
- **Inputs** - 12 variants
- **Dropdowns** - 11 variants
- **Popovers** - 11 variants
- **Tabs** - 10 variants

## Theme Support

LumeUI comes with built-in light and dark mode support. To enable theme switching:

```tsx
import { ThemeProvider } from "lume-ui";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

## License

MIT © Rithvik

---

Made with ❤️ by Rithvik
