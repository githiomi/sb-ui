import type { Config } from "tailwindcss";
import { buildTailwindThemeColors } from "./tailwind-theme";

/**
 * Use in consuming apps:
 * `presets: [require("ui-web/tailwind.preset.ts")]` (or import if your bundler resolves TS).
 */
const TailwindPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: buildTailwindThemeColors(),
    },
  },
};

export default TailwindPreset;
