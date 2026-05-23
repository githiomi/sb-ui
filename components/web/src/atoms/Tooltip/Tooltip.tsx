import { cn } from "@uniicy/libs";
import React, { ReactNode } from "react";
import { AnimatePresence } from "motion/react";
import {
    TooltipProps,
    TooltipTrigger,
    TooltipPlacement,
    TooltipPointerDirection,
} from "./Tooltip.types";

const animationClasses = {
    fade: "opacity-0 animate-fadeIn",
    scale: "animate-scaleIn",
    none: "",
};

const variantBorderColorClasses = {
    success: "tooltip-success-variant",
    warning: "tooltip-warning-variant",
    error: "tooltip-error-variant",
    info: "tooltip-info-variant",
};

export const Tooltip: React.FC<TooltipProps & { children: ReactNode }> = ({
    id,
    className,
    content,
    placement = "top",
    trigger = "hover",
    delay = 0,
    arrow = true,
    animation = "fade",
    maxWidth,
    disabled,
    asChild = "div",
    ref,
    isVisible = false,
    closeButton,
    onClose,
    onShow,
    onHide,
    children,
    variant,
    pointerDirection = "left",
}) => {
    const [visible, setVisible] = React.useState(isVisible);
    const internalRef = React.useRef<HTMLDivElement>(null);
    const mergedRef = mergeRefs(ref, internalRef);

    React.useEffect(() => {
        if (visible) {
            onShow?.();
        }
    }, [visible, onShow]);

    function mergeRefs<T>(
        ...refs: (React.Ref<T> | undefined)[]
    ): React.RefCallback<T> {
        return (value: T) => {
            refs.forEach((ref) => {
                if (typeof ref === "function") {
                    ref(value);
                } else if (ref) {
                    (ref as React.MutableRefObject<T | null>).current = value;
                }
            });
        };
    }

    const getContainerPositionClass = (
        position: TooltipPlacement,
        pointerDirection: TooltipPointerDirection,
    ): string => {
        if (position === "bottom") {
            if (pointerDirection === "left")
                return "top-[calc(100%+8px)] left-0";
            if (pointerDirection === "center")
                return "top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2";
            if (pointerDirection === "right")
                return "top-[calc(100%+8px)] right-0";
        } else if (position === "top") {
            if (pointerDirection === "left")
                return "bottom-[calc(100%+8px)] left-0";
            if (pointerDirection === "center")
                return "bottom-[calc(100%+8px)] left-1/2 transform -translate-x-1/2";
            if (pointerDirection === "right")
                return "bottom-[calc(100%+8px)] right-0";
        } else if (position === "left") {
            if (pointerDirection === "left")
                return "right-[calc(100%+8px)] top-0";
            if (pointerDirection === "center")
                return "right-[calc(100%+8px)] top-1/2 transform -translate-y-1/2";
            if (pointerDirection === "right")
                return "right-[calc(100%+8px)] bottom-0";
        } else if (position === "right") {
            if (pointerDirection === "left")
                return "left-[calc(100%+8px)] top-0";
            if (pointerDirection === "center")
                return "left-[calc(100%+8px)] top-1/2 transform -translate-y-1/2";
            if (pointerDirection === "right")
                return "left-[calc(100%+8px)] bottom-0";
        }
        return "";
    };

    const getVariantContainerClass = (
        position: TooltipPlacement,
        pointerDirection: TooltipPointerDirection,
    ) => {
        if (position == "bottom") {
            if (pointerDirection === "left")
                return "top-[-2px] left-0 h-4 w-[100px]";
            if (pointerDirection === "center")
                return "top-[-2px] left-1/2 transform -translate-x-1/2 h-4 w-[100px]";
            if (pointerDirection === "right")
                return "top-[-2px] right-0 h-4 w-[100px]";
        } else if (position == "top") {
            if (pointerDirection === "left")
                return "bottom-[-2px] left-0 h-4 w-[100px]";
            if (pointerDirection === "center")
                return "bottom-[-2px] left-1/2 transform -translate-x-1/2 h-4 w-[100px]";
            if (pointerDirection === "right")
                return "bottom-[-2px] right-0 h-4 w-[100px]";
        } else if (position == "left") {
            return "left-[calc(100%-13px)] top-1/2 transform -translate-y-1/2 h-[100px] w-4";
        } else if (position == "right") {
            return "right-[calc(100%-13px)] top-1/2 transform -translate-y-1/2 h-[100px] w-4";
        }

        return "";
    };

    function useTooltipVisibility(
        ref: React.RefObject<HTMLElement | null>,
        trigger: TooltipTrigger,
        delay?: number,
    ): boolean {
        React.useEffect(() => {
            const el = ref.current;
            if (!el || disabled || content === null || content === undefined)
                return;

            if (trigger === "click") {
                const handleClick = () => {
                    setVisible((prev) => !prev);
                };
                el.addEventListener("click", handleClick);
                return () => {
                    el.removeEventListener("click", handleClick);
                };
            } else if (trigger === "focus") {
                const handleFocus = () => {
                    setVisible(true);
                };
                const handleBlur = () => {
                    onHide?.();
                    setVisible(false);
                };
                el.addEventListener("focus", handleFocus);
                el.addEventListener("blur", handleBlur);
                return () => {
                    el.removeEventListener("focus", handleFocus);
                    el.removeEventListener("blur", handleBlur);
                };
            } else if (trigger === "hover") {
                const handleMouseEnter = () => {
                    if (delay) {
                        setTimeout(() => {
                            setVisible(true);
                        }, delay);
                    } else {
                        setVisible(true);
                    }
                };
                const handleMouseLeave = () => {
                    setVisible(false);
                    onHide?.();
                };
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
                return () => {
                    el.removeEventListener("mouseenter", handleMouseEnter);
                    el.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        }, [trigger, ref, delay]);

        return visible;
    }

    const useTooltipArrowPosition = (
        position: TooltipPlacement,
        pointerDirection: TooltipPointerDirection = "left",
    ) => {
        return React.useMemo(() => {
            let arrowPositionClass = "";
            let arrowInlineStyle: React.CSSProperties = {};

            if (position === "bottom") {
                arrowInlineStyle = { top: "-4px" };
                arrowPositionClass =
                    pointerDirection === "left"
                        ? "left-2"
                        : pointerDirection === "right"
                            ? "right-2"
                            : "left-1/2 transform -translate-x-1/2";
            } else if (position === "top") {
                arrowInlineStyle = { bottom: "-4px" };
                arrowPositionClass =
                    pointerDirection === "left"
                        ? "left-2"
                        : pointerDirection === "right"
                            ? "right-2"
                            : pointerDirection === "center"
                                ? "left-1/2 transform -translate-x-1/2"
                                : "bottom-[-2px] left-0 h-4 w-[100px]";
            } else if (position === "left") {
                arrowInlineStyle = { right: "-4px" };
                arrowPositionClass = "top-1/2 transform -translate-y-1/2";
            } else if (position === "right") {
                arrowInlineStyle = { left: "-4px" };
                arrowPositionClass = "top-1/2 transform -translate-y-1/2";
            }

            return { arrowPositionClass, arrowInlineStyle };
        }, [position, pointerDirection]);
    };

    useTooltipVisibility(internalRef, trigger, delay);

    const { arrowPositionClass, arrowInlineStyle } = useTooltipArrowPosition(
        placement,
        pointerDirection,
    );

    const tooltipBgClass =
        className?.match(/bg-(?:\[.*?]|[a-zA-Z0-9-]+)/)?.[0] || "bg-white";

    const textColor =
        className?.match(/text-[a-zA-Z0-9-]+/)?.[0] || "text-inputDefaultText";

    const containerPositionClass = cn(
        "absolute z-10",
        className,
        getContainerPositionClass(placement, pointerDirection),
    );

    const variantContainerClass = getVariantContainerClass(
        placement,
        pointerDirection,
    );

    const renderArrow = () => (
        <div
            className={cn(
                "absolute h-2 w-2 rotate-45 bg-inherit",
                arrowPositionClass,
                variant && `tooltip-${placement}-variant-arrow-${variant}`,
            )}
            style={arrowInlineStyle}
        />
    );

    const hideToolTip = () => {
        setVisible(false);
        onClose?.();
    };

    const renderCloseButton = () => (
        <button
            tabIndex={0}
            aria-label="Close tooltip"
            type="button"
            className="absolute top-4 right-4 cursor-pointer text-[var(--color-secondary)]"
            onClick={hideToolTip}
        >
            ✕
        </button>
    );

    const renderVariantBorder = () => (
        <div
            className={cn(
                "absolute z-[-1] flex",
                variant && variantBorderColorClasses[variant],
                variantContainerClass,
            )}
        ></div>
    );

    return (
        <div ref={mergedRef} className="relative inline-block">
            {React.createElement(
                asChild,
                { id },
                <>
                    {children}
                    <AnimatePresence>
                        {visible && (
                            <div
                                tabIndex={0}
                                role="alert"
                                data-testid="tooltip-container"
                                className={cn(
                                    "w-max",
                                    containerPositionClass,
                                    animationClasses[animation],
                                )}
                                style={{
                                    maxWidth:
                                        typeof maxWidth === "number"
                                            ? `${maxWidth}px`
                                            : maxWidth,
                                }}
                            >
                                <div
                                    data-testid="tooltip"
                                    className={cn(
                                        className,
                                        tooltipBgClass,
                                        "relative flex flex-col items-start gap-1 px-2 py-1",
                                        textColor,
                                    )}
                                >
                                    {closeButton && renderCloseButton()}
                                    {content}
                                    {arrow && content && renderArrow()}
                                    {variant && renderVariantBorder()}
                                </div>
                            </div>
                        )}
                    </AnimatePresence>
                </>,
            )}
        </div>
    );
};
