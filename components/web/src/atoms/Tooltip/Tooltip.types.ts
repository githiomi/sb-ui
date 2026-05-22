import { ReactNode, RefObject } from "react";

export type TooltipAnimation = "fade" | "scale" | "none";
export type TooltipPointerDirection = "left" | "right" | "center";
export type TooltipPlacement = "top" | "bottom" | "left" | "right";
export type TooltipTrigger = "hover" | "click" | "focus" | "manual";
export type TooltipVariant = "warning" | "success" | "error" | "info";

export interface TooltipProps {
    /**
     * Unique identifier for the Tooltip component.
     */
    id: string;

    /**
     * Custom CSS class for styling the Tooltip.
     */
    className?: string;

    /**
     *  The text or element displayed inside the Tooltip.
     */
    content: string | ReactNode;

    /**
     *  The preferred position of the Tooltip relative to the target element.
     *  - Top: Tooltip appears above the target.
     *  - Bottom: Tooltip appears below the target.
     *  - Left: Tooltip appears to the left of the target.
     *  - Right: Tooltip appears to the right of the target.
     */
    placement?: TooltipPlacement;

    /**
     * Defines how the Tooltip is activated.
     *  - Hover (default): Tooltip appears when hovering over the target.
     *  - Click: Tooltip appears when clicking the target.
     *  - Focus: Tooltip appears when the target gains focus.
     *  - Manual: Tooltip is controlled programmatically.
     */
    trigger?: TooltipTrigger;

    /**
     * Time (in milliseconds) before the Tooltip appears/disappears after triggering.
     */
    delay?: number;

    /**
     * Whether to display an arrow pointing to the target element.
     */
    arrow?: boolean;

    /**
     *  Defines the appearance animation of the Tooltip.
     *  - Fade (default): Smooth fade-in effect.
     *  - Scale: Expands from the center.
     *  - None: No animation.
     */
    animation?: TooltipAnimation;

    /**
     * Defines the maximum width of the Tooltip content.
     */
    maxWidth?: string | number;

    /**
     * Disables the Tooltip when set to true.
     */
    disabled?: boolean;

    /**
     * Specifies the type of element wrapping the Tooltip trigger.
     */
    asChild?: "button" | "span" | "div";

    /**
     * A reference to the underlying Tooltip container.
     */
    ref?: RefObject<HTMLDivElement>;

    /**
     * Controls whether the Tooltip is visible by default.
     * true: The Tooltip is visible when rendered.
     * false (default): The Tooltip follows the trigger behavior.
     */
    isVisible?: boolean;

    /**
     * If true, a close button appears inside the Tooltip, allowing manual dismissal.
     */
    closeButton?: boolean;

    /**
     * Callback function triggered when the close button is clicked.
     */
    onClose?: () => void;

    /**
     * Callback function triggered when the Tooltip becomes visible.
     */
    onShow?: () => void;

    /**
     * Callback function triggered when the Tooltip is hidden.
     */
    onHide?: () => void;

    variant?: TooltipVariant;
    pointerDirection?: TooltipPointerDirection;
}
