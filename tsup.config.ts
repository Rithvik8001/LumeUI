import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["components/ui/index.ts", "plugin/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "tailwindcss"],
  inject: ["react-shim.js"],
  tsconfig: "tsconfig.lib.json",
  treeshake: true,
  sourcemap: true,
});
