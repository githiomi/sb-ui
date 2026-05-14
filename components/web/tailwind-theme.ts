import { colors } from "@uniicy/assets";

/**
 * Maps `@uniicy/assets` color tokens into Tailwind `theme.extend.colors`.
 * Primitives stay under their object names; semantic themes are `light` / `dark`.
 */
export function buildTailwindThemeColors() {
  const { themes, ...palette } = colors;
  return {
    ...palette,
    dark: themes.dark,
    light: themes.light,
  };
}
