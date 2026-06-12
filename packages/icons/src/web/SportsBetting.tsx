import React from 'react';
import type { IconProps } from '../types';

export const SportsBetting: React.FC<IconProps> = ({
                                                       size = 20,
                                                       className,
                                                       strokeWidth = 2,
                                                       color = 'currentColor',
                                                       ...props
                                                   }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        {...props}
    >
        <path
            d="M10 0.5L19.5 5.75v9.5L10 20.5 0.5 15.25V5.75L10 0.5Z"
            fill="white"
        />
        <path
            d="M10 4v13M5 7.5l5 2.5 5-2.5M5 14.5l5-2.5 5 2.5"
            stroke="#FFED00"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
