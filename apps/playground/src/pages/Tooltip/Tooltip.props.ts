import type { PropRow } from '@layouts/shared';

export const TooltipProps: PropRow[] = [
    {
        name: 'id',
        type: 'string',
        required: true,
        description: 'Unique identifier for the tooltip instance.'
    },
    {
        name: 'content',
        type: 'string | ReactNode',
        required: true,
        description: 'Text or element displayed inside the tooltip panel.'
    },
    {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'The trigger element the tooltip is anchored to.'
    },
    {
        name: 'placement',
        type: '"top" | "bottom" | "left" | "right"',
        defaultValue: '"top"',
        description: 'Preferred position relative to the trigger.'
    },
    {
        name: 'trigger',
        type: '"hover" | "click" | "focus" | "manual"',
        defaultValue: '"hover"',
        description: 'Interaction that shows and hides the tooltip.'
    },
    {
        name: 'variant',
        type: '"success" | "warning" | "error" | "info"',
        description: 'Semantic color treatment for the tooltip surface.'
    },
    {
        name: 'pointerDirection',
        type: '"left" | "right" | "center"',
        defaultValue: '"left"',
        description: 'Arrow alignment along the placement edge.'
    },
    {
        name: 'arrow',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to render the pointer arrow.'
    },
    {
        name: 'delay',
        type: 'number',
        defaultValue: '0',
        description: 'Milliseconds before the tooltip appears after triggering.'
    },
    {
        name: 'closeButton',
        type: 'boolean',
        description: 'Shows a dismiss button inside the tooltip panel.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        description: 'Prevents the tooltip from opening.'
    }
];
