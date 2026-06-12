import { ReactNode } from 'react';

/**
 * The duration that a toast notification should be visible.
 * - "short": Typically a brief delay (e.g., 2-3 seconds).
 * - "long": A longer delay (e.g., 5-6 seconds).
 */
export type ToastDuration = 'short' | 'long';

/**
 * Visual style variants for the toast notification.
 * - "success": Indicates a successful or positive action.
 * - "error": Indicates an error or negative action.
 * - "warning": Indicates a warning or potentially problematic action.
 * - "info": Provides informational feedback to the user.
 */
export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

/**
 * Interface describing the visual properties for a particular toast variant.
 * Used to customize the appearance according to the variant type.
 */
export interface ToastVariantProps {
    /** The icon to display, based on the variant. */
    icon: ReactNode;
    /** The text color to use for toast content. */
    textColor: string;
    /** The background color for the icon container. */
    iconBackground: string;
    /** The background color of the toast itself. */
    backgroundColor: string;
    /** The color used for the content within the toast (may differ from general text color). */
    toastContentColor: string;
}

/**
 * Core properties for a toast notification.
 * Used when displaying or creating a toast within the UI.
 */
export interface ToastProps {
    /** Optional title to display above the message. */
    title?: string;
    /** The main message to display in the toast (required). */
    message: string;
    /** The variant determines the toast's styling and icon. */
    variant: ToastVariant;
    /** How long the toast should remain visible. If not provided, defaults may be used. */
    duration?: ToastDuration;

    // Callback Functions

    /** Function called when the toast is closed or dismissed. */
    onClose?: () => void;
}

/**
 * Internal representation of a toast, typically managed by the toast system.
 * Extends ToastProps with a unique identifier for handling toast instances.
 */
export interface ToastInternal extends ToastProps {
    /** Unique identifier for the toast instance (used internally for management). */
    toastUUID: string;
}

/**
 * The context shape for the Toast provider, enabling components to trigger toasts.
 * Exposes the showToast method, which accepts toast properties except an "id".
 */
export interface ToastContextType {
    /**
     * Show a new toast.
     * @param toast - An object specifying the toast's properties.
     */
    showToast: (toast: ToastProps) => void;
}
