import type { Config } from 'tailwindcss';
import TailwindPreset from './tailwind.preset';
import { buildTailwindThemeColors } from './tailwind-theme';

/**
 * Local Tailwind config used by `scripts/build-styles.ts` to produce the
 * library's shipped stylesheet (`dist/styles.css`).
 *
 * Content paths are relative to this config file. They MUST match where the
 * component sources actually live (`src/atoms/**`), otherwise the JIT scanner
 * will skip the library's own classes and tree-shake them out of the bundle.
 */
export default {
    presets: [TailwindPreset],
    darkMode: 'media',
    content: [
        './index.ts',
        './src/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            colors: buildTailwindThemeColors()
        }
    },
    plugins: []
} satisfies Config;
