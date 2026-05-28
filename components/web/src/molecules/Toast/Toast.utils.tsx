import {
    X
    // XFill,
    // Warning,
    // SuccessIcon,
    // InformationCircle,
} from "@uniicy/icons";
import React from "react";
import { ToastVariant, ToastVariantProps } from "./Toast.types";

export const TOAST_VARIANTS: Record<ToastVariant, ToastVariantProps> = {
    success: {
        textColor: "var(--toast-text)",
        iconBackground: "var(--toast-success)",
        toastContentColor: "var(--toast-success)",
        backgroundColor: "var(--toast-background)",
        icon: (
            <X
                color="var(--toast-success-icon)"
                className="rounded-full"
                size={17}
            />
        ),
    },
    error: {
        textColor: "var(--toast-text)",
        backgroundColor: "var(--toast-background)",
        toastContentColor: "var(--toast-error)",
        iconBackground: "var(--toast-error-icon)",
        icon: <X />,
    },
    warning: {
        textColor: "var(--toast-text)",
        backgroundColor: "var(--toast-background)",
        toastContentColor: "var(--toast-warning)",
        iconBackground: "var(--toast-warning-icon)",
        icon: <X color="white" size={17} />,
    },
    info: {
        textColor: "var(--toast-text)",
        backgroundColor: "var(--toast-background)",
        iconBackground: "var(--color-secondary)",
        toastContentColor: "var(--color-primary)",
        icon: <X color="white" size={17} />,
    },
};

export function secondsToMillis(seconds: number) {
    return seconds * 1000;
}
