import type { SVGProps } from "react";

/**
 * Base props for all web SVG icons.
 *
 * - `size` sets width/height (number → px).
 * - `color` maps to `fill` or `stroke` depending on the icon implementation.
 */
export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};
