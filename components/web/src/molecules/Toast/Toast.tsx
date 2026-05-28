import React from "react";
import { ToastProps } from "./Toast.types";

export const Toast: React.FC<ToastProps> = ({
    title,
    message,
    variant,
    duration,
    onClose,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{message}</p>
        </div>
    )
}