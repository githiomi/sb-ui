import { ProgressBar } from "sbui-web";
import { ProgressBarProps } from "./ProgressBar.props";
import { PageHeader, PropsTable } from "@layouts/shared";
import { VariantSection } from "@components/VariantSection";

export function ProgressBarPage() {
    return (
        <div className="bg-canvas">
            <PageHeader
                status="planned"
                category="atom"
                title="ProgressBar"
                description="A progress bar component."
            />

            <VariantSection
                title="Default"
                description="Bare-minimum usage with an id, label and placeholder."
            >
                <div className="w-full flex flex-col space-y-4">
                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Primary</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={25}
                                color="primary"
                                id="progress-bar-default-primary"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Secondary</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={50}
                                color="secondary"
                                id="progress-bar-default-secondary"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Tertiary</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={75}
                                color="tertiary"
                                id="progress-bar-default-tertiary"
                            />
                        </div>
                    </div>
                </div>
            </VariantSection>

            <VariantSection
                title="Size"
                description="Different sizes of the progress bar."
            >
                <div className="w-full flex flex-col space-y-4">
                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Small</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={25}
                                size="small"
                                id="progress-bar-size-small"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Medium</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={50}
                                size="medium"
                                id="progress-bar-size-medium"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Large</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={75}
                                size="large"
                                id="progress-bar-size-large"
                            />
                        </div>
                    </div>
                </div>
            </VariantSection>

            <VariantSection
                title="Indeterminate"
                description="Indeterminate progress bar that shows a loading state."
            >
                <div className="w-full flex flex-col space-y-4">
                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Horizontal</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                indeterminate
                                color="secondary"
                                id="progress-bar-indeterminate-horizontal"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Vertical</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                indeterminate
                                color="tertiary"
                                direction="vertical"
                                id="progress-bar-indeterminate-vertical"
                            />
                        </div>
                    </div>
                </div>
            </VariantSection>

            <VariantSection
                title="Variants"
                description="Different variants of the progress bar."
            >
                <div className="w-full flex flex-col space-y-4">
                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Dotted</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={25}
                                variant="dotted"
                                id="progress-bar-dotted-variant"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Default</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={50}
                                id="progress-bar-default-variant"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Dashed</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={75}
                                variant="dashed"
                                id="progress-bar-variant-dashed"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Striped</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={100}
                                striped={true}
                                id="progress-bar-variant-striped"
                            />
                        </div>
                    </div>
                </div>
            </VariantSection>

            <VariantSection
                title="Labeled"
                description="Labeled progress bar that shows a loading state."
            >
                <div className="w-full flex flex-col space-y-4">
                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Inside</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={25}
                                showPercentage
                                labelPosition="inside"
                                id="progress-bar-labeled-inside"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6">
                        <p className="w-1/4 shrink-0 text-sm">Outside</p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={50}
                                showPercentage
                                labelPosition="outside"
                                id="progress-bar-labeled-outside"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center gap-6 pt-4">
                        <p className="w-1/4 shrink-0 text-sm">
                            Max &amp; Min Labels
                        </p>
                        <div className="w-3/4 min-w-0">
                            <ProgressBar
                                value={75}
                                showPercentage
                                maxLabel="Full"
                                minLabel="Empty"
                                id="progress-bar-labeled-max-min"
                            />
                        </div>
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
                            Public props exposed by{" "}
                            <span className="font-mono text-fg">
                                ProgressBar
                            </span>
                            .
                        </p>
                    </header>
                    <PropsTable rows={ProgressBarProps} />
                </div>
            </section>
        </div>
    );
}
