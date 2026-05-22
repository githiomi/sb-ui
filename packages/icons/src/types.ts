import type { SVGProps } from "react";

/**
 * Base props for all web SVG icons.
 *
 * - `size` sets width/height (number → px).
 * - `strokeWidth` sets the stroke width of the icon.
 * - `color` maps to `fill` or `stroke` depending on the icon implementation.
 */
export type IconProps = SVGProps<SVGSVGElement> & {
  color?: string;
  strokeWidth?: number;
  size?: number | string;
};
