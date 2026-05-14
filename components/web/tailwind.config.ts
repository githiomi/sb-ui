import type { Config } from "tailwindcss";
import TailwindPreset from "./tailwind.preset";
import { buildTailwindThemeColors } from "./tailwind-theme";

/**
 * Content paths must be relative (not `path.join(__dirname, ...)`), otherwise Tailwind's
 * glob scanner may not pick up workspace TS/TSX files reliably.
 */
export default {
  presets: [TailwindPreset],
  content: [
    "./index.ts",
    "./atoms/**/*.{ts,tsx}",
    "./molecules/**/*.{ts,tsx}",
    "./organisms/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: buildTailwindThemeColors(),
    },
  },
  plugins: [],
} satisfies Config;
