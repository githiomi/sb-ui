import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

/* -------------------------------------------------------------------------------------------------
 * Merge class names
 * -----------------------------------------------------------------------------------------------*/
/**
 * Merge class names from library defaults and consumer overrides.
 *
 * `classnames` joins the inputs into a single string (supports strings, arrays,
 * and objects). `tailwind-merge` then resolves conflicting Tailwind utilities
 * so that the LAST class for a given property wins — e.g. `cn("p-2", "p-4")`
 * collapses to `"p-4"` instead of leaving both in the DOM.
 *
 * @param inputs - The class names to merge.
 * @returns A single, conflict-free className string.
 */
export function cn(...inputs: classNames.ArgumentArray) {
    return twMerge(classNames(inputs));
}
