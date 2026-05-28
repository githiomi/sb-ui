import React from "react";
import { ToastVariant, ToastVariantProps } from "./Toast.types";
import { XFill, Warning, Success, CircledInformation } from "@uniicy/icons";

export const TOAST_VARIANTS: Record<ToastVariant, ToastVariantProps> = {
    success: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-success-400))",
        toastContentColor: "rgb(var(--color-success-400))",
        icon: (
            <Success
                color="rgb(var(--color-success-700))"
                className="rounded-full"
            />
        ),
    },
    error: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-error-400))",
        toastContentColor: "rgb(var(--color-error-400))",
        icon: <XFill color="rgb(var(--color-error-700))" />,
    },
    warning: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-warning-400))",
        toastContentColor: "rgb(var(--color-warning-400))",
        icon: <Warning color="rgb(var(--color-warning-700))" />,
    },
    info: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-neutral-400))",
        toastContentColor: "rgb(var(--color-neutral-400))",
        icon: <CircledInformation color="white" />,
    },
};

export function secondsToMillis(seconds: number) {
    return seconds * 1000;
}
