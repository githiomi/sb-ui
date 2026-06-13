import { cn } from '@uniicy/libs';
import { X } from '@uniicy/icons';
import { Tooltip } from '@atoms/Tooltip';
import { TextAreaProps } from './TextArea.types';
import React, { useEffect, useRef, useState } from 'react';

export const TextArea: React.FC<TextAreaProps> = ({
    id,
    value,
    className,
    placeholder,
    defaultValue,
    size = 'default',
    disabled = false,
    readOnly = false,
    required = false,
    onChange,
    onFocus,
    onBlur,
    autoFocus = false,
    allowClear = true,
    maxLength,
    minLength,
    showCount = false,
    rows = 3,
    resize = 'none',
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    status = 'none',
    tooltip,
    tooltipOptions,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const clearButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (autoFocus && textAreaRef.current) {
            textAreaRef.current.focus();
        }
    }, [autoFocus]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
    };

    const handleClear = () => {
        onChange('');
        if (textAreaRef.current) {
            textAreaRef.current.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape' && allowClear && value) {
            handleClear();
        }
    };

    const textareaClasses = cn(
        'w-full p-2 border border-2 border-neutral-300 rounded-sm transition-all duration-200 text-fg dark:text-fg-inverse rounded',
        {
            // Size variants
            'text-sm': size === 'small',
            'text-lg': size === 'large',
            'text-base': size === 'default',

            // State variants
            'bg-gray-300 text-gray-500 cursor-not-allowed':
                disabled || readOnly,
            'bg-fg': !disabled && !readOnly,

            // Add-ons
            'rounded-tl-none rounded-bl-none': addonBefore,
            'rounded-tr-none rounded-br-none': addonAfter,

            // Focus state
            'focus-within:ring-2 focus-within:shadow-[0_0_15px_0] focus-within:shadow-primary-500 focus-within:ring-primary-500 outline-none':
            isFocused,
            'ring-2 !ring-error-500 focus-within:shadow-error-500':
                status === 'error',
            'ring-2 !ring-warning-500 focus-within:shadow-warning-500':
                status === 'warning',

            // Resize options
            'resize-none': resize === 'none',
            'resize-y': resize === 'vertical',
            'resize-x': resize === 'horizontal',
            resize: resize === 'both'
        },
        className
    );

    const clearButtonClasses = cn(
        'absolute top-2 right-2 size-5 cursor-pointer flex items-center justify-center rounded-full focus:outline-none',
        {
            'right-6': suffix,
            'bg-neutral-300 hover:bg-neutral-400': status === 'none',
            'bg-error-500/90 hover:bg-error-500': status === 'error',
            'bg-warning-500/90 hover:bg-warning-500': status === 'warning'
        }
    );

    const getStatusMessage = () => {
        if (status === 'error') return 'Error';
        if (status === 'warning') return 'Warning';
        return '';
    };

    return (
        <Tooltip id={id} content={tooltip} {...tooltipOptions}>
            <div
                role="group"
                className="relative"
                aria-describedby={ariaDescribedBy}
                data-testid="test-textarea-container"
                aria-labelledby={
                    id ? `${id}-text-area` : 'Text Area Input Field'
                }
            >
                {addonBefore && (
                    <div
                        role="presentation"
                        aria-label={`Text Area Before Addon: ${addonBefore}`}
                        className="absolute left-0 top-0 flex h-full items-center px-2"
                    >
                        {addonBefore}
                    </div>
                )}
                {prefix && (
                    <div
                        aria-label={`Text Area Prefix: ${prefix}`}
                        className="absolute left-2 top-1/2 -translate-y-1/2 transform"
                        role="presentation"
                    >
                        {prefix}
                    </div>
                )}
                <textarea
                    id={id}
                    ref={textAreaRef}
                    className={textareaClasses}
                    placeholder={placeholder}
                    value={value}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    maxLength={maxLength}
                    minLength={minLength}
                    rows={rows}
                    aria-label={ariaLabel || placeholder}
                    aria-invalid={status === 'error'}
                    aria-required={required}
                    aria-disabled={disabled}
                    aria-readonly={readOnly}
                    aria-multiline="true"
                    aria-describedby={
                        [
                            status ? `${id}-status` : null,
                            showCount ? `${id}-count` : null,
                            tooltip ? `${id}-tooltip` : null
                        ]
                            .filter(Boolean)
                            .join(' ') || undefined
                    }
                    style={{
                        paddingLeft: prefix ? '2rem' : '',
                        paddingRight: suffix || allowClear ? '2rem' : ''
                    }}
                    {...props}
                />
                {suffix && (
                    <div
                        aria-label={`Text Area Suffix: ${suffix}`}
                        className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                        role="presentation"
                    >
                        {suffix}
                    </div>
                )}
                {addonAfter && (
                    <div
                        aria-label={`Text Area After Addon: ${addonAfter}`}
                        className="absolute right-0 top-0 flex h-full items-center px-2"
                        role="presentation"
                    >
                        {addonAfter}
                    </div>
                )}
                {allowClear && value && !readOnly && !disabled && !suffix && (
                    <button
                        tabIndex={0}
                        role="button"
                        ref={clearButtonRef}
                        onClick={handleClear}
                        className={clearButtonClasses}
                        aria-label="Clear Text Area Input"
                    >
                        <span className="sr-only">Clear input</span>
                        <div aria-hidden="true">
                            <X
                                size={12}
                                strokeWidth={2.5}
                                className={cn('text-neutral-200', {
                                    'text-primary': status === 'none'
                                })}
                            />
                        </div>
                    </button>
                )}

                {showCount && (
                    <div
                        id={`${id}-count`}
                        aria-live="polite"
                        aria-label={`Current Word Count: ${value?.length || 0}/${maxLength || 0}`}
                        className={cn(
                            'absolute bottom-1.5 right-1 text-[10px] text-neutral-500',
                            {
                                'bottom-2 right-2': resize !== 'none'
                            }
                        )}
                    >
                        {maxLength
                            ? `${value?.length}/${maxLength}`
                            : value?.length}
                    </div>
                )}

                {status && (
                    <div
                        role="status"
                        className="sr-only"
                        aria-live="polite"
                        id={`${id}-status`}
                        aria-label={getStatusMessage()}
                    >
                        {getStatusMessage()}
                    </div>
                )}
            </div>
        </Tooltip>
    );
};
