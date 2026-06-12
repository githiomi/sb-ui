import type { PropRow } from '@layouts/shared';

export const TextAreaProps: PropRow[] = [
    {
        name: 'id',
        type: 'string',
        required: true,
        description:
            'Unique id applied to the underlying `<textarea>` element.'
    },
    {
        name: 'onChange',
        type: '(value: string) => void',
        required: true,
        description:
            'Called with the current textarea value when the user edits the field.'
    },
    {
        name: 'className',
        type: 'string',
        description:
            'Optional class names merged onto the outer wrapper for layout or surface overrides.'
    },
    {
        name: 'placeholder',
        type: 'string',
        description: 'Placeholder text shown when the textarea is empty.'
    },
    {
        name: 'value',
        type: 'string',
        description: 'Controlled value for the textarea.'
    },
    {
        name: 'defaultValue',
        type: 'string',
        description: 'Initial value for an uncontrolled textarea.'
    },
    {
        name: 'size',
        type: '"small" | "default" | "large"',
        defaultValue: '"default"',
        description: 'Controls padding and typography scale of the field.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Disables interaction and applies disabled styling.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Makes the textarea read-only while keeping it focusable.'
    },
    {
        name: 'required',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Marks the field as required for native form validation.'
    },
    {
        name: 'onFocus',
        type: '(event: FocusEvent<HTMLTextAreaElement>) => void',
        description: 'Called when the textarea receives focus.'
    },
    {
        name: 'onBlur',
        type: '(event: FocusEvent<HTMLTextAreaElement>) => void',
        description: 'Called when the textarea loses focus.'
    },
    {
        name: 'autoFocus',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Focuses the textarea on mount.'
    },
    {
        name: 'allowClear',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Shows a clear button when the field has a value.'
    },
    {
        name: 'maxLength',
        type: 'number',
        description: 'Maximum number of characters the user can enter.'
    },
    {
        name: 'minLength',
        type: 'number',
        description:
            'Minimum number of characters required for native validation.'
    },
    {
        name: 'showCount',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Displays a character count; pairs with `maxLength`.'
    },
    {
        name: 'rows',
        type: 'number',
        defaultValue: '3',
        description: 'Visible height of the textarea in rows.'
    },
    {
        name: 'resize',
        type: '"none" | "vertical" | "horizontal" | "both"',
        defaultValue: '"none"',
        description: 'CSS resize behavior for the textarea.'
    },
    {
        name: 'prefix',
        type: 'ReactNode',
        description:
            'Content rendered before the textarea inside the field shell.'
    },
    {
        name: 'suffix',
        type: 'ReactNode',
        description:
            'Content rendered after the textarea inside the field shell.'
    },
    {
        name: 'addonBefore',
        type: 'ReactNode',
        description: 'Content rendered before the entire field group.'
    },
    {
        name: 'addonAfter',
        type: 'ReactNode',
        description: 'Content rendered after the entire field group.'
    },
    {
        name: 'status',
        type: '"warning" | "error" | "none"',
        defaultValue: '"none"',
        description:
            'Validation or feedback state applied to the field border and clear affordance.'
    },
    {
        name: 'tooltip',
        type: 'string',
        description:
            'Shortcut for tooltip content; wraps the field in `Tooltip` when set.'
    },
    {
        name: 'tooltipOptions',
        type: 'TooltipProps',
        description:
            'Full tooltip configuration (placement, trigger, variant, etc.) passed to the wrapping `Tooltip`.'
    }
];
