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
                <div>
                    <ProgressBar id="progress-bar-default" value={50} />
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
