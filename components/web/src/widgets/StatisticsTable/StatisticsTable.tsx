import { cn } from '@uniicy/libs';
import React, { useEffect, useState } from 'react';
import SkeletonLoader from './StatisticsTable.loader';
import { ColumnProps as TableColumn, Table } from '@organisms/Table';
import { FilterOptions, LeagueStatisticsProps } from './StatisticsTable.types';
import { ChainedStatus, ChainedStatusItem, Status } from '@atoms/ChainedStatus';

export const StatisticsTable: React.FC<LeagueStatisticsProps> = ({
    data,
    showChainedStatus = false,
    skeletonLoaderRowCount = 18,
    error = 'There was an unexpected error retrieving data for this table',
}: LeagueStatisticsProps) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [activeFilter, setActiveFilter] = useState<string>('Ligatabelle');

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [activeFilter]);

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        if (window.innerWidth <= 768) setIsMobile(true);
        else setIsMobile(false);
    };

    const handleFilterChange = (value: string) => {
        setActiveFilter(value);
    };

    const headerTemplate = (header: string, centerText: boolean = true): React.ReactNode => {
        const headerClasses = cn('px-2 py-2 w-full', {
            'text-center': centerText && !isMobile,
            'text-left': !centerText,
        });
        return (
            <div className="bg-tertiary w-full" aria-label={`Table header: ${header}`}>
                <p className={headerClasses}>{header}</p>
            </div>
        );
    };

    const renderChainStatus = (formString: string, index: number): React.ReactNode => {
        const chainedItems: ChainedStatusItem[] = formString.split('-').map((form) => {
            return {
                label: form,
                status: form as Status,
            };
        });

        return (
            <ChainedStatus
                id={`${index}-chained-status`}
                items={chainedItems}
                direction="left"
                size="small"
                className="mx-auto w-fit"
                aria-label={`Form status: ${formString}`}
            />
        );
    };

    const getTableData = (columns: string[], isFormTable: boolean = false): TableColumn[] => {
        return columns.map((column, index) => {
            return {
                key: column,
                title:
                    column === 'id' || column === 'Team' || (isFormTable && column === 'Form') ? '' : column,
                dataIndex: column,
                render: (value) =>
                    column === 'Form' && showChainedStatus ? (
                        renderChainStatus(value as string, index)
                    ) : (
                        <span className={cn({ 'flex justify-end pr-0.5': column === 'id' })}>{value}</span>
                    ),
                className: cn('truncate', {
                    '!p-0 w-[5%]': column === 'id',
                    '!p-0 w-[3%]': column === 'id' && isFormTable,
                }),
            } as TableColumn;
        });
    };

    const Ligatabelle = (): React.ReactNode => {
        const columns: string[] = ['id', 'Team', 'Sp', 'G', 'U', 'V', 'Tore', 'Pkt'];
        const columnData = getTableData(columns);

        const excludeIn = ['Heim', 'Gast'];
        const classes = cn('ligatabelle', {
            hidden: excludeIn.includes(activeFilter),
        });

        return (
            <div className={classes} role="region" aria-label="League table" aria-busy={isLoading}>
                {isLoading ? (
                    <SkeletonLoader
                        rows={skeletonLoaderRowCount}
                        aria-label="Loading league table"
                    />
                ) : (
                    <Table
                        id="Ligatabelle"
                        data-testid="Ligatabelle"
                        variant="striped"
                        caption={() => headerTemplate('Bundesliga 21/22', false)}
                        columns={columnData}
                        data={data}
                        pageSize={20}
                        emptyMessage={error}
                        aria-label="League standings table"
                    />
                )}
            </div>
        );
    };

    const HeimTable = (): React.ReactNode => {
        const columnData = getTableData(['G', 'U', 'V']);

        const excludeIn = ['Gast'];
        const classes = cn('heim', {
            hidden: excludeIn.includes(activeFilter),
            heim_ligatabelle: activeFilter == 'Ligatabelle',
        });

        return (
            <div className={classes} role="region" aria-label="Home statistics" aria-busy={isLoading}>
                {isLoading ? (
                    <SkeletonLoader
                        columns={3}
                        rows={skeletonLoaderRowCount}
                        aria-label="Loading home statistics"
                    />
                ) : (
                    <Table
                        id="heim_table"
                        data-testid="heim_table"
                        variant="striped"
                        caption={() => headerTemplate('Heim')}
                        columns={columnData}
                        data={data}
                        pageSize={20}
                        emptyMessage={error}
                        aria-label="Home matches statistics"
                    />
                )}
            </div>
        );
    };

    const GastTable = (): React.ReactNode => {
        const columnData = getTableData(['G', 'U', 'V']);

        const excludeIn = ['Heim'];
        const classes = cn('gast', {
            hidden: excludeIn.includes(activeFilter),
            gast_ligatabelle: activeFilter == 'Ligatabelle',
        });

        return (
            <div className={classes} role="region" aria-label="Away statistics" aria-busy={isLoading}>
                {isLoading ? (
                    <SkeletonLoader
                        columns={3}
                        rows={skeletonLoaderRowCount}
                        aria-label="Loading away statistics"
                    />
                ) : (
                    <Table
                        id="gast_table"
                        data-testid="gast_table"
                        variant="striped"
                        caption={() => headerTemplate('Gast')}
                        columns={columnData}
                        data={data}
                        pageSize={20}
                        emptyMessage={error}
                        aria-label="Away matches statistics"
                    />
                )}
            </div>
        );
    };

    const FormTable = (): React.ReactNode => {
        const columns: string[] = ['id', 'Team', 'Form', 'Sp', 'G', 'U', 'V', 'Tore', 'Pkt'];
        const columnData = getTableData(columns, true);

        return (
            <div className="w-full" role="region" aria-label="Form table" aria-busy={isLoading}>
                {isLoading ? (
                    <SkeletonLoader rows={skeletonLoaderRowCount} aria-label="Loading form table" />
                ) : (
                    <Table
                        id="Formtabelle"
                        data-testid="Formtabelle"
                        data={data}
                        pageSize={20}
                        variant="striped"
                        columns={columnData}
                        caption={() => headerTemplate('Bundesliga 21/22', false)}
                        emptyMessage={error}
                        aria-label="Team form statistics"
                    />
                )}
            </div>
        );
    };

    const DesktopLayout = (): React.ReactNode => {
        return (
            <div role="region" aria-label="Desktop league statistics view" aria-live="polite">
                {/* Table Switchers */}
                <div
                    className="my-2 flex flex-row gap-2"
                    role="toolbar"
                    aria-label="Table view options"
                    aria-controls="statistics_table"
                >
                    {FilterOptions.map((filterOption) => (
                        <Button
                            role="button"
                            key={filterOption}
                            label={filterOption}
                            onClick={() => handleFilterChange(filterOption)}
                            variant={filterOption === activeFilter ? 'primary' : 'cyan'}
                            aria-pressed={filterOption === activeFilter}
                            aria-label={`Switch to ${filterOption} view`}
                            aria-current={filterOption === activeFilter ? 'true' : undefined}
                        />
                    ))}
                </div>

                {/* Toggle Tables */}
                {activeFilter === 'Formtabelle' ? (
                    <div className="mt-4">
                        <FormTable />
                    </div>
                ) : (
                    <div
                        id="statistics_table"
                        className="statistiken"
                        role="region"
                        aria-label="League statistics tables"
                    >
                        <Ligatabelle />
                        <HeimTable />
                        <GastTable />
                    </div>
                )}
            </div>
        );
    };

    const MobileLayout = (): React.ReactNode => {
        const mobileTabs: Tab[] = [
            {
                label: 'Ligatabelle',
                body: <Ligatabelle />,
            },
            {
                label: 'Heim',
                body: <HeimTable />,
            },
            {
                label: 'Gast',
                body: <GastTable />,
            },
            {
                label: 'Formtabelle',
                body: <FormTable />,
            },
        ];

        const handleTabChange = (index: number) => {
            setActiveFilter(FilterOptions[index]);
        };

        return (
            <Tabs
                id="league_statistics_tabs"
                data-testid="league_statistics_tabs"
                tabs={mobileTabs}
                className="mt-2"
                activeTab={FilterOptions.indexOf(activeFilter)}
                padding="none"
                shadow="large"
                onTabChange={(index) => handleTabChange(index)}
                aria-label="League statistics tabs"
            />
        );
    };

    return (
        <section
            id="league_statistics"
            className="mb-4"
            role="region"
            aria-label="League statistics"
            aria-live="polite"
        >
            <h5 className="px-2 py-1 text-2xl font-semibold uppercase" role="heading" aria-level={2}>
                STATISTIKEN
            </h5>

            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </section>
    );
}