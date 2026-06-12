import React from 'react';
import { IconProps } from '../types';

export const Success: React.FC<IconProps> = ({
                                                 size = 16,
                                                 className,
                                                 strokeWidth = 2,
                                                 color = '#0FE630',
                                                 ...props
                                             }) => (
    <svg
        fill="none"
        aria-hidden
        width={size}
        height={size}
        viewBox="0 0 20 20"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width="20" height="20" fill={color} />
        <path
            d="M8.07573 14.2982L4.17573 10.3982C3.94142 10.1639 3.94142 9.78399 4.17573 9.54964L5.02424 8.70113C5.25854 8.4668 5.63846 8.4668 5.87277 8.70113L8.5 11.3283L14.1272 5.7011C14.3615 5.46682 14.7415 5.46682 14.9758 5.7011L15.8243 6.54964C16.0586 6.78395 16.0586 7.16386 15.8243 7.39819L8.92426 14.2982C8.68993 14.5325 8.31004 14.5325 8.07573 14.2982Z"
            fill="white"
        />
    </svg>
);
