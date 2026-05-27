import { cn } from "@uniicy/libs";
import { ProgressBarProps } from "./ProgressBar.types";
import React, { useEffect, useRef, useState } from "react";

export const ProgressBar: React.FC<ProgressBarProps> = ({
    id,
    className,
    value: propValue,
    defaultValue = 0,
    max = 100,
    min = 0,
    size = "medium",
    color = "primary",
    striped = false,
    animated = false,
    variant = "solid",
    showPercentage = false,
    indeterminate = false,
    autoFocus = false,
    onClick,
    onChange,
    direction = "horizontal",
    minColor,
    maxColor,
    showLoadingLabel = true,
    labelPosition = "outside",
    minLabel,
    maxLabel,
}) => {
    const isFirstRender = React.useRef(true);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<number>(
        propValue !== undefined ? propValue : defaultValue,
    );

    useEffect(() => {
        if (propValue !== undefined) {
            setValue(propValue);
            if (!isFirstRender.current) {
                onChange?.(propValue);
            } else {
                isFirstRender.current = false;
            }
        }
    }, [propValue, onChange]);

    const percentage = indeterminate
        ? 0
        : Math.round(((value - min) / (max - min)) * 100);
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

    return (
        <section
            data-testid={id}
            aria-label="Progress bar"
            className={cn(
                "flex w-full",
                direction === "horizontal"
                    ? "flex-col"
                    : "flex-row items-center",
                direction === "vertical" && "h-64",
            )}
            role="group"
            aria-labelledby={`${id}-label`}
        >
            <div id={`${id}-label`} className="sr-only">
                Progress Bar:{" "}
                {indeterminate ? "Loading" : `${clampedPercentage}% complete`}
            </div>

            {direction === "horizontal" && (
                <div className="mb-1 flex justify-between">
                    {labelPosition === "outside" && minLabel && (
                        <span
                            className="text-xs font-medium"
                            style={{ color: minColor }}
                        >
                            {minLabel}
                        </span>
                    )}
                    {labelPosition === "outside" && maxLabel && (
                        <span
                            className="text-xs font-medium"
                            style={{ color: maxColor }}
                        >
                            {maxLabel}
                        </span>
                    )}
                </div>
            )}

            <div
                className={cn(
                    "relative rounded-full",
                    direction === "vertical" && "h-full overflow-hidden",
                )}
            >
                <div
                    id={id}
                    ref={progressBarRef}
                    className={cn(
                        "overflow-hidden bg-[var(--color-secondary)]",
                        {
                            "w-full rounded-full": direction === "horizontal",
                            "h-full rounded-full": direction === "vertical",
                            "h-1":
                                size === "small" && direction === "horizontal",
                            "h-2":
                                size === "medium" && direction === "horizontal",
                            "h-3":
                                size === "large" && direction === "horizontal",
                            "w-2": size === "small" && direction === "vertical",
                            "w-3":
                                size === "medium" && direction === "vertical",
                            "w-4": size === "large" && direction === "vertical",
                        },
                        className,
                    )}
                    onClick={onClick}
                    tabIndex={autoFocus ? 0 : undefined}
                    role="progressbar"
                    aria-valuenow={indeterminate ? undefined : value}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuetext={`${clampedPercentage}%`}
                    aria-busy={indeterminate ? "true" : value <= max}
                    aria-label={
                        indeterminate
                            ? "Loading"
                            : `Progress: ${clampedPercentage}%`
                    }
                >
                    <div
                        className={cn(
                            "transition-all duration-300 ease-in-out",
                            {
                                "h-full": direction === "horizontal",
                                "absolute bottom-0 w-full rounded-b-full":
                                    direction === "vertical",
                                "bg-[var(--color-primaryBackground)]":
                                    color === "primary",
                                "bg-[var(--color-accent)]":
                                    color === "secondary",
                                "bg-[var(--color-statusSuccess)]":
                                    color === "tertiary",
                                "progress-bar-dashed": variant === "dashed",
                                "progress-bar-dotted": variant === "dotted",
                                stripe_overlay: striped,
                                "animate-[progress_1s_linear_infinite]":
                                    animated,
                                "animate-[indeterminate-horizontal_1.5s_ease-in-out_infinite]":
                                    indeterminate && direction === "horizontal",
                                "origin-bottom animate-[indeterminate-vertical_1.5s_ease-in-out_infinite]":
                                    indeterminate && direction === "vertical",
                            },
                        )}
                        style={{
                            width:
                                direction === "horizontal"
                                    ? indeterminate
                                        ? "100%"
                                        : `${clampedPercentage}%`
                                    : "100%",
                            height:
                                direction === "vertical"
                                    ? indeterminate
                                        ? "100%"
                                        : `${clampedPercentage}%`
                                    : "100%",
                            backgroundColor: color.startsWith("#")
                                ? color
                                : undefined,
                        }}
                    >
                        {showPercentage && labelPosition === "inside" && (
                            <div
                                aria-label={`Current Progress: ${clampedPercentage}%`}
                                className={`absolute flex items-center justify-center ${
                                    direction === "horizontal"
                                        ? "inset-0"
                                        : "inset-x-0 bottom-1"
                                }`}
                            >
                                <span className="text-[10px] font-semibold text-[var(--color-textMain)]">
                                    {indeterminate
                                        ? showLoadingLabel
                                            ? "Loading..."
                                            : ""
                                        : `${clampedPercentage}%`}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {showPercentage && labelPosition === "outside" && (
                    <div
                        data-testid="percentage-container"
                        aria-label={`Current Progress: ${clampedPercentage}%`}
                        className={`absolute ${direction === "horizontal" ? "top-full" : "left-full ml-2"}`}
                        style={{
                            ...(direction === "horizontal"
                                ? {
                                      left: `${clampedPercentage}%`,
                                      transform: "translateX(-50%)",
                                  }
                                : {
                                      bottom: `${clampedPercentage}%`,
                                      transform: "translateY(50%)",
                                  }),
                        }}
                    >
                        <span className="text-[10px] font-semibold text-[var(--color-textMain)]">
                            {indeterminate
                                ? showLoadingLabel
                                    ? "Loading..."
                                    : ""
                                : `${clampedPercentage}%`}
                        </span>
                    </div>
                )}
            </div>

            {direction === "vertical" && labelPosition === "outside" && (
                <div className="relative ml-2 h-full" style={{ width: "auto" }}>
                    {maxLabel && (
                        <div
                            aria-label={`Max Label: ${maxLabel}`}
                            className="absolute left-0 top-[-10px]"
                        >
                            <span
                                className="text-xs font-medium"
                                style={{ color: maxColor }}
                            >
                                {maxLabel}
                            </span>
                        </div>
                    )}
                    {minLabel && (
                        <div
                            aria-label={`Min Label: ${minLabel}`}
                            className="absolute bottom-[-5px] left-0"
                        >
                            <span
                                className="text-xs font-medium"
                                style={{ color: minColor }}
                            >
                                {minLabel}
                            </span>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};
