import type { Config } from "tailwindcss";
import { buildTailwindThemeColors } from "./tailwind-theme";

/**
 * Tailwind preset for consumer apps.
 *
 * Usage (in a consuming app's tailwind.config):
 * ```ts
 * import uiPreset from "ui-web/tailwind-preset";
 * export default {
 *   presets: [uiPreset],
 *   content: ["./src/**\/*.{ts,tsx}"],
 * };
 * ```
 *
 * The consumer should ALSO import the shipped stylesheet once, so the CSS
 * variables that back these tokens are defined:
 * ```ts
 * import "ui-web/styles.css";
 * ```
 */
const TailwindPreset: Partial<Config> = {
    darkMode: "media",
    theme: {
        extend: {
            colors: buildTailwindThemeColors(),
        },
    },
};

export default TailwindPreset;
