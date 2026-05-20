import React from "react";
import type { TextAreaProps } from "./TextArea.types";

/**
 * Minimal class concatenation helper. Keeps the library dep-free; swap for
 * `clsx`/`tailwind-merge` later if conflict resolution between consumer and
 * library classes becomes a problem.
 */
function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  className,
  placeholder,
}) => {
  return (
    <div className={cn("bg-surface p-3 rounded-lg", className)}>
      <label
        htmlFor={id}
        className="block font-semibold text-link"
      >
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={cn(
          "mt-1 w-full rounded-md border",
          "border-outline bg-canvas text-fg",
          "placeholder:text-fg-subtle",
          "focus:outline-none focus:border-brand"
        )}
      />
    </div>
  );
};
