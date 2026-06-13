import { ChainedStatus } from '@dgithiomi/sbui-web';
import { VariantSection } from '@components/VariantSection';
import { PageHeader, PropsTable } from '@layouts/shared';
import { ChainedStatusProps } from './ChainedStatus.props';

const sampleItems = [
    { label: '1', status: 'S' as const },
    { label: 'X', status: 'U' as const },
    { label: '2', status: 'N' as const }
];

export function ChainedStatusPage() {
    return (
        <div className="bg-canvas">
            <PageHeader
                category="atom"
                title="ChainedStatus"
                status="stable"
                description="Visualise a sequence of match or selection states — each node is colour-coded (Not started, Undecided, Settled) and connected in a chain."
            />

            <VariantSection
                title="Default"
                description="Three nodes with square markers and a left-pointing direction chevron."
            >
                <ChainedStatus
                    id="chained-status-default"
                    items={sampleItems}
                />
            </VariantSection>

            <VariantSection
                title="Sizes"
                description="Scale the chain for compact tables or prominent headers."
            >
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                        <p className="w-24 shrink-0 text-sm text-fg-muted">
                            Small
                        </p>
                        <ChainedStatus
                            size="small"
                            id="chained-status-size-small"
                            items={sampleItems}
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="w-24 shrink-0 text-sm text-fg-muted">
                            Default
                        </p>
                        <ChainedStatus
                            size="default"
                            id="chained-status-size-default"
                            items={sampleItems}
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="w-24 shrink-0 text-sm text-fg-muted">
                            Large
                        </p>
                        <ChainedStatus
                            size="large"
                            id="chained-status-size-large"
                            items={sampleItems}
                        />
                    </div>
                </div>
            </VariantSection>

            <VariantSection
                title="Shape"
                description="Switch between square and circular node markers."
            >
                <div className="flex flex-wrap gap-8">
                    <ChainedStatus
                        variant="square"
                        id="chained-status-variant-square"
                        items={sampleItems}
                    />
                    <ChainedStatus
                        variant="circle"
                        id="chained-status-variant-circle"
                        items={sampleItems}
                    />
                </div>
            </VariantSection>

            <VariantSection
                title="Direction"
                description="Control the chevron that hints at flow direction along the chain."
            >
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                        <p className="w-24 shrink-0 text-sm text-fg-muted">
                            Left
                        </p>
                        <ChainedStatus
                            direction="left"
                            id="chained-status-direction-left"
                            items={sampleItems}
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="w-24 shrink-0 text-sm text-fg-muted">
                            Right
                        </p>
                        <ChainedStatus
                            direction="right"
                            id="chained-status-direction-right"
                            items={sampleItems}
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="w-24 shrink-0 text-sm text-fg-muted">
                            None
                        </p>
                        <ChainedStatus
                            direction="none"
                            id="chained-status-direction-none"
                            items={sampleItems}
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
                            <span className="font-mono text-fg">
                                ChainedStatus
                            </span>
                            .
                        </p>
                    </header>
                    <PropsTable rows={ChainedStatusProps} />
                </div>
            </section>
        </div>
    );
}
