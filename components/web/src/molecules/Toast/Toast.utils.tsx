import React from "react";
import { ToastVariant, ToastVariantProps } from "./Toast.types";
import { XFill, Warning, Success, CircledInformation } from "@uniicy/icons";

export const TOAST_VARIANTS: Record<ToastVariant, ToastVariantProps> = {
    success: {
        backgroundColor: "var(--color-fg)",
        textColor: "var(--color-fg-inverse)",
        iconBackground: "var(--color-success-400)",
        toastContentColor: "var(--color-success-400)",
        icon: <Success color="var(--color-success-700)" className="rounded-full" />,
    },
    error: {
        backgroundColor: "var(--color-fg)",
        textColor: "var(--color-fg-inverse)",
        iconBackground: "var(--color-error-400)",
        toastContentColor: "var(--color-error-400)",
        icon: <XFill color="var(--color-error-700)" />,
    },
    warning: {
        backgroundColor: "var(--color-fg)",
        textColor: "var(--color-fg-inverse)",
        iconBackground: "var(--color-warning-400)",
        toastContentColor: "var(--color-warning-400)",
        icon: <Warning color="var(--color-warning-700)" />,
    },
    info: {
        backgroundColor: "var(--color-fg)",
        textColor: "var(--color-fg-inverse)",
        iconBackground: "var(--color-neutral-400)",
        toastContentColor: "var(--color-neutral-400)",
        icon: <CircledInformation color="white" />,
    },
};

export function secondsToMillis(seconds: number) {
    return seconds * 1000;
}
