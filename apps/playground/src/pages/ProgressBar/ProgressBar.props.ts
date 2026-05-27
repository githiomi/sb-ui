import type { PropRow } from "@layouts/shared";

export const ProgressBarProps: PropRow[] = [
    {
        name: "id",
        type: "string",
        required: true,
        description: "Unique id applied to the underlying `<div>` element.",
    },
    {
        name: "className",
        type: "string",
        description:
            "Optional class names merged onto the outer wrapper for layout or surface overrides.",
    },
    {
        name: "value",
        type: "number",
        description: "Controlled value for the progress bar.",
    },
    {
        name: "defaultValue",
        type: "number",
        description: "Initial value for an uncontrolled progress bar.",
    },
    {
        name: "max",
        type: "number",
        description: "Maximum value for the progress bar.",
    },
    {
        name: "min",
        type: "number",
        description: "Minimum value for the progress bar.",
    },
    {
        name: "size",
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: "Controls padding and typography scale of the field.",
    },
    {
        name: "color",
        type: "string",
        description: "Color of the progress bar.",
    },
    {
        name: "backgroundColor",
        type: "string",
        description: "Background color of the progress bar.",
    },
    {
        name: "striped",
        type: "boolean",
        defaultValue: "false",
        description: "Striped progress bar.",
    },
    {
        name: "animated",
        type: "boolean",
        defaultValue: "false",
        description: "Animated progress bar.",
    },
    {
        name: "variant",
        type: '"solid" | "dashed" | "dotted"',
        defaultValue: '"solid"',
        description: "Variant of the progress bar.",
    },
    {
        name: "showPercentage",
        type: "boolean",
        defaultValue: "false",
        description: "Show percentage of the progress bar.",
    },
    {
        name: "indeterminate",
        type: "boolean",
        defaultValue: "false",
        description: "Indeterminate progress bar.",
    },
    {
        name: "autoFocus",
        type: "boolean",
        defaultValue: "false",
        description: "Auto focus the progress bar.",
    },
    {
        name: "onClick",
        type: "(event: React.MouseEvent<HTMLDivElement>) => void",
        description: "Click handler for the progress bar.",
    },
    {
        name: "style",
        type: "React.CSSProperties",
        description: "Style for the progress bar.",
    },
    {
        name: "onChange",
        type: "(value: number) => void",
        description: "Change handler for the progress bar.",
    },
    {
        name: "direction",
        type: '"horizontal" | "vertical"',
        defaultValue: '"horizontal"',
        description: "Direction of the progress bar.",
    },
    {
        name: "minColor",
        type: "string",
        description: "Color of the minimum value of the progress bar.",
    },
    {
        name: "maxColor",
        type: "string",
        description: "Color of the maximum value of the progress bar.",
    },
    {
        name: "showLoadingLabel",
        type: "boolean",
        defaultValue: "false",
        description: "Show loading label of the progress bar.",
    },
    {
        name: "labelPosition",
        type: '"inside" | "outside"',
        defaultValue: '"outside"',
        description: "Position of the label of the progress bar.",
    },
    {
        name: "minLabel",
        type: "string",
        description: "Label of the minimum value of the progress bar.",
    },
    {
        name: "maxLabel",
        type: "string",
        description: "Label of the maximum value of the progress bar.",
    },
];
