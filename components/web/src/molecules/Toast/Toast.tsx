import { cn } from '@uniicy/libs';
import { X } from '@uniicy/icons';
import { motion } from 'motion/react';
import { ToastProps } from './Toast.types';
import { useIsMobile } from '@uniicy/core/hooks';
import React, { useEffect, useRef, useState } from 'react';
import { secondsToMillis, TOAST_VARIANTS as variants } from './Toast.utils';

export const Toast: React.FC<ToastProps> = ({
                                                title,
                                                message,
                                                onClose,
                                                variant = 'success',
                                                duration = 'short'
                                            }) => {
    const isMobile = useIsMobile();
    const [progress, setProgress] = useState(0);
    const [paused, setPaused] = useState(false);
    const startTimeRef = useRef<number | null>(null);
    const durationMs =
        duration === 'short' ? secondsToMillis(3) : secondsToMillis(6);
    const {
        icon,
        textColor,
        iconBackground,
        backgroundColor,
        toastContentColor
    } = variants[variant];

    useEffect(() => {
        let frame: number;

        const tick = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const elapsed = timestamp - startTimeRef.current;
            const percent = Math.min((elapsed / durationMs) * 100, 100);
            setProgress(percent);

            if (percent < 100) {
                frame = requestAnimationFrame(tick);
            } else {
                onClose?.();
            }
        };

        if (!paused) {
            frame = requestAnimationFrame(tick);
        }

        return () => cancelAnimationFrame(frame);
    }, [paused, durationMs, onClose]);

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => {
        setPaused(false);
        startTimeRef.current =
            performance.now() - (progress / 100) * durationMs;
    };

    const toastColors = {
        textColor,
        iconBackground,
        backgroundColor,
        closeIconColor: toastContentColor,
        progressIndicatorColor: toastContentColor,
        closeIconBorderColor: toastContentColor
    };

    return (
        <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            style={{
                color: toastColors.textColor,
                backgroundColor: toastColors.backgroundColor
            }}
            className={cn(
                'relative flex w-full items-center overflow-hidden rounded-xl shadow-xl sm:w-[22.5rem]',
                {
                    'bottom-14 right-0': isMobile
                }
            )}
        >
            <div className="flex flex-1 flex-row items-center justify-between gap-2 p-3">
                <div
                    style={{ backgroundColor: iconBackground }}
                    className="grid size-7 place-items-center rounded-full self-start mt-1"
                >
                    {icon}
                </div>
                <div className="pointer-events-none flex-1">
                    {title && <p className="text-base font-semibold">{title}</p>}
                    <p className="text-sm">{message}</p>
                </div>
                <div
                    role="button"
                    onClick={onClose}
                    style={{
                        borderColor: toastColors.closeIconBorderColor
                    }}
                    className={`!cursor-pointer rounded-full border p-1 opacity-50 hover:opacity-100`}
                >
                    <X size={16} color={toastColors.closeIconColor} />
                </div>
            </div>
            {/* Duration progress bar */}
            <motion.div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.1 }}
                className={`absolute bottom-0 left-0 h-[3px] opacity-80`}
                style={{ backgroundColor: toastColors.progressIndicatorColor }}
            />
        </motion.div>
    );
};
