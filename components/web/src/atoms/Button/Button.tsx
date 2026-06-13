import { cn } from '@uniicy/libs';
import React, { forwardRef, LegacyRef } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';

const variantClasses: Record<ButtonVariant, string> = {
    primary: `bg-[var(--color-buttonMainBackgroundColor)] text-[var(--color-primary)] font-bold
    hover:bg-[var(--color-buttonMainHoverBackground)] hover:text-[var(--color-primary)]
    active:bg-[var(--color-buttonMainHoverBackground)] active:text-[var(--color-primary)]
    disabled:!bg-[var(--color-buttonMainDisabledBackgroundColor)] disabled:text-[var(--color-buttonMainDisabledTextColor)] disabled:text-opacity-50`,
    secondary: `bg-[var(--color-buttonSecondaryBackgroundColor)] text-[var(--color-buttonSecondaryTextColor)] font-bold
    hover:bg-[var(--color-buttonSecondaryHoverBackground)] hover:text-[var(--color-buttonSecondaryTextColor)] active:bg-[var(--color-buttonSecondaryHoverBackground)] active:text-[var(--color-buttonSecondaryTextColor)]
    disabled:!bg-[var(--color-buttonTertiaryDisabledBackground)] disabled:hover:bg-[var(--button-primary-bg)] disabled:text-opacity-50`,
    ghost: `border border-[var(--button-ghost-border)] text-[var(--button-ghost-text)]
    hover:bg-[var(--button-ghost-hover-bg)] hover:text-[var(--button-ghost-hover-text)] active:bg-[var(--button-ghost-hover-bg)] active:text-[var(--button-ghost-hover-text)]
    disabled:!opacity-50 disabled:!bg-transparent`,
    ghostDark: `border border-[var(--button-ghost-dark-border)] text-[var(--button-ghost-dark-text)]
    hover:bg-[var(--button-ghost-dark-hover-bg)] hover:text-[var(--button-ghost-dark-hover-text)] active:bg-[var(--button-ghost-dark-hover-bg)] active:text-[var(--button-ghost-dark-hover-text)]
    disabled:!opacity-50 disabled:!bg-transparent`,
    cyan: `bg-[var(--button-cyan-bg)] text-[var(--button-cyan-text)]
    hover:bg-[var(--button-cyan-hover-bg)] active:bg-[var(--button-cyan-hover-bg)]
    disabled:!bg-transparent disabled:!opacity-50 disabled:!border disabled:!border-[var(--button-ghost-dark-border)] disabled:!text-[var(--button-ghost-dark-text)]`,
    withShadow: `bg-[var(--color-buttonMainBackgroundColor)]  text-[var(--color-primary)] font-bold
    hover:bg-[var(--color-buttonMainHoverBackground)]
    disabled:hover:bg-[var(--button-topShadow-bg)]bg-[var(--color-buttonMainBackgroundColor)] 
    [box-shadow:0px_-5px_5px_0px_var(--color-buttonSecondaryBackgroundColor)]
    disabled:!bg-[var(--color-buttonMainDisabledBackgroundColor)] disabled:text-[var(--color-buttonMainDisabledTextColor)] disabled:text-opacity-50`
};

const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-2 py-1.5 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-2 text-lg'
};

function getSpinnerColor(variant: ButtonVariant): string {
    if (variant === 'ghost') return 'border-[var(--button-ghost-border)]';
    if (variant === 'ghostDark') return 'border-[var(--button-ghost-dark-border)]';
    return 'border-[var(--color-textTertiary)]';
}

function Spinner({ variant }: { variant: ButtonVariant }) {
    const spinnerBorder = getSpinnerColor(variant);
    return (
        <div
            className={cn(
                'inline-block h-5 w-5 animate-spin rounded-full border-2 border-t-transparent',
                spinnerBorder
            )}
            role="status"
            aria-label="Loading"
            data-testid="spinner"
        />
    );
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

function renderIcon(
    iconNode: React.ReactNode,
    size: ButtonSize,
    decorative: boolean
): React.ReactNode {
    if (React.isValidElement(iconNode)) {
        const existingClassName = (iconNode.props as { className?: string }).className || '';
        return React.cloneElement(iconNode as React.ReactElement<{ className?: string }>, {
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
        const focusClasses =
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]';
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
        let content: React.ReactNode;
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