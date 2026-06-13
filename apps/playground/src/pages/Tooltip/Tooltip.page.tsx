import { Button, Tooltip } from '@dgithiomi/sbui-web';
import { VariantSection } from '@components/VariantSection';
import { PageHeader, PropsTable } from '@layouts/shared';
import { TooltipProps } from './Tooltip.props';

const placements = [
    { label: 'Top', placement: 'top' as const },
    { label: 'Bottom', placement: 'bottom' as const },
    { label: 'Left', placement: 'left' as const },
    { label: 'Right', placement: 'right' as const }
];

const variants = [
    { label: 'Info', variant: 'info' as const },
    { label: 'Success', variant: 'success' as const },
    { label: 'Warning', variant: 'warning' as const },
    { label: 'Error', variant: 'error' as const }
];

export function TooltipPage() {
    return (
        <div className="bg-canvas">
            <PageHeader
                category="atom"
                title="Tooltip"
                status="stable"
                description="Contextual hints for odds, market rules, or field-level help — wrap any trigger and control placement, trigger mode, and semantic variants."
            />

            <VariantSection
                title="Default"
                description="Hover the trigger to reveal the tooltip. This is the most common integration pattern."
            >
                <Tooltip
                    id="tooltip-default"
                    content="Kick-off is scheduled for 20:00 GMT."
                    placement="top"
                    pointerDirection="center"
                >
                    <Button
                        label="Match info"
                        variant="ghost"
                        id="tooltip-default-trigger"
                        onClick={() => undefined}
                    />
                </Tooltip>
            </VariantSection>

            <VariantSection
                title="Click trigger"
                description={'Use trigger="click" when the hint should stay open until the user clicks away.'}
            >
                <Tooltip
                    trigger="click"
                    id="tooltip-click"
                    placement="bottom"
                    pointerDirection="center"
                    content="Accumulator rules apply to this market."
                >
                    <Button
                        label="Market rules"
                        variant="secondary"
                        id="tooltip-click-trigger"
                        onClick={() => undefined}
                    />
                </Tooltip>
            </VariantSection>

            <VariantSection
                title="Placements"
                description="Position the panel on any side of the trigger."
            >
                <div className="flex flex-wrap gap-4">
                    {placements.map(({ label, placement }) => (
                        <Tooltip
                            key={placement}
                            id={`tooltip-placement-${placement}`}
                            placement={placement}
                            pointerDirection="center"
                            content={`Tooltip on ${label.toLowerCase()}`}
                        >
                            <Button
                                label={label}
                                variant="ghost"
                                id={`tooltip-placement-trigger-${placement}`}
                                onClick={() => undefined}
                            />
                        </Tooltip>
                    ))}
                </div>
            </VariantSection>

            <VariantSection
                title="Semantic variants"
                description="Map tooltip color to success, warning, error, or info states."
            >
                <div className="flex flex-wrap gap-4">
                    {variants.map(({ label, variant }) => (
                        <Tooltip
                            key={variant}
                            variant={variant}
                            id={`tooltip-variant-${variant}`}
                            pointerDirection="center"
                            content={`${label} feedback message`}
                        >
                            <Button
                                label={label}
                                variant="ghost"
                                id={`tooltip-variant-trigger-${variant}`}
                                onClick={() => undefined}
                            />
                        </Tooltip>
                    ))}
                </div>
            </VariantSection>

            <VariantSection
                title="Dismissible"
                description="Add `closeButton` for longer explanations the user can manually dismiss."
            >
                <Tooltip
                    closeButton
                    id="tooltip-close-button"
                    placement="right"
                    pointerDirection="center"
                    content="Cash-out is unavailable once the event has started."
                >
                    <Button
                        label="Cash out"
                        id="tooltip-close-button-trigger"
                        onClick={() => undefined}
                    />
                </Tooltip>
            </VariantSection>

            <section className="border-t border-outline/20">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <header className="mb-5">
                        <h2 className="text-lg font-semibold text-fg">
                            API reference
                        </h2>
                        <p className="mt-1 text-sm text-fg-muted">
                            Public props exposed by{' '}
                            <span className="font-mono text-fg">Tooltip</span>.
                        </p>
                    </header>
                    <PropsTable rows={TooltipProps} />
                </div>
            </section>
        </div>
    );
}
