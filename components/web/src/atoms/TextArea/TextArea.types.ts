import { TooltipProps } from "@atoms/Tooltip";
import { FocusEvent, ReactNode, TextareaHTMLAttributes } from "react";

/**
 * Controls padding and typography scale of the textarea.
 *
 * - `small` — compact density for dense forms or tables.
 * - `default` — standard body size for most layouts.
 * - `large` — emphasized input for hero or marketing surfaces.
 */
export type TextAreaSize = "small" | "default" | "large";

/**
 * Visual feedback state applied to the field border and clear affordance.
 *
 * - `none` — neutral styling (default).
 * - `error` — error ring and error-toned clear button.
 * - `warning` — warning ring and warning-toned clear button.
 */
export type TextAreaStatus = "warning" | "error" | "none";

/**
 * Native CSS `resize` behavior on the underlying `<textarea>`.
 *
 * - `none` — fixed dimensions (default).
 * - `vertical` — height only.
 * - `horizontal` — width only.
 * - `both` — width and height.
 */
export type TextAreaResize = "none" | "vertical" | "horizontal" | "both";

/**
 * Props for the {@link TextArea} component.
 *
 * `TextArea` is a controlled multi-line input. Pair `value` with `onChange` for
 * state updates. Native `<textarea>` attributes (e.g. `name`, `tabIndex`) pass
 * through via `...props` except `onChange`, `prefix`, and `suffix`, which are
 * owned by this API.
 */
export interface TextAreaProps
    extends Omit<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        "onChange" | "suffix" | "prefix"
    > {
    /** Unique `id` on the native `<textarea>`. Used for labels, tooltips, and tests. */
    id: string;

    /** Current textarea value. Use with {@link TextAreaProps.onChange} for controlled usage. */
    value: string;

    /** Called with the latest string whenever the user edits the field. */
    onChange: (value: string) => void;

    /** Class names merged onto the outer wrapper (layout, spacing, surfaces). */
    className?: string;

    /** Hint text shown when the field is empty. */
    placeholder?: string;

    /** Initial value when not fully controlled by parent state (rare; prefer `value`). */
    defaultValue?: string;

    /** Visual density of the control. @default "default" */
    size?: TextAreaSize;

    /** Prevents editing and applies disabled styles. @default false */
    disabled?: boolean;

    /** Displays the value but blocks edits (focusable, not dimmed like `disabled`). @default false */
    readOnly?: boolean;

    /** Marks the field required for native form validation. @default false */
    required?: boolean;

    /** Fired when the textarea receives focus. */
    onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;

    /** Fired when the textarea loses focus. */
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;

    /** Focuses the textarea on mount. @default false */
    autoFocus?: boolean;

    /** Shows a clear control when the field has a value (also clears on Escape). @default true */
    allowClear?: boolean;

    /** Maximum character count; pairs with {@link TextAreaProps.showCount}. */
    maxLength?: number;

    /** Minimum length for native constraint validation. */
    minLength?: number;

    /** Renders a live character counter (`value.length` / `maxLength` when set). @default false */
    showCount?: boolean;

    /** Visible height in rows (maps to the `rows` attribute). @default 3 */
    rows?: number;

    /** Whether the user can resize the textarea with the drag handle. @default "none" */
    resize?: TextAreaResize;

    /** Node rendered inside the field shell before the `<textarea>` (e.g. icon). */
    prefix?: ReactNode;

    /** Node rendered inside the field shell after the `<textarea>` (e.g. unit label). */
    suffix?: ReactNode;

    /** Content attached before the entire field group (flattens leading corners). */
    addonBefore?: ReactNode;

    /** Content attached after the entire field group (flattens trailing corners). */
    addonAfter?: ReactNode;

    /** Validation or feedback styling for borders and the clear button. @default "none" */
    status?: TextAreaStatus;

    /** Shortcut tooltip copy. Wraps the field in `Tooltip` when set. */
    tooltip?: string;

    /**
     * Full {@link TooltipProps} for placement, trigger, variant, and styling.
     * Merged with `id` and `tooltip` on the wrapping `Tooltip`.
     */
    tooltipOptions?: TooltipProps;

    /** Accessible name when no visible `<label>` is associated with the field. */
    "aria-label"?: string;

    /** Id of an element that describes the field (helper or error text). */
    "aria-describedby"?: string;
}
