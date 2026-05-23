import { TooltipProps } from "@atoms/Tooltip";
import { FocusEvent, ReactNode, TextareaHTMLAttributes } from "react";

export type TextAreaSize = "small" | "default" | "large";
export type TextAreaStatus = "warning" | "error" | "none";
export type TextAreaResize = "none" | "vertical" | "horizontal" | "both";
export type TooltipPosition = "left" | "right" | "bottom" | "top" | "mouse";

export interface TextAreaProps extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "suffix" | "prefix"
> {
    id: string;
    className?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    size?: TextAreaSize;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    onChange: (value: string) => void;
    onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    autoFocus?: boolean;
    allowClear?: boolean;
    maxLength?: number;
    minLength?: number;
    showCount?: boolean;
    rows?: number;
    resize?: TextAreaResize;
    prefix?: ReactNode;
    suffix?: ReactNode;
    addonBefore?: ReactNode;
    addonAfter?: ReactNode;
    status?: TextAreaStatus;
    tooltip?: string;
    tooltipOptions?: TooltipProps;
    "aria-label"?: string;
    "aria-describedby"?: string;
}
