import React from 'react';
import type { IconProps } from '../types';

export const X: React.FC<IconProps> = ({
    size = 16,
    className,
    strokeWidth = 2,
    color = 'currentColor',
    ...props
}) => (
    <svg
        fill="none"
        aria-hidden
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M18 6L6 18M6 6l12 12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
    </svg>
);
