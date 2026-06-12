import React from 'react';
import type { IconProps } from '../types';

export const SportsBettingLogo: React.FC<IconProps> = ({
                                                           size = 170,
                                                           className,
                                                           strokeWidth = 2,
                                                           color = 'currentColor',
                                                           ...props
                                                       }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 170 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        {...props}
    >
        <rect x={0} y={8} width={28} height={15} rx={3} fill="#004560" />
        <path
            d="M36 20V18h4c1.2 0 2 .3 2.7-1 .7-.6 1.3-1.5 1.3-2.7 0-1.4-.9-2.3-2.3-2.3H36V10h5.5c2.2 0 3.5 1.2 3.5 3.2 0 1.4-.7 2.6-1.9 3.2 1.4.6 2.2 1.9 2.2 3.6V20H36Z"
            fill="white"
        />
        <path
            d="M82 10h3l1.5 7.5L88 10h2.5l2.5 7.5L94 10h3l-3.5 11h-2.5L91 14l-2.5 7H86L82 10Z"
            fill="#FFED00"
        />
        <path
            d="M145 21V10h2.5l.5 1.5c.6-.9 1.5-1.5 2.6-1.5 2.2 0 3.5 1.6 3.5 4.2 0 2.8-1.4 4.5-3.6 4.5-.9 0-1.7-.2-2.4-.6V21H145Z"
            fill="white"
        />
    </svg>
);
