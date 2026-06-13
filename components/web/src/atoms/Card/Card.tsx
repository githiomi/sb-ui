import React from 'react';
import { cn } from '@uniicy/libs';
import { CardProps } from './Card.types';

const shadowStyles = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg'
};

export const Card: React.FC<CardProps> = ({
    id,
    className,
    header,
    footer,
    bordered = false,
    shadow = 'none',
    padding = 'medium',
    width,
    height,
    children
}) => {
    const getPadding = () => {
        switch (padding) {
            case 'none':
                return 'p-0';
            case 'small':
                return 'p-[8px]';
            case 'medium':
                return 'p-[15px]';
            case 'large':
                return 'p-[24px]';
            default:
                return 'p-0';
        }
    };

    return (
        <section
            tabIndex={0}
            id={id}
            className={cn(
                bordered && 'border border-neutral-400',
                shadowStyles[shadow],
                getPadding(),
                className
            )}
            style={{ width, height }}
        >
            {header && <div className="font-semibold text-fg">{header}</div>}
            <div className="flex-1">{children}</div>
            {footer && <div className="text-sm text-fg">{footer}</div>}
        </section>
    );
};