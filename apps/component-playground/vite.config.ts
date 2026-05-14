import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "ui-web": path.resolve(__dirname, "../../components/web"),
    },
  },
  server: {
    watch: {
      ignored: ["!**/components/web/**"],
    },
  },
});
