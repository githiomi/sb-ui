// import { StyleProp, ViewStyle, AccessibilityRole, AccessibilityState } from 'react-native';
import React, { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'ghostDark' | 'cyan' | 'withShadow';

// export interface ButtonNativeProps {
//     id?: string;
//     label?: string | ReactElement;
//     icon?: ReactElement;
//     onPress?: () => void;
//     disabled?: boolean;
//     variant?: ButtonVariant;
//     size?: ButtonSize;
//     loading?: boolean;
//     rounded?: boolean;
//     style?: StyleProp<ViewStyle>;
//     accessibilityLabel?: string;
//     className?: string;
//     textStyle?: string;
//     accessibilityRole?: AccessibilityRole;
//     accessibilityState?: AccessibilityState;
//     accessibilityHint?: string;
// }

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    label: string | ReactNode;
    onClick?: () => void;
    icon?: ReactNode;
    disabled?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    rounded?: boolean;
    forwardedRef?: Ref<HTMLButtonElement>;
    asChild?: boolean;
    textStyle?: string;
    className?: string;
    as?: React.ElementType;
    ariaLabel?: string;
}