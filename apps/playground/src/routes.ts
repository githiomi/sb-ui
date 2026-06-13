import type { ComponentType } from 'react';
import {
    ButtonPage,
    ChainedStatusPage,
    LandingPage,
    ProgressBarPage,
    TablePage,
    TabsPage,
    TextAreaPage,
    ToastPage,
    TooltipPage
} from './pages';

/**
 * Single source of truth for the playground's navigation.
 *
 * - `path` is consumed by the router.
 * - `category` drives the grouping in the sidebar and on the landing page.
 * - `status` lets us mark components as `stable`, `beta`, or `planned`
 *   without removing them from the catalog.
 *
 * Add a new entry here whenever a new `*.page.tsx` is added; the sidebar,
 * landing-page catalog and breadcrumbs will pick it up automatically.
 */

export type ComponentStatus = 'stable' | 'beta' | 'planned';

export type ComponentCategory = 'atom' | 'molecule' | 'organism' | 'template';

export interface ComponentRoute {
    slug: string;
    path: string;
    title: string;
    description: string;
    category: ComponentCategory;
    status: ComponentStatus;
    element: ComponentType;
}

export const HOME_ROUTE = {
    path: '/',
    title: 'Overview',
    element: LandingPage
} as const;

export const componentRoutes: ComponentRoute[] = [
    {
        slug: 'button',
        path: '/components/button',
        title: 'Button',
        description:
            'Primary action control for forms, toolbars, and betting workflows.',
        category: 'atom',
        status: 'stable',
        element: ButtonPage
    },
    {
        slug: 'chained-status',
        path: '/components/chained-status',
        title: 'ChainedStatus',
        description:
            'Chained status indicators for sequences of match or selection states.',
        category: 'atom',
        status: 'stable',
        element: ChainedStatusPage
    },
    {
        slug: 'progress-bar',
        path: '/components/progress-bar',
        title: 'ProgressBar',
        description:
            'Visual progress indicator with sizes, variants, and labels.',
        category: 'atom',
        status: 'stable',
        element: ProgressBarPage
    },
    {
        slug: 'text-area',
        path: '/components/text-area',
        title: 'TextArea',
        description:
            'Multi-line text input for collecting long-form user content.',
        category: 'atom',
        status: 'stable',
        element: TextAreaPage
    },
    {
        slug: 'tooltip',
        path: '/components/tooltip',
        title: 'Tooltip',
        description:
            'Contextual hints with placement, trigger modes, and semantic variants.',
        category: 'atom',
        status: 'stable',
        element: TooltipPage
    },
    {
        slug: 'tabs',
        path: '/components/tabs',
        title: 'Tabs',
        description:
            'Switchable panels for live views, market groups, or settings.',
        category: 'molecule',
        status: 'stable',
        element: TabsPage
    },
    {
        slug: 'toast',
        path: '/components/toast',
        title: 'Toast',
        description:
            'Transient notifications for bet placement, errors, and system messages.',
        category: 'molecule',
        status: 'stable',
        element: ToastPage
    },
    {
        slug: 'table',
        path: '/components/table',
        title: 'Table',
        description:
            'Data tables for bet slips, market lists, and account history.',
        category: 'organism',
        status: 'stable',
        element: TablePage
    }
];

export const CATEGORY_LABELS: Record<ComponentCategory, string> = {
    atom: 'Atoms',
    molecule: 'Molecules',
    organism: 'Organisms',
    template: 'Templates'
};

export function groupByCategory(routes: ComponentRoute[]) {
    return routes.reduce<Record<ComponentCategory, ComponentRoute[]>>(
        (acc, route) => {
            (acc[route.category] ||= []).push(route);
            return acc;
        },
        {
            atom: [],
            molecule: [],
            organism: [],
            template: []
        }
    );
}
