import { cn } from '@uniicy/libs';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';
import React, { forwardRef, isValidElement, LegacyRef, ReactElement, ReactNode } from 'react';

const variantClasses: Record<ButtonVariant, string> = {
    primary: `bg-accent-500 text-primary-700 font-bold hover:bg-accent-400 hover:text-primary-700 active:bg-accent-400 active:text-primary-700 disabled:!bg-accent-300 disabled:text-primary-700/50 disabled:text-opacity-50`,
    secondary: `bg-primary-600 text-neutral-200 font-bold hover:bg-primary-700 hover:text-neutral-200 active:bg-primary-700 active:text-neutral-200 disabled:!bg-primary-700/50 disabled:hover:bg-accent-500 disabled:text-opacity-50`,
    ghost: `border border-fg text-fg hover:bg-fg/75 hover:text-fg-inverse active:bg-fg active:text-fg-inverse disabled:!opacity-50 disabled:!bg-transparent disabled:!opacity-50 disabled:!bg-transparent`,
    ghostDark: `border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-neutral-200 active:bg-primary-600 active:text-neutral-200 disabled:!opacity-50 disabled:!bg-transparent`,
    cyan: `bg-primary-400 text-neutral-200 hover:bg-primary-500 active:bg-primary-500 disabled:!opacity-50 disabled:!border disabled:!border-primary-600 disabled:!text-primary-600`,
    withShadow: `bg-accent-500  text-primary-700 font-bold hover:bg-accent-400 disabled:hover:bg-accent-300 [box-shadow:0px_-5px_5px_0px_primary-600] disabled:!bg-accent-300 disabled:text-primary-700/10 disabled:text-opacity-50`
};

const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-2 py-1.5 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-2 text-lg'
};

function getSpinnerColor(variant: ButtonVariant): string {
    if (variant === 'ghost') return 'text-fg';
    if (variant === 'ghostDark') return 'text-primary-600';
    return 'text-neutral-200';
}

function Spinner({ variant }: { variant: ButtonVariant }) {
    const spinnerColor = getSpinnerColor(variant);
    return <div className={cn('spinner', spinnerColor)} role="status" aria-label="Loading" data-testid="spinner" />;
}

function getIconSizeClasses(size: ButtonSize): string {
    switch (size) {
        case 'small':
            return 'w-4 h-4';
        case 'large':
            return 'w-6 h-6';
        default:
            return 'w-5 h-5';
    }
}

function renderIcon(iconNode: ReactNode, size: ButtonSize, decorative: boolean): ReactNode {
    if (isValidElement(iconNode)) {
        const existingClassName = (iconNode.props as { className?: string }).className || '';
        return React.cloneElement(iconNode as ReactElement<{ className?: string }>, {
            className: cn(getIconSizeClasses(size), existingClassName),
            ...(decorative ? { 'aria-hidden': true } : {}),
            ...(typeof iconNode === 'object' && 'focusable' in iconNode ? {} : { focusable: false })
        });
    }
    return iconNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            icon,
            onClick,
            disabled = false,
            variant = 'primary',
            size = 'medium',
            loading = false,
            rounded = true,
            className,
            textStyle,
            as,
            ...rest
        },
        forwardedRef
    ) => {
        const Component = (as || 'button') as React.ElementType;
        const variantClass = variantClasses[variant];
        const isNativeButton = Component === 'button';
        const sizeClass = sizeClasses[size];
        const focusClasses = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-700';
        const combinedClasses = cn(
            'button-base cursor-pointer disabled:cursor-not-allowed',
            focusClasses,
            variantClass,
            sizeClass,
            {
                'pointer-events-none': loading,
                'rounded-[4px]': rounded
            },
            className
        );
        let content: ReactNode;
        if (loading) {
            content = (
                <>
                    <Spinner variant={variant} />
                    <span className="sr-only">Loading</span>
                </>
            );
        } else if (icon) {
            content = (
                <span className="flex items-center gap-2">
                    {renderIcon(icon, size, true)}
                    <span className={textStyle}>{label}</span>
                </span>
            );
        } else {
            content = label;
        }
        const a11yProps = isNativeButton
            ? {}
            : {
                tabIndex: disabled || loading ? -1 : 0,
                'aria-disabled': disabled || loading,
                onKeyDown: (e: React.KeyboardEvent) => {
                    if (!disabled && e.key === ' ') e.preventDefault();
                },
                onKeyUp: (e: React.KeyboardEvent) => {
                    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        onClick?.();
                    }
                }
            };
        // Runtime check for valid component
        const isValidComponent = typeof Component === 'string' || typeof Component === 'function';
        if (!isValidComponent) {
            console.error('Invalid component type passed to Button `as` prop:', Component);
            return null;
        }
        return (
            <Component
                ref={forwardedRef as LegacyRef<HTMLButtonElement>}
                type={isNativeButton ? 'button' : undefined}
                {...a11yProps}
                aria-label={label}
                onClick={onClick}
                disabled={isNativeButton ? disabled || loading : undefined}
                className={combinedClasses}
                {...rest}
            >
                {content}
            </Component>
        );
    }
);
Button.displayName = 'Button';
