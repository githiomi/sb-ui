import { ReactNode } from 'react';

export type PrimitiveValue = string | number | boolean | undefined | ReactNode;

export interface RowData {
    [key: string]: PrimitiveValue;
}

export const FilterOptions: string[] = ['Ligatabelle', 'Heim', 'Gast', 'Formtabelle'] as const;

export interface LeagueStatisticsProps {
    error?: string;
    showChainedStatus?: boolean;
    skeletonLoaderRowCount?: number;
    data: LeagueStatisticsTableItem[];
}

export interface LeagueStatisticsTableItem extends RowData {
    id: number; // Unique identifier for the table item
    Team: string; // Name of the Team
    Form: string; // Form string (e.g., "U-U-S-S-S-S")
    Sp: number; // Matches played
    G: number; // Wins
    U: number; // Draws
    V: number; // Losses
    Tore: string; // Goals scored vs. goals conceded (e.g., "56:16")
    Pkt: number; // Points earned
}

export interface StatisticsSkeletonLoaderProps {
    rows: number;
    columns?: number;
}