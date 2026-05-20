import { colors } from "@uniicy/assets";

/**
 * Single source of truth for how `@uniicy/assets` tokens become Tailwind colors.
 *
 * - Every primitive shade is exposed as `var(--color-{name}-{shade})`.
 * - Each primitive gets a `DEFAULT` key (mapped to the 500 shade), so utilities
 *   like `bg-primary` resolve, in addition to `bg-primary-500`.
 * - Semantic tokens (`fg`, `link`, `brand`, `surface`, `outline`, …) are
 *   single CSS variables whose values swap between light and dark themes,
 *   making class names theme-independent (`text-link` works in both modes).
 */

const { themes, opacity: _opacity, gradients: _gradients, ...primitives } =
  colors;

type PrimitiveName = keyof typeof primitives;
type ShadeMap = Record<string, string>;

const PRIMITIVE_DEFAULT_SHADE: Record<PrimitiveName, string> = {
  primary: "500",
  accent: "500",
  success: "500",
  error: "500",
  warning: "500",
  neutral: "500",
};

function primitiveToTailwind(name: PrimitiveName, shades: ShadeMap) {
  const out: Record<string, string> = {
    DEFAULT: `var(--color-${name}-${PRIMITIVE_DEFAULT_SHADE[name]})`,
  };
  for (const shade of Object.keys(shades)) {
    out[shade] = `var(--color-${name}-${shade})`;
  }
  return out;
}

/**
 * The flat Tailwind color object consumed by both the local `tailwind.config.ts`
 * and the published `tailwind.preset.ts`. Returns ONLY `var(--…)` references —
 * actual color values live in `:root` (declared by `buildThemeCss()`).
 */
export function buildTailwindThemeColors() {
  const primitiveTokens = Object.fromEntries(
    (Object.keys(primitives) as PrimitiveName[]).map((name) => [
      name,
      primitiveToTailwind(name, primitives[name] as ShadeMap),
    ])
  );

  const semanticTokens = {
    fg: "var(--color-fg)",
    "fg-muted": "var(--color-fg-muted)",
    "fg-subtle": "var(--color-fg-subtle)",
    "fg-inverse": "var(--color-fg-inverse)",
    link: "var(--color-link)",
    brand: "var(--color-brand)",
    surface: "var(--color-surface)",
    "surface-elevated": "var(--color-surface-elevated)",
    "surface-inverse": "var(--color-surface-inverse)",
    canvas: "var(--color-canvas)",
    outline: "var(--color-outline)",
    "outline-subtle": "var(--color-outline-subtle)",
    "outline-strong": "var(--color-outline-strong)",
  };

  return {
    ...primitiveTokens,
    ...semanticTokens,
  };
}

/* ------------------------------------------------------------------ */
/*  CSS variable generation                                           */
/* ------------------------------------------------------------------ */

function primitiveVariables(): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const name of Object.keys(primitives) as PrimitiveName[]) {
    const shades = primitives[name] as ShadeMap;
    for (const [shade, value] of Object.entries(shades)) {
      vars[`--color-${name}-${shade}`] = value;
    }
  }
  return vars;
}

function semanticVariables(mode: "light" | "dark"): Record<string, string> {
  const t = themes[mode];
  return {
    "--color-fg": t.text.primary,
    "--color-fg-muted": t.text.secondary,
    "--color-fg-subtle": t.text.tertiary,
    "--color-fg-inverse": t.text.inverse,
    "--color-link": t.text.link,
    "--color-brand": t.text.brand,
    "--color-surface": t.background.surface,
    "--color-surface-elevated": t.background.secondary,
    "--color-surface-inverse": t.background.inverse,
    "--color-canvas": t.background.primary,
    "--color-outline": t.border.default,
    "--color-outline-subtle": t.border.subtle,
    "--color-outline-strong": t.border.strong,
  };
}

function block(selector: string, vars: Record<string, string>) {
  const lines = Object.entries(vars).map(
    ([key, value]) => `  ${key}: ${value};`
  );
  return `${selector} {\n${lines.join("\n")}\n}`;
}

/**
 * Returns the full CSS variable layer:
 *  - `:root` declares primitives + light-mode semantics.
 *  - `@media (prefers-color-scheme: dark)` overrides semantics for users
 *    whose OS is in dark mode.
 *  - `.dark` lets apps force dark mode explicitly (e.g. for a theme toggle).
 */
export function buildThemeCss() {
  const primitives = primitiveVariables();
  const light = semanticVariables("light");
  const dark = semanticVariables("dark");

  return [
    "/* Auto-generated from @uniicy/assets — do not edit by hand. */",
    block(":root", { ...primitives, ...light }),
    `@media (prefers-color-scheme: dark) {\n${block("  :root", dark).replace(
      /^/gm,
      "  "
    )}\n}`,
    block(".dark", dark),
    "",
  ].join("\n\n");
}
