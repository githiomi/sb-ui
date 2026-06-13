import { HTMLAttributes, ReactNode } from 'react';

export type CardShadow = 'none' | 'small' | 'medium' | 'large';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export interface CardProps extends HTMLAttributes<HTMLElement> {
    /**
     * Card id
     */
    id: string;

    /**
     * Card header component
     */
    header?: ReactNode | string;

    /**
     * Card footer component
     */
    footer?: ReactNode | string;

    /**
     * Bordered state to display card-bordered style
     */
    bordered?: boolean;

    /**
     * Card width
     */
    width?: string | number;

    /**
     * Card height
     */
    height?: string | number;

    /**
     * Card shadow
     */
    shadow?: CardShadow;

    /**
     * Card padding
     */
    padding?: CardPadding;

    /**
     * The content of the button
     */
    children: ReactNode;
}