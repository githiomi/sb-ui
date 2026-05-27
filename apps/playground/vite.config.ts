import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/*
 * `sbui-web` is consumed like any installed dependency: workspace link in
 * node_modules → package.json `exports` → dist/. No path aliases to
 * components/web — that mirrors how consumers import after `bun add sbui-web`.
 */
export default defineConfig({
    plugins: [react()],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        watch: {
            // Rebuilds in the linked workspace package refresh the playground
            ignored: ["!**/components/web/**"],
        },
    },
});
