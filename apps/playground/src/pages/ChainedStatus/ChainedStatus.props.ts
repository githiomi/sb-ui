import type { PropRow } from '@layouts/shared';

export const ChainedStatusProps: PropRow[] = [
    {
        name: 'id',
        type: 'string',
        required: true,
        description: 'Unique id applied to the status chain container.'
    },
    {
        name: 'items',
        type: 'ChainedStatusItem[]',
        required: true,
        description:
            'Ordered list of status nodes. Each item has a `label` and `status` (`N`, `U`, or `S`).'
    },
    {
        name: 'size',
        type: '"small" | "default" | "large"',
        defaultValue: '"default"',
        description: 'Controls node dimensions and connector width.'
    },
    {
        name: 'variant',
        type: '"circle" | "square"',
        defaultValue: '"square"',
        description: 'Shape of each status node.'
    },
    {
        name: 'direction',
        type: '"left" | "right" | "none"',
        defaultValue: '"left"',
        description:
            'Shows a directional chevron on the left, right, or hides it entirely.'
    },
    {
        name: 'className',
        type: 'string',
        description: 'Optional class names for the outer wrapper.'
    }
];
