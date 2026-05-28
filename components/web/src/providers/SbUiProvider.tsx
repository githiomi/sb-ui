import React from "react";
import type { PropsWithChildren } from "react";
import { ToastProvider } from "../molecules/Toast";

export interface SbuiProviderProps extends PropsWithChildren {
    /**
     * Keep this provider extensible: feature providers can be toggled here
     * as the library grows without forcing consumer-level wrapper churn.
     */
    enableToastProvider?: boolean;
}

export const SbuiProvider = ({
    children,
    enableToastProvider = true,
}: SbuiProviderProps) => {
    if (!enableToastProvider) {
        return <>{children}</>;
    }

    return <ToastProvider>{children}</ToastProvider>;
};
