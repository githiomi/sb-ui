import type { IconProps } from "../types";

/** Close / clear icon (used in inputs, modals, etc.). */
export const X: React.FC<IconProps> = ({
    size = 16,
    color = "currentColor",
    className,
    ...props
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
        {...props}
    >
        <path
            d="M18 6L6 18M6 6l12 12"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
