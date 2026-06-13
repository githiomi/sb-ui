import { Table, type ColumnProps } from '@dgithiomi/sbui-web';
import { VariantSection } from '@components/VariantSection';
import { PageHeader, PropsTable } from '@layouts/shared';
import { TableProps } from './Table.props';

const columns: ColumnProps[] = [
    { key: 'event', title: 'Event', dataIndex: 'event' },
    { key: 'market', title: 'Market', dataIndex: 'market' },
    { key: 'selection', title: 'Selection', dataIndex: 'selection' },
    {
        key: 'odds',
        title: 'Odds',
        dataIndex: 'odds',
        render: (value) => (
            <span className="font-mono text-fg">{value}</span>
        )
    },
    {
        key: 'stake',
        title: 'Stake',
        dataIndex: 'stake',
        render: (value) => (
            <span className="font-mono text-fg">£{value}</span>
        )
    }
];

const betSlipData = [
    {
        id: '1',
        event: 'Arsenal vs Chelsea',
        market: 'Match result',
        selection: 'Arsenal',
        odds: '2.10',
        stake: '10.00'
    },
    {
        id: '2',
        event: 'Liverpool vs Spurs',
        market: 'Both teams to score',
        selection: 'Yes',
        odds: '1.72',
        stake: '5.00'
    },
    {
        id: '3',
        event: 'Man City vs Newcastle',
        market: 'Total goals',
        selection: 'Over 2.5',
        odds: '1.95',
        stake: '20.00'
    },
    {
        id: '4',
        event: 'West Ham vs Brighton',
        market: 'Anytime scorer',
        selection: 'Bowen',
        odds: '3.40',
        stake: '2.50'
    }
];

export function TablePage() {
    return (
        <div className="bg-canvas">
            <PageHeader
                category="organism"
                title="Table"
                status="stable"
                description="Data-dense layouts for bet slips, market lists, and account history — supports variants, pagination, row hover, and selection."
            />

            <VariantSection
                title="Default"
                description="Define `columns` and `data` to render a read-only table."
            >
                <Table
                    hover
                    id="table-default"
                    columns={columns}
                    data={betSlipData}
                    caption="Open bet slip"
                />
            </VariantSection>

            <VariantSection
                title="Striped"
                description="Alternate row backgrounds improve scanability on long lists."
            >
                <Table
                    hover
                    variant="striped"
                    id="table-striped"
                    columns={columns}
                    data={betSlipData}
                />
            </VariantSection>

            <VariantSection
                title="Pagination"
                description="Enable `pagination` and tune `pageSize` for large datasets."
            >
                <Table
                    hover
                    pagination
                    pageSize={2}
                    id="table-pagination"
                    columns={columns}
                    data={betSlipData}
                />
            </VariantSection>

            <VariantSection
                title="Selectable rows"
                description="Set `selectable` to let users pick rows — useful for bulk actions on bet history."
            >
                <Table
                    hover
                    selectable
                    selectMode="single"
                    id="table-selectable"
                    columns={columns}
                    data={betSlipData}
                />
            </VariantSection>

            <section className="border-t border-outline/20">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <header className="mb-5">
                        <h2 className="text-lg font-semibold text-fg">
                            API reference
                        </h2>
                        <p className="mt-1 text-sm text-fg-muted">
                            Public props exposed by{' '}
                            <span className="font-mono text-fg">Table</span>.
                        </p>
                    </header>
                    <PropsTable rows={TableProps} />
                </div>
            </section>
        </div>
    );
}
