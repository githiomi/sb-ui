import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/*
 * `ui-web` is a workspace package. The aliases below let Vite resolve both
 * the JS entry (bare `ui-web` import) AND its CSS subpath (`ui-web/styles.css`)
 * directly from the library's `dist/` folder, without going through Node's
 * package.json `exports` lookup.
 *
 * Order matters: Vite picks the longest matching alias first, so the
 * `ui-web/styles.css` mapping wins over the bare `ui-web` mapping.
 */
const uiWebRoot = path.resolve(__dirname, "../../components/web");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "ui-web/styles.css": path.join(uiWebRoot, "dist/styles.css"),
      "ui-web": uiWebRoot,
    },
  },
  server: {
    watch: {
      ignored: ["!**/components/web/**"],
    },
  },
});
