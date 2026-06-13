import type { PropRow } from '@layouts/shared';

export const ButtonProps: PropRow[] = [
    {
        name: 'label',
        type: 'string | ReactNode',
        required: true,
        description: 'Visible button text or custom label content.'
    },
    {
        name: 'onClick',
        type: '() => void',
        description: 'Called when the button is clicked or activated via keyboard.'
    },
    {
        name: 'variant',
        type: '"primary" | "secondary" | "ghost" | "ghostDark" | "cyan" | "withShadow"',
        defaultValue: '"primary"',
        description: 'Visual style preset for the button surface and text.'
    },
    {
        name: 'size',
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: 'Controls padding and typography scale.'
    },
    {
        name: 'icon',
        type: 'ReactNode',
        description: 'Optional icon rendered before the label.'
    },
    {
        name: 'loading',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Shows a spinner and disables interaction while true.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Disables interaction and applies disabled styling.'
    },
    {
        name: 'rounded',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Applies rounded corners when true.'
    },
    {
        name: 'className',
        type: 'string',
        description: 'Additional class names merged onto the button element.'
    },
    {
        name: 'as',
        type: 'React.ElementType',
        description: 'Render the button as a different element (e.g. `a`).'
    }
];
