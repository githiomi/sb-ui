import React from "react";
import { ToastVariant, ToastVariantProps } from "./Toast.types";
import { XFill, Warning, Success, CircledInformation } from "@uniicy/icons";

export const TOAST_VARIANTS: Record<ToastVariant, ToastVariantProps> = {
    success: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-success-400))",
        toastContentColor: "rgb(var(--color-success-600))",
        icon: (
            <Success
                size={16}
                className="rounded-full"
                color="rgb(var(--color-success-600))"
            />
        ),
    },
    error: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        toastContentColor: "rgb(var(--color-error-600))",
        iconBackground: "rgb(var(--color-error-400) / 80%)",
        icon: <XFill size={16} color="rgb(var(--color-error-600))" />,
    },
    warning: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-warning-500))",
        toastContentColor: "rgb(var(--color-warning-600))",
        icon: <Warning size={16} color="rgb(var(--color-warning-600))" />,
    },
    info: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-primary-400))",
        toastContentColor: "rgb(var(--color-primary-600))",
        icon: (
            <CircledInformation
                size={16}
                color="rgb(var(--color-primary-600))"
            />
        ),
    },
};

export function secondsToMillis(seconds: number) {
    return seconds * 1000;
}
