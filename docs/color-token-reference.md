# SB UI color token reference

For the easiest visual inspection, open `docs/color-token-reference.html` in a browser. Some Markdown previewers strip
or ignore the HTML attributes used for swatches, so the `.html` version is the reliable color board.

This document maps the source color tokens in `packages/assets/colors.ts` to the RGB channel values emitted in
`components/web/dist/styles.css`.

The short version: source colors are written as hex or `rgba(...)`; the web package build converts them to RGB channel
tuples such as `0 130 157`; Tailwind then wraps those tuples as `rgb(var(--color-primary-500) / <alpha-value>)` so
utilities like `bg-primary-500`, `text-primary-500`, and `bg-primary-500/20` can all work.

## How the colors get into `dist/styles.css`

1. `packages/assets/colors.ts` defines the design tokens: primitive palettes (`primary`, `accent`, `success`, `error`,
   `warning`, `neutral`), opacity helpers, gradients, and semantic light/dark theme tokens.
2. `components/web/tailwind-theme.ts` imports those tokens from `@uniicy/assets`.
3. `toRgbTuple()` converts source values into plain RGB channel tuples:
    - `#00829d` becomes `0 130 157`.
    - `rgba(112,112,112,0.2)` becomes `112 112 112`.
4. `buildThemeCss()` creates the CSS variables:
    - `:root` contains primitive variables and light semantic variables.
    - `@media (prefers-color-scheme: dark)` overrides semantic variables for OS dark mode.
    - `.dark` overrides semantic variables when an app manually adds a `dark` class.
5. `components/web/scripts/build-styles.ts` prepends those generated variables to the processed Tailwind stylesheet and
   writes `components/web/dist/styles.css`.
6. `buildTailwindThemeColors()` exposes the same variables to Tailwind as `rgb(var(--color-...) / <alpha-value>)`.

Because the CSS variables store only channels, use them directly like this:

```css
color:

rgb
(
var
(
--color-primary-500

)
)
;
background-color:

rgb
(
var
(
--color-primary-500

)
/
0.2
)
;
```

Tailwind does that wrapping for you:

```tsx
<div className="bg-primary-500 text-fg border border-outline/20" />
```

## Primitive colors

Primitive colors do not change between light and dark mode.

### Primary

| Token         | Swatch                                                                                  | Source hex | Generated RGB tuple | Tailwind examples                    | Visual description  |
|---------------|-----------------------------------------------------------------------------------------|------------|---------------------|--------------------------------------|---------------------|
| `primary-400` | <table><tr><td bgcolor="#009cbc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#009cbc`  | `0 156 188`         | `bg-primary-400`, `text-primary-400` | Bright cyan teal    |
| `primary-500` | <table><tr><td bgcolor="#00829d">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#00829d`  | `0 130 157`         | `bg-primary-500`, `text-primary-500` | Main brand teal     |
| `primary-600` | <table><tr><td bgcolor="#005374">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#005374`  | `0 83 116`          | `bg-primary-600`, `text-primary-600` | Deep blue teal      |
| `primary-700` | <table><tr><td bgcolor="#004560">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#004560`  | `0 69 96`           | `bg-primary-700`, `text-primary-700` | Dark teal blue      |
| `primary-800` | <table><tr><td bgcolor="#00435e">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#00435e`  | `0 67 94`           | `bg-primary-800`, `text-primary-800` | Very dark teal blue |
| `primary-900` | <table><tr><td bgcolor="#002a3b">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#002a3b`  | `0 42 59`           | `bg-primary-900`, `text-primary-900` | Near-navy teal      |

`primary` without a shade maps to `primary-500`.

### Accent

| Token        | Swatch                                                                                  | Source hex | Generated RGB tuple | Tailwind examples                  | Visual description  |
|--------------|-----------------------------------------------------------------------------------------|------------|---------------------|------------------------------------|---------------------|
| `accent-300` | <table><tr><td bgcolor="#d6d3a2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#d6d3a2`  | `214 211 162`       | `bg-accent-300`, `text-accent-300` | Muted khaki yellow  |
| `accent-400` | <table><tr><td bgcolor="#fff351">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#fff351`  | `255 243 81`        | `bg-accent-400`, `text-accent-400` | Bright lemon yellow |
| `accent-500` | <table><tr><td bgcolor="#ffed00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#ffed00`  | `255 237 0`         | `bg-accent-500`, `text-accent-500` | Brand yellow        |

`accent` without a shade maps to `accent-500`.

### Success

| Token         | Swatch                                                                                  | Source hex | Generated RGB tuple | Tailwind examples                    | Visual description |
|---------------|-----------------------------------------------------------------------------------------|------------|---------------------|--------------------------------------|--------------------|
| `success-200` | <table><tr><td bgcolor="#0fe630">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#0FE630`  | `15 230 48`         | `bg-success-200`, `text-success-200` | Neon green         |
| `success-300` | <table><tr><td bgcolor="#3fa41a">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#3fa41a`  | `63 164 26`         | `bg-success-300`, `text-success-300` | Grass green        |
| `success-400` | <table><tr><td bgcolor="#069668">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#069668`  | `6 150 104`         | `bg-success-400`, `text-success-400` | Green teal         |
| `success-500` | <table><tr><td bgcolor="#10b981">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#10B981`  | `16 185 129`        | `bg-success-500`, `text-success-500` | Main success green |
| `success-600` | <table><tr><td bgcolor="#047857">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#047857`  | `4 120 87`          | `bg-success-600`, `text-success-600` | Deep success green |
| `success-700` | <table><tr><td bgcolor="#01583e">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#01583E`  | `1 88 62`           | `bg-success-700`, `text-success-700` | Very dark green    |

`success` without a shade maps to `success-500`.

### Error

| Token       | Swatch                                                                                  | Source hex | Generated RGB tuple | Tailwind examples                | Visual description  |
|-------------|-----------------------------------------------------------------------------------------|------------|---------------------|----------------------------------|---------------------|
| `error-400` | <table><tr><td bgcolor="#f80505">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#F80505`  | `248 5 5`           | `bg-error-400`, `text-error-400` | Vivid red           |
| `error-500` | <table><tr><td bgcolor="#dc3545">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#dc3545`  | `220 53 69`         | `bg-error-500`, `text-error-500` | Main error red      |
| `error-600` | <table><tr><td bgcolor="#931f06">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#931F06`  | `147 31 6`          | `bg-error-600`, `text-error-600` | Burnt red           |
| `error-700` | <table><tr><td bgcolor="#561000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#561000`  | `86 16 0`           | `bg-error-700`, `text-error-700` | Very dark red brown |

`error` without a shade maps to `error-500`.

### Warning

| Token         | Swatch                                                                                  | Source hex | Generated RGB tuple | Tailwind examples                    | Visual description    |
|---------------|-----------------------------------------------------------------------------------------|------------|---------------------|--------------------------------------|-----------------------|
| `warning-500` | <table><tr><td bgcolor="#f9a201">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#f9a201`  | `249 162 1`         | `bg-warning-500`, `text-warning-500` | Main amber warning    |
| `warning-600` | <table><tr><td bgcolor="#935801">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#935801`  | `147 88 1`          | `bg-warning-600`, `text-warning-600` | Dark amber brown      |
| `warning-700` | <table><tr><td bgcolor="#583300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#583300`  | `88 51 0`           | `bg-warning-700`, `text-warning-700` | Very dark amber brown |

`warning` without a shade maps to `warning-500`.

### Neutral

| Token         | Swatch                                                                                  | Source hex | Generated RGB tuple | Tailwind examples                    | Visual description |
|---------------|-----------------------------------------------------------------------------------------|------------|---------------------|--------------------------------------|--------------------|
| `neutral-200` | <table><tr><td bgcolor="#ffffff">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#ffffff`  | `255 255 255`       | `bg-neutral-200`, `text-neutral-200` | White              |
| `neutral-300` | <table><tr><td bgcolor="#f5f5f5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#F5F5F5`  | `245 245 245`       | `bg-neutral-300`, `text-neutral-300` | Very light gray    |
| `neutral-400` | <table><tr><td bgcolor="#cccccc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#cccccc`  | `204 204 204`       | `bg-neutral-400`, `text-neutral-400` | Light gray         |
| `neutral-500` | <table><tr><td bgcolor="#a2a8a8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#a2a8a8`  | `162 168 168`       | `bg-neutral-500`, `text-neutral-500` | Cool medium gray   |
| `neutral-600` | <table><tr><td bgcolor="#707070">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#707070`  | `112 112 112`       | `bg-neutral-600`, `text-neutral-600` | Medium gray        |
| `neutral-700` | <table><tr><td bgcolor="#004560">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#004560`  | `0 69 96`           | `bg-neutral-700`, `text-neutral-700` | Dark teal blue     |
| `neutral-800` | <table><tr><td bgcolor="#002a3b">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#002a3b`  | `0 42 59`           | `bg-neutral-800`, `text-neutral-800` | Near-navy teal     |
| `neutral-900` | <table><tr><td bgcolor="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `#000000`  | `0 0 0`             | `bg-neutral-900`, `text-neutral-900` | Black              |

`neutral` without a shade maps to `neutral-500`.

## Semantic colors

Semantic colors are aliases intended for component and application UI. Prefer these when you mean "foreground text", "
surface", "canvas", or "outline" rather than a specific primitive shade.

In the generated stylesheet, light values are emitted in `:root`; dark values are emitted in both
`@media (prefers-color-scheme: dark)` and `.dark`.

| Token              | Light swatch                                                                            | Light RGB     | Light source                     | Dark swatch                                                                             | Dark RGB      | Dark source                     | Tailwind examples          |
|--------------------|-----------------------------------------------------------------------------------------|---------------|----------------------------------|-----------------------------------------------------------------------------------------|---------------|---------------------------------|----------------------------|
| `fg`               | <table><tr><td bgcolor="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 0 0`       | `neutral-900`                    | <table><tr><td bgcolor="#ffffff">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `255 255 255` | `neutral-200`                   | `text-fg`, `bg-fg`         |
| `fg-muted`         | <table><tr><td bgcolor="#707070">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `112 112 112` | `neutral-600`                    | <table><tr><td bgcolor="#a2a8a8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `162 168 168` | `neutral-500`                   | `text-fg-muted`            |
| `fg-subtle`        | <table><tr><td bgcolor="#a2a8a8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `162 168 168` | `neutral-500`                    | <table><tr><td bgcolor="#cccccc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `204 204 204` | `neutral-400`                   | `text-fg-subtle`           |
| `fg-inverse`       | <table><tr><td bgcolor="#ffffff">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `255 255 255` | `neutral-200`                    | <table><tr><td bgcolor="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 0 0`       | `neutral-900`                   | `text-fg-inverse`          |
| `link`             | <table><tr><td bgcolor="#ffed00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `255 237 0`   | `accent-500`                     | <table><tr><td bgcolor="#ffed00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `255 237 0`   | `accent-500`                    | `text-link`                |
| `brand`            | <table><tr><td bgcolor="#004560">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 69 96`     | `primary-700`                    | <table><tr><td bgcolor="#009cbc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 156 188`   | `primary-400`                   | `text-brand`, `bg-brand`   |
| `surface`          | <table><tr><td bgcolor="#ffffff">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `255 255 255` | `#ffffff`                        | <table><tr><td bgcolor="#00435e">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 67 94`     | `primary-800`                   | `bg-surface`               |
| `surface-elevated` | <table><tr><td bgcolor="#f5f5f5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `245 245 245` | `neutral-300`                    | <table><tr><td bgcolor="#00435e">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 67 94`     | `primary-800`                   | `bg-surface-elevated`      |
| `surface-inverse`  | <table><tr><td bgcolor="#002a3b">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 42 59`     | `primary-900`                    | <table><tr><td bgcolor="#ffffff">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `255 255 255` | `neutral-200`                   | `bg-surface-inverse`       |
| `canvas`           | <table><tr><td bgcolor="#ffffff">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `255 255 255` | `neutral-200`                    | <table><tr><td bgcolor="#002a3b">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 42 59`     | `primary-900`                   | `bg-canvas`                |
| `outline`          | <table><tr><td bgcolor="#707070">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `112 112 112` | `rgba(112,112,112,0.2)` channels | <table><tr><td bgcolor="#009cbc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 156 188`   | `rgba(0,156,188,0.03)` channels | `border-outline/20`        |
| `outline-subtle`   | <table><tr><td bgcolor="#707070">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `112 112 112` | `rgba(112,112,112,0.1)` channels | <table><tr><td bgcolor="#009cbc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 156 188`   | `rgba(0,156,188,0.02)` channels | `border-outline-subtle/10` |
| `outline-strong`   | <table><tr><td bgcolor="#a2a8a8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `162 168 168` | `neutral-500`                    | <table><tr><td bgcolor="#005374">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `0 83 116`    | `primary-600`                   | `border-outline-strong`    |

### Important alpha note

`toRgbTuple()` intentionally keeps only the red, green, and blue channels when it sees `rgba(...)`. That means these
semantic tokens lose their original alpha when written to CSS variables:

| Semantic token         | Source value            | Generated value                       | Practical use                                                                                                         |
|------------------------|-------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| light `outline`        | `rgba(112,112,112,0.2)` | `--color-outline: 112 112 112`        | Use `border-outline/20` to restore the intended 20% opacity.                                                          |
| light `outline-subtle` | `rgba(112,112,112,0.1)` | `--color-outline-subtle: 112 112 112` | Use `border-outline-subtle/10` to restore the intended 10% opacity.                                                   |
| dark `outline`         | `rgba(0,156,188,0.03)`  | `--color-outline: 0 156 188`          | Use `border-outline/5` or another explicit opacity; Tailwind does not have a built-in `/3` utility unless configured. |
| dark `outline-subtle`  | `rgba(0,156,188,0.02)`  | `--color-outline-subtle: 0 156 188`   | Use an explicit opacity utility or a custom arbitrary value such as `border-outline-subtle/[0.02]`.                   |

If you use `border-outline` with no `/opacity`, the border is fully opaque because Tailwind emits
`rgb(var(--color-outline) / 1)`.

## Opacity tokens

These tokens are defined in `packages/assets/colors.ts`, but they are not emitted as standalone CSS variables in
`dist/styles.css`. They are mainly used as source values for semantic tokens today.

| Token                 | Color preview                                                                           | Source value            | Generated channel tuple when converted |
|-----------------------|-----------------------------------------------------------------------------------------|-------------------------|----------------------------------------|
| `opacity.black.100`   | <table><tr><td bgcolor="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(0,0,0,0.3)`       | `0 0 0`                                |
| `opacity.black.200`   | <table><tr><td bgcolor="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(0,0,0,0.5)`       | `0 0 0`                                |
| `opacity.black.300`   | <table><tr><td bgcolor="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(0,0,0,0.7)`       | `0 0 0`                                |
| `opacity.black.400`   | <table><tr><td bgcolor="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(0,0,0,0.75)`      | `0 0 0`                                |
| `opacity.primary.100` | <table><tr><td bgcolor="#009cbc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(0,156,188,0.02)`  | `0 156 188`                            |
| `opacity.primary.200` | <table><tr><td bgcolor="#009cbc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(0,156,188,0.03)`  | `0 156 188`                            |
| `opacity.primary.300` | <table><tr><td bgcolor="#009cbc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(0,156,188,0.3)`   | `0 156 188`                            |
| `opacity.primary.400` | <table><tr><td bgcolor="#009cbc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(0,156,188,0.4)`   | `0 156 188`                            |
| `opacity.neutral.100` | <table><tr><td bgcolor="#707070">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(112,112,112,0.1)` | `112 112 112`                          |
| `opacity.neutral.200` | <table><tr><td bgcolor="#707070">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(112,112,112,0.2)` | `112 112 112`                          |
| `opacity.neutral.300` | <table><tr><td bgcolor="#707070">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> | `rgba(112,112,112,0.6)` | `112 112 112`                          |

## Gradients

The gradients are exported from `@uniicy/assets`, but the current `buildThemeCss()` function does not emit them into
`dist/styles.css`.

| Token                    | Source value                                                                           | Notes                                                 |
|--------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------------|
| `gradients.body`         | `radial-gradient(circle, #004560 0%, #00435e 33%, #002a3b 100%)`                       | Uses `primary-700`, `primary-800`, and `primary-900`. |
| `gradients.overlayLeft`  | `linear-gradient(270deg, rgba(0,42,59,0) 0%, rgba(0,42,59,0.5) 48.8%, #002a3b 97.66%)` | Left overlay based on `primary-900`.                  |
| `gradients.overlayRight` | `linear-gradient(90deg, rgba(0,42,59,0) 0%, rgba(0,42,59,0.5) 48.8%, #002a3b 97.66%)`  | Right overlay based on `primary-900`.                 |

The playground adds its own extra background images in `apps/playground/tailwind.config.ts`, including `brand-radial`
and `brand-mesh`; those are playground-only theme extensions, not exported from the web package preset.

## Generated references that are not real tokens

Two color-looking references currently appear in `components/web/dist/styles.css`, but they are not part of the token
system above.

| Generated CSS                                                       | Where it comes from                                                                                      | Why it matters                                                                                                                 |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `.text-[var(--color-secondary)] { color: var(--color-secondary); }` | `components/web/src/atoms/Tooltip/Tooltip.tsx` uses `text-[var(--color-secondary)]` on the close button. | `--color-secondary` is not generated in `:root`, so this color only works if a consuming app defines that CSS variable itself. |
| `.text-[a-zA-Z0-9-] { color: a-zA-Z0-9-; }`                         | Tailwind's scanner appears to pick up the regex-like string `text-[a-zA-Z0-9-]+` from `Tooltip.tsx`.     | This is not a useful color utility. It is scanner noise caused by a string literal, not a token from `colors.ts`.              |

## Quick lookup

| Common question                                        | Answer                                                                                                          |
|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| What color is `primary-500`?                           | `#00829d`, generated as `0 130 157`; visually it is the main brand teal.                                        |
| Why are the CSS variables not `#00829d`?               | They are channel tuples so Tailwind can inject opacity with `/20`, `/50`, etc.                                  |
| Why does `border-outline` look stronger than expected? | The source alpha is stripped. Use `border-outline/20`, `border-outline-subtle/10`, or another explicit opacity. |
| Which token should I use for app backgrounds?          | Use `bg-canvas` for the page background and `bg-surface` or `bg-surface-elevated` for panels.                   |
| Which token should I use for text?                     | Use `text-fg`, `text-fg-muted`, `text-fg-subtle`, or `text-fg-inverse` before reaching for primitives.          |
| Which Tailwind config do consumers use?                | `@dgithiomi/sbui-web/tailwind-preset`, exported from `components/web/tailwind.preset.ts`.                       |
