import { ReactNode, RefObject } from 'react';
// import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

// export interface Tab {
//     accessibilityHint?: string;
//     label: string;
//     content?: ReactNode;
//     header?: ReactNode | string;
//     body?: ReactNode | string;
//     bodyClassName?: string;
//     footer?: ReactNode | string;
//     disabled?: boolean;
//     buttonRef?: RefObject<TouchableOpacity> | RefObject<HTMLButtonElement>;
//     cardRef?: RefObject<View> | RefObject<HTMLDivElement>;
// }
//
// export interface TabsProps {
//     testID?: string;
//     id: string;
//     style?: StyleProp<ViewStyle>;
//     tabLabelStyle?: string;
//     className?: string;
//     tabs: Tab[];
//     activeTab?: number;
//     onTabChange?: (index: number) => void;
//     onTabStatusChange?: (newIndex: number, oldIndex: number) => void;
//     tabPosition?: 'top' | 'bottom' | 'left' | 'right';
//     variant?: 'primary' | 'secondary';
//     padding?: 'none' | 'small' | 'medium' | 'large';
//     bordered?: boolean;
//     shadow?: 'none' | 'small' | 'medium' | 'large';
//     accessibilityHint?: string;
// }

export interface Tab {
    accessibilityHint?: string;
    label: string;
    content?: ReactNode;
    header?: ReactNode | string;
    body?: ReactNode | string;
    bodyClassName?: string;
    footer?: ReactNode | string;
    disabled?: boolean;
    buttonRef?: RefObject<HTMLButtonElement>;
    cardRef?: RefObject<HTMLDivElement>;
}

export interface TabsProps {
    testID?: string;
    id: string;
    style?: string;
    tabLabelStyle?: string;
    className?: string;
    tabs: Tab[];
    activeTab?: number;
    onTabChange?: (index: number) => void;
    onTabStatusChange?: (newIndex: number, oldIndex: number) => void;
    tabPosition?: 'top' | 'bottom' | 'left' | 'right';
    variant?: 'primary' | 'secondary';
    padding?: 'none' | 'small' | 'medium' | 'large';
    bordered?: boolean;
    shadow?: 'none' | 'small' | 'medium' | 'large';
    accessibilityHint?: string;
}

export interface TabsRef {
    scrollToActiveTab: () => void;
}