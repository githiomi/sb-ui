import React from 'react';
import { IconProps } from '../types';

export const XFill: React.FC<IconProps> = ({
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
        viewBox="0 0 17 17"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M16.5 8.5C16.5 4.08172 12.9183 0.5 8.5 0.5C4.08172 0.5 0.5 4.08172 0.5 8.5C0.5 12.9183 4.08172 16.5 8.5 16.5C12.9183 16.5 16.5 12.9183 16.5 8.5Z"
            fill={color}
        />
        <path
            d="M5.89728 12.1371L8.49728 9.49914L11.1353 12.1371L12.1353 11.1031L9.49728 8.50314L12.1353 5.90314L11.1353 4.86914L8.49728 7.50714L5.89728 4.86914L4.86328 5.89814L7.50128 8.49814L4.86328 11.1031L5.89728 12.1371Z"
            fill="white"
        />
    </svg>
);
