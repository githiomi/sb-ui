export type Status = 'N' | 'U' | 'S';

export interface ChainedStatusItem {
    label: string;
    status: Status;
}

export const statusColors: Record<Status, string> = {
    N: 'bg-error-400',
    U: 'bg-warning-500',
    S: 'bg-success-300',
};

export type ChainedStatusVariant = 'circle' | 'square';
export type ChainedStatusSize = 'small' | 'default' | 'large';
export type ChainedStatusDirection = 'left' | 'right' | 'none';

export interface ChainedStatusProps {
    id: string;
    className?: string;
    size?: ChainedStatusSize;
    items: ChainedStatusItem[];
    variant?: ChainedStatusVariant;
    direction?: ChainedStatusDirection;
}

// Native props
export interface ChainedStatusNativeProps extends ChainedStatusProps {
    connectorColor?: string;
}