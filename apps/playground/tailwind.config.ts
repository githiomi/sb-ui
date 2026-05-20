import type { Config } from "tailwindcss";
import uiPreset from "../../components/web/tailwind.preset";

/**
 * The playground extends the `ui-web` preset so the same primitive
 * (`bg-primary-500`, `bg-accent-500`, …) and semantic (`bg-surface`,
 * `text-fg`, `border-outline`, …) tokens that drive the component
 * library are available to the playground's own JSX as well.
 *
 * The component library's source is also added to `content` so the
 * Tailwind JIT compiler picks up classes used inside the library
 * during local development.
 */
export default {
  presets: [uiPreset],
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../components/web/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at 30% 20%, #00829d 0%, #00435e 45%, #002a3b 100%)",
        "brand-mesh":
          "radial-gradient(at 20% 0%, rgba(0,156,188,0.35) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(255,237,0,0.18) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0,67,94,0.6) 0px, transparent 60%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0, 42, 59, 0.06), 0 4px 16px rgba(0, 42, 59, 0.08)",
        elevated:
          "0 6px 24px rgba(0, 42, 59, 0.12), 0 2px 6px rgba(0, 42, 59, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
