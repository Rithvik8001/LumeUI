import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["components/ui/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react"],
  inject: ["react-shim.js"],
});
