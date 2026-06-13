import type { PropRow } from '@layouts/shared';

export const TabsProps: PropRow[] = [
    {
        name: 'id',
        type: 'string',
        required: true,
        description: 'Unique id applied to the tabs container.'
    },
    {
        name: 'tabs',
        type: 'Tab[]',
        required: true,
        description:
            'Tab definitions. Each tab requires `label` and may include `content`, `header`, `body`, `footer`, or `disabled`.'
    },
    {
        name: 'activeTab',
        type: 'number',
        description: 'Controlled index of the active tab.'
    },
    {
        name: 'onTabChange',
        type: '(index: number) => void',
        description: 'Called when the user selects a different tab.'
    },
    {
        name: 'tabPosition',
        type: '"top" | "bottom" | "left" | "right"',
        defaultValue: '"top"',
        description: 'Where tab buttons are rendered relative to the panel.'
    },
    {
        name: 'variant',
        type: '"primary" | "secondary"',
        defaultValue: '"primary"',
        description: 'Active/inactive button colour pairing for tab labels.'
    },
    {
        name: 'padding',
        type: '"none" | "small" | "medium" | "large"',
        defaultValue: '"small"',
        description: 'Inner padding of the tab content card.'
    },
    {
        name: 'bordered',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Adds a border around the tab content card.'
    },
    {
        name: 'shadow',
        type: '"none" | "small" | "medium" | "large"',
        defaultValue: '"none"',
        description: 'Elevation shadow on the tab content card.'
    },
    {
        name: 'className',
        type: 'string',
        description: 'Optional class names for the outer tabs wrapper.'
    }
];
