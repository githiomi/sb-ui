import { colors } from "@uniicy/assets";

/**
 * Single source of truth for how `@uniicy/assets` tokens become Tailwind colors.
 *
 * - All color values are stored as space-separated RGB triplets in CSS variables
 *   (e.g. `--color-primary-500: 0 130 157`). Storing the channels — rather than
 *   a fully-formed `#rrggbb` or `rgb(...)` — is what lets Tailwind apply its
 *   `<alpha-value>` opacity modifier (`bg-primary-500/40`, `border-accent/20`, …).
 * - Every primitive shade is exposed via `rgb(var(--color-{name}-{shade}) /
 *   <alpha-value>)`. Tailwind replaces `<alpha-value>` with the requested alpha
 *   (defaults to `1`) at build time.
 * - Each primitive gets a `DEFAULT` key (mapped to the 500 shade), so utilities
 *   like `bg-primary` resolve, in addition to `bg-primary-500`.
 * - Semantic tokens (`fg`, `link`, `brand`, `surface`, `outline`, …) follow the
 *   same pattern, but their underlying RGB triplets swap between light and dark
 *   themes so class names stay theme-independent (`text-link` works in both).
 *
 * NOTE on raw-`var()` consumption: because the CSS variables hold tuples and
 * not complete color strings, anything reading them directly must wrap them in
 * `rgb(...)` — e.g. `color: rgb(var(--color-fg));`.
 */

const {
    themes,
    opacity: _opacity,
    gradients: _gradients,
    ...primitives
} = colors;

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

const ALPHA_PLACEHOLDER = "<alpha-value>";

/** Returns a Tailwind-friendly color reference that respects opacity modifiers. */
function withAlpha(varName: string): string {
    return `rgb(var(${varName}) / ${ALPHA_PLACEHOLDER})`;
}

/* ------------------------------------------------------------------ */
/*  Color-value normalization                                         */
/* ------------------------------------------------------------------ */

function hexToRgbTuple(hex: string): string {
    const cleaned = hex.replace(/^#/, "");
    const expanded =
        cleaned.length === 3
            ? cleaned
                  .split("")
                  .map((c) => c + c)
                  .join("")
            : cleaned;

    if (expanded.length !== 6) {
        throw new Error(`Unsupported hex color: "${hex}"`);
    }

    const r = parseInt(expanded.slice(0, 2), 16);
    const g = parseInt(expanded.slice(2, 4), 16);
    const b = parseInt(expanded.slice(4, 6), 16);

    return `${r} ${g} ${b}`;
}

function rgbStringToRgbTuple(value: string): string {
    const match = value.match(
        /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[0-9.]+\s*)?\)/,
    );
    if (!match) {
        throw new Error(`Unsupported rgb()/rgba() color: "${value}"`);
    }
    return `${match[1]} ${match[2]} ${match[3]}`;
}

/**
 * Converts any palette color (`#rrggbb`, `#rgb`, `rgb(...)`, `rgba(...)`) into
 * the `R G B` triplet Tailwind expects when used with `<alpha-value>`. Note
 * that pre-existing alpha channels on `rgba(...)` inputs are **discarded** —
 * apply opacity at the call site with `/N` instead (e.g. `border-outline/20`).
 */
function toRgbTuple(value: string): string {
    if (value.startsWith("#")) return hexToRgbTuple(value);
    if (value.startsWith("rgb")) return rgbStringToRgbTuple(value);
    throw new Error(`Unsupported color value: "${value}"`);
}

/* ------------------------------------------------------------------ */
/*  Tailwind theme colors                                             */
/* ------------------------------------------------------------------ */

function primitiveToTailwind(name: PrimitiveName, shades: ShadeMap) {
    const out: Record<string, string> = {
        DEFAULT: withAlpha(`--color-${name}-${PRIMITIVE_DEFAULT_SHADE[name]}`),
    };
    for (const shade of Object.keys(shades)) {
        out[shade] = withAlpha(`--color-${name}-${shade}`);
    }
    return out;
}

/**
 * The flat Tailwind color object consumed by both the local `tailwind.config.ts`
 * and the published `tailwind.preset.ts`. Returns ONLY `rgb(var(--…) / <alpha-value>)`
 * references — the actual RGB triplets live in `:root` (declared by `buildThemeCss()`).
 */
export function buildTailwindThemeColors() {
    const primitiveTokens = Object.fromEntries(
        (Object.keys(primitives) as PrimitiveName[]).map((name) => [
            name,
            primitiveToTailwind(name, primitives[name] as ShadeMap),
        ]),
    );

    const semanticTokens = {
        fg: withAlpha("--color-fg"),
        "fg-muted": withAlpha("--color-fg-muted"),
        "fg-subtle": withAlpha("--color-fg-subtle"),
        "fg-inverse": withAlpha("--color-fg-inverse"),
        link: withAlpha("--color-link"),
        brand: withAlpha("--color-brand"),
        surface: withAlpha("--color-surface"),
        "surface-elevated": withAlpha("--color-surface-elevated"),
        "surface-inverse": withAlpha("--color-surface-inverse"),
        canvas: withAlpha("--color-canvas"),
        outline: withAlpha("--color-outline"),
        "outline-subtle": withAlpha("--color-outline-subtle"),
        "outline-strong": withAlpha("--color-outline-strong"),
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
            vars[`--color-${name}-${shade}`] = toRgbTuple(value);
        }
    }
    return vars;
}

function semanticVariables(mode: "light" | "dark"): Record<string, string> {
    const t = themes[mode];
    return {
        "--color-fg": toRgbTuple(t.text.primary),
        "--color-fg-muted": toRgbTuple(t.text.secondary),
        "--color-fg-subtle": toRgbTuple(t.text.tertiary),
        "--color-fg-inverse": toRgbTuple(t.text.inverse),
        "--color-link": toRgbTuple(t.text.link),
        "--color-brand": toRgbTuple(t.text.brand),
        "--color-surface": toRgbTuple(t.background.surface),
        "--color-surface-elevated": toRgbTuple(t.background.secondary),
        "--color-surface-inverse": toRgbTuple(t.background.inverse),
        "--color-canvas": toRgbTuple(t.background.primary),
        "--color-outline": toRgbTuple(t.border.default),
        "--color-outline-subtle": toRgbTuple(t.border.subtle),
        "--color-outline-strong": toRgbTuple(t.border.strong),
    };
}

function block(selector: string, vars: Record<string, string>) {
    const lines = Object.entries(vars).map(
        ([key, value]) => `  ${key}: ${value};`,
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
        `@media (prefers-color-scheme: dark) {\n${block(
            "  :root",
            dark,
        ).replace(/^/gm, "  ")}\n}`,
        block(".dark", dark),
        "",
    ].join("\n\n");
}
