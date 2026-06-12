import type { ComponentType } from 'react';
import { LandingPage, ProgressBarPage, TextAreaPage } from './pages';

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
        slug: 'progress-bar',
        path: '/components/progress-bar',
        title: 'ProgressBar',
        description: 'A progress bar component.',
        category: 'atom',
        status: 'stable',
        element: ProgressBarPage
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
