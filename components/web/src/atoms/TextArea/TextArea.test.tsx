import React from "react";
import { cn } from "@uniicy/libs";
import type { TextAreaProps } from "./TextArea.types";

export const TextArea: React.FC<TextAreaProps> = ({
    id,
    label,
    className,
    placeholder,
}) => {
    return (
        <div className={cn("bg-surface p-3 rounded-lg", className)}>
            <label htmlFor={id} className="block font-semibold">
                {label}
            </label>
            <textarea
                id={id}
                placeholder={placeholder}
                className={cn(
                    "mt-1 w-full rounded-md border",
                    "border-outline/20 bg-canvas text-fg",
                    "placeholder:text-fg-subtle",
                    "focus:outline-none focus:border-brand",
                )}
            />
        </div>
    );
};
