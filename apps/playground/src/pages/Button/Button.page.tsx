import { Button } from '@dgithiomi/sbui-web';
import { SportsBetting } from '@uniicy/icons/web';
import { VariantSection } from '@components/VariantSection';
import { PageHeader, PropsTable } from '@layouts/shared';
import { ButtonProps } from './Button.props';

const variants = [
    { label: 'Primary', variant: 'primary' as const },
    { label: 'Secondary', variant: 'secondary' as const },
    { label: 'Ghost', variant: 'ghost' as const },
    { label: 'Ghost dark', variant: 'ghostDark' as const },
    { label: 'Cyan', variant: 'cyan' as const },
    { label: 'With shadow', variant: 'withShadow' as const }
];

export function ButtonPage() {
    return (
        <div className="bg-canvas">
            <PageHeader
                category="atom"
                title="Button"
                status="stable"
                description="Primary action control for forms, toolbars, and betting workflows — place bets, confirm selections, or trigger secondary actions."
            />

            <VariantSection
                title="Default"
                description="Bare-minimum usage with a label and click handler."
            >
                <Button
                    label="Place bet"
                    id="button-default"
                    onClick={() => undefined}
                />
            </VariantSection>

            <VariantSection
                title="Variants"
                description="Each variant maps to a design-token-backed surface style."
            >
                <div className="flex flex-wrap gap-3">
                    {variants.map(({ label, variant }) => (
                        <Button
                            key={variant}
                            label={label}
                            variant={variant}
                            id={`button-variant-${variant}`}
                            onClick={() => undefined}
                        />
                    ))}
                </div>
            </VariantSection>

            <VariantSection
                title="Sizes"
                description="Small, medium, and large scale options for dense or prominent layouts."
            >
                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        size="small"
                        label="Small"
                        id="button-size-small"
                        onClick={() => undefined}
                    />
                    <Button
                        size="medium"
                        label="Medium"
                        id="button-size-medium"
                        onClick={() => undefined}
                    />
                    <Button
                        size="large"
                        label="Large"
                        id="button-size-large"
                        onClick={() => undefined}
                    />
                </div>
            </VariantSection>

            <VariantSection
                title="With icon"
                description="Pass any React node as `icon`; SVG icons from `@uniicy/icons` work out of the box."
            >
                <Button
                    label="Sports betting"
                    icon={<SportsBetting />}
                    id="button-with-icon"
                    onClick={() => undefined}
                />
            </VariantSection>

            <VariantSection
                title="Loading & disabled"
                description="Use `loading` for async actions and `disabled` to block interaction."
            >
                <div className="flex flex-wrap gap-3">
                    <Button
                        loading
                        label="Placing bet…"
                        id="button-loading"
                        onClick={() => undefined}
                    />
                    <Button
                        disabled
                        label="Unavailable"
                        id="button-disabled"
                        onClick={() => undefined}
                    />
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
                            <span className="font-mono text-fg">Button</span>.
                        </p>
                    </header>
                    <PropsTable rows={ButtonProps} />
                </div>
            </section>
        </div>
    );
}
