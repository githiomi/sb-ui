import type { PropRow } from '@layouts/shared';

export const ToastProps: PropRow[] = [
    {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Main body text shown inside the toast.'
    },
    {
        name: 'variant',
        type: '"success" | "error" | "warning" | "info"',
        required: true,
        description: 'Semantic style and icon for the notification.'
    },
    {
        name: 'title',
        type: 'string',
        description: 'Optional heading above the message.'
    },
    {
        name: 'duration',
        type: '"short" | "long"',
        description: 'How long the toast remains visible before auto-dismissing.'
    },
    {
        name: 'onClose',
        type: '() => void',
        description: 'Called when the toast is dismissed.'
    }
];

export const useToastProps: PropRow[] = [
    {
        name: 'showToast',
        type: '(toast: ToastProps) => void',
        required: true,
        description:
            'Imperative API from `useToast()`. Pass `message` and `variant` at minimum.'
    }
];
