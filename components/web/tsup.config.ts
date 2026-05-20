import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: {
    // TypeScript 6+ treats the `baseUrl` deprecation as an error when generating d.ts.
    // tsup's dts compiler can silence it with this compilerOption.
    compilerOptions: {
      ignoreDeprecations: "6.0",
      jsx: "react-jsx",
    },
  },
  sourcemap: true,
  clean: true,
  outDir: "dist",
  target: "es2018",
  // Ensure Node resolves formats correctly and matches `package.json` fields.
  outExtension({ format }) {
    return format === "esm" ? { js: ".mjs" } : { js: ".cjs" };
  },
  external: ["react", "react-dom", "@uniicy/assets"],
  /*
   * `@uniicy/libs` is a workspace-only package; bundle it (and its transitive
   * `classnames` + `tailwind-merge`) into the output so consumers don't have
   * to resolve them at runtime.
   */
  noExternal: ["@uniicy/libs", "classnames", "tailwind-merge"],
});
