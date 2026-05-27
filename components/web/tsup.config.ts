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
    external: ["react", "react-dom", "@uniicy/assets", "@uniicy/icons"],
    /*
     * `@uniicy/libs` is a workspace-only package; bundle it (and its transitive
     * `classnames` + `tailwind-merge`) into the output so consumers don't have
     * to resolve them at runtime.
     */
    noExternal: ["@uniicy/libs", "classnames", "tailwind-merge"],
    /*
     * `clean: true` wipes dist/ before every (re)build. Without this hook, the
     * stylesheet emitted by `build-styles.ts` would be deleted on every watch
     * rebuild and never re-emitted — causing `sbui-web/styles.css` to 404 in the
     * playground until you manually re-ran the styles build.
     *
     * Running it as an onSuccess command guarantees that any successful JS
     * build (one-shot OR incremental in --watch mode) is immediately followed
     * by a fresh stylesheet.
     */
    onSuccess: "bun ./scripts/build-styles.ts",
});
