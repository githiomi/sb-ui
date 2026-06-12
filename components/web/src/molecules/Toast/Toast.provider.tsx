import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { Toast } from './Toast';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ToastContextType, ToastInternal, ToastProps } from './Toast.types';

export const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
                                                                     children
                                                                 }) => {
    const [toasts, setToasts] = useState<ToastInternal[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const showToast = useCallback((toast: ToastProps) => {
        const toastUUID =
            globalThis.crypto?.randomUUID?.() ??
            `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const newToast: ToastInternal = { ...toast, toastUUID };
        setToasts((prev) => [...prev, newToast]);
    }, []);

    const removeToast = useCallback((toastUUID: string) => {
        setToasts((prev) =>
            prev.filter((toast) => toast.toastUUID !== toastUUID)
        );
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {isClient
                ? createPortal(
                    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-3">
                        <AnimatePresence initial={false}>
                            {toasts.map((toast) => {
                                const { toastUUID } = toast;

                                return (
                                    <motion.div
                                        className="w-full"
                                        key={toastUUID}
                                        layout
                                        initial={{ opacity: 0, x: 50, y: 10 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        exit={{
                                            opacity: 0,
                                            x: 50,
                                            transition: { duration: 0.25 }
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 24
                                        }}
                                    >
                                        <Toast
                                            {...toast}
                                            onClose={() =>
                                                removeToast(toastUUID)
                                            }
                                        />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>,
                    document.body
                )
                : null}
        </ToastContext.Provider>
    );
};
