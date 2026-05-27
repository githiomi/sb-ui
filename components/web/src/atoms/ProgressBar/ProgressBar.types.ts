import React from "react";

export type ProgressBarProps = {
    id: string;
    className?: string;
    value?: number;
    defaultValue?: number;
    max?: number;
    min?: number;
    size?: "small" | "medium" | "large";
    color?: string;
    backgroundColor?: string;
    striped?: boolean;
    animated?: boolean;
    variant?: "solid" | "dashed" | "dotted";
    showPercentage?: boolean;
    indeterminate?: boolean;
    autoFocus?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    style?: React.CSSProperties;
    onChange?: (value: number) => void;
    direction?: "horizontal" | "vertical";
    minColor?: string;
    maxColor?: string;
    showLoadingLabel?: boolean;
    labelPosition?: "inside" | "outside";
    minLabel?: string;
    maxLabel?: string;
};
