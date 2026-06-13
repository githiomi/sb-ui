import { useState } from 'react';
import { Tabs } from '@dgithiomi/sbui-web';
import { VariantSection } from '@components/VariantSection';
import { PageHeader, PropsTable } from '@layouts/shared';
import { TabsProps } from './Tabs.props';

const basicTabs = [
    {
        label: 'Live',
        content: (
            <p className="text-sm text-fg-muted">
                Live markets update in real time. Odds refresh as the match
                progresses.
            </p>
        )
    },
    {
        label: 'Pre-match',
        content: (
            <p className="text-sm text-fg-muted">
                Pre-match markets lock at kick-off. Review selections before
                placing your bet.
            </p>
        )
    },
    {
        label: 'Results',
        content: (
            <p className="text-sm text-fg-muted">
                Settled results and payout summaries appear here after the
                event ends.
            </p>
        )
    }
];

const structuredTabs = [
    {
        label: 'Overview',
        header: <h3 className="text-base font-semibold text-fg">Overview</h3>,
        body: (
            <p className="text-sm text-fg-muted">
                Use `header`, `body`, and `footer` slots when you need a
                structured card layout inside each tab.
            </p>
        ),
        footer: (
            <p className="text-xs text-fg-muted">Last updated 2 min ago</p>
        )
    },
    {
        label: 'Markets',
        header: <h3 className="text-base font-semibold text-fg">Markets</h3>,
        body: (
            <p className="text-sm text-fg-muted">
                42 active markets across match result, totals, and player
                props.
            </p>
        )
    },
    {
        label: 'History',
        disabled: true,
        body: (
            <p className="text-sm text-fg-muted">
                This tab is disabled until the user has bet history.
            </p>
        )
    }
];

export function TabsPage() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="bg-canvas">
            <PageHeader
                category="molecule"
                title="Tabs"
                status="stable"
                description="Organise related content into switchable panels — ideal for live/pre-match views, market groups, or settings sections."
            />

            <VariantSection
                title="Default"
                description="Top-positioned tabs with simple `content` slots."
            >
                <Tabs id="tabs-default" tabs={basicTabs} />
            </VariantSection>

            <VariantSection
                title="Controlled"
                description="Manage the active index with `activeTab` and `onTabChange` for routing or persisted UI state."
            >
                <div className="space-y-4">
                    <Tabs
                        activeTab={activeTab}
                        id="tabs-controlled"
                        tabs={basicTabs}
                        onTabChange={setActiveTab}
                    />
                    <p className="text-sm text-fg-muted">
                        Active tab index:{' '}
                        <span className="font-mono text-fg">{activeTab}</span>
                    </p>
                </div>
            </VariantSection>

            <VariantSection
                title="Structured card"
                description="Use `header`, `body`, and `footer` for richer tab panels. Disabled tabs cannot be selected."
            >
                <Tabs id="tabs-structured" tabs={structuredTabs} bordered />
            </VariantSection>

            <VariantSection
                title="Positions & variants"
                description="Tabs support bottom placement and a secondary colour variant."
            >
                <div className="space-y-8">
                    <div>
                        <p className="mb-3 text-sm text-fg-muted">Bottom</p>
                        <Tabs
                            tabPosition="bottom"
                            id="tabs-position-bottom"
                            tabs={basicTabs}
                        />
                    </div>
                    <div>
                        <p className="mb-3 text-sm text-fg-muted">
                            Secondary variant
                        </p>
                        <Tabs
                            variant="secondary"
                            id="tabs-variant-secondary"
                            tabs={basicTabs}
                        />
                    </div>
                </div>
            </VariantSection>

            <section className="border-t border-outline/20">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <header className="mb-5">
                        <h2 className="text-lg font-semibold text-fg">
                            API reference
                        </h2>
                        <p className="mt-1 text-sm text-fg-muted">
                            Public props exposed by{' '}
                            <span className="font-mono text-fg">Tabs</span>.
                        </p>
                    </header>
                    <PropsTable rows={TabsProps} />
                </div>
            </section>
        </div>
    );
}
