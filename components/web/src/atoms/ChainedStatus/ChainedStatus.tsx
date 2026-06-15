import React from 'react';
import { cn } from '@uniicy/libs';
import { ChainedStatusProps, statusColors } from './ChainedStatus.types';

const sizeClasses = {
    small: 'w-5 h-5 text-xs',
    default: 'w-8 h-8 text-sm',
    large: 'w-10 h-10 text-base'
};

const connectorSizes = {
    small: 'w-2 h-0.5',
    default: 'w-5 h-0.5',
    large: 'w-6 h-[3px]'
};

const chevronSizes = {
    small: {
        size: 'text-[22px]',
        leftPosition: '-left-4 -top-[7.5px]',
        rightPosition: '-right-4 -top-[7.5px]'
    },
    default: {
        size: 'text-[28px]',
        leftPosition: '-left-5.5 -top-[6px]',
        rightPosition: '-right-5.5 -top-[6px]'
    },
    large: {
        size: 'text-[33px]',
        leftPosition: '-left-6 -top-[6px]',
        rightPosition: '-right-6 -top-[6px]'
    }
};

export const ChainedStatus: React.FC<ChainedStatusProps> = ({
    id,
    items,
    className,
    size = 'default',
    direction = 'left',
    variant = 'square'
}: ChainedStatusProps) => {
    const chevronPosition =
        direction === 'left' ? chevronSizes[size].leftPosition : chevronSizes[size].rightPosition;

    return (
        <section
            id={id}
            data-testid={id}
            className={cn('relative flex items-center', className)}
            aria-label={`${id} Chained status indicator`}
        >
            {direction === 'left' && (
                <span
                    className={cn(
                        'absolute z-[-1] text-warning-500',
                        chevronPosition,
                        chevronSizes[size].size
                    )}
                    aria-hidden
                >
            ←
        </span>
            )}
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div
                        className={cn(
                            'text-text-main flex items-center justify-center font-bold',
                            {
                                'rounded-full': variant === 'circle'
                            },
                            statusColors[item.status],
                            sizeClasses[size]
                        )}
                        aria-label={`Chained Item Status ${item.label}: ${item.status}`}
                    >
                        {item.label}
                    </div>
                    {index < items.length - 1 && (
                        <div
                            className={cn('bg-warning-500', connectorSizes[size])}
                            data-testid={`connector-${index}`}
                        />
                    )}
                </React.Fragment>
            ))}
            {direction === 'right' && (
                <span
                    className={cn(
                        'absolute z-[-1] text-warning-500',
                        chevronPosition,
                        chevronSizes[size].size
                    )}
                    aria-hidden
                >
            →
        </span>
            )}
        </section>
    );
};