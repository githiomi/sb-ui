import React from "react";
import { ToastVariant, ToastVariantProps } from "./Toast.types";
import { XFill, Warning, Success, CircledInformation } from "@uniicy/icons";

export const TOAST_VARIANTS: Record<ToastVariant, ToastVariantProps> = {
    success: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        toastContentColor: "rgb(var(--color-success-500))",
        iconBackground: "rgb(var(--color-success-400) / 90%)",
        icon: (
            <Success
                size={17}
                className="rounded-full"
                color="rgb(var(--color-success-600))"
            />
        ),
    },
    error: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        toastContentColor: "rgb(var(--color-error-400))",
        iconBackground: "rgb(var(--color-error-400) / 80%)",
        icon: <XFill size={17} color="rgb(var(--color-error-600) / 90%)" />,
    },
    warning: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-warning-500))",
        toastContentColor: "rgb(var(--color-warning-500))",
        icon: <Warning size={17} color="white" />,
    },
    info: {
        backgroundColor: "rgb(var(--color-fg))",
        textColor: "rgb(var(--color-fg-inverse))",
        iconBackground: "rgb(var(--color-primary-500))",
        toastContentColor: "rgb(var(--color-primary-500))",
        icon: <CircledInformation size={17} color="white" />,
    },
};

export function secondsToMillis(seconds: number) {
    return seconds * 1000;
}
