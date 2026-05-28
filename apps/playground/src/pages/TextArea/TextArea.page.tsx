import { useState } from "react";
import { cn } from "@libs/utils";
import { PageHeader } from "@layouts/shared";
import { TextAreaProps } from "./TextArea.props";
import { PropsTable } from "@layouts/shared/PropsTable";
import { VariantSection } from "@components/VariantSection";
import { TextArea, type TextAreaStatus } from "@dgithiomi/sbui-web";

export function TextAreaPage() {
    const [defaultValue, setDefaultValue] = useState("");
    const [tooltipValue, setTooltipValue] = useState("");
    const [statusValue, setStatusValue] = useState("");
    const [showCountValue, setShowCountValue] = useState("");

    // STATUS
    const [status, setStatus] = useState<TextAreaStatus>("none");

    // CLASSES
    const buttonClasses =
        "w-24 rounded-md p-2 text-sm font-medium text-fg transition";

    return (
        <div className="bg-canvas">
            <PageHeader
                category="atom"
                title="TextArea"
                status="stable"
                description="A multi-line text input used wherever users need to enter free-form content — match previews, support tickets, customer notes."
            />

            <VariantSection
                title="Default"
                description="Bare-minimum usage with an id, label and placeholder."
            >
                <div className="max-w-lg">
                    <TextArea
                        value={defaultValue}
                        id="text-area-default"
                        onChange={(value) => setDefaultValue(value)}
                        placeholder="Jot down a few thoughts about tonight's fixture…"
                    />
                </div>
            </VariantSection>

            <VariantSection
                title="Tooltip"
                description="A TextArea with a tooltip."
            >
                <div>
                    <TextArea
                        value={tooltipValue}
                        id="text-area-with-tooltip"
                        tooltip="This is a tooltip"
                        onChange={(value) => setTooltipValue(value)}
                        placeholder="Jot down a few thoughts about tonight's fixture…"
                        tooltipOptions={{
                            trigger: "hover",
                            placement: "right",
                            pointerDirection: "center",
                            content: "Text Area Tooltip",
                            id: "text-area-default-tooltip",
                            className: "text-fg-inverse text-xs",
                        }}
                    />
                </div>
            </VariantSection>

            <VariantSection
                title="Status"
                description="A TextArea with status, error, warning, success, info, and none."
            >
                <div className="flex flex-row gap-4 justify-around items-center">
                    <TextArea
                        status={status}
                        className="flex-1"
                        value={statusValue}
                        id="text-area-with-status-error"
                        onChange={(value) => setStatusValue(value)}
                        placeholder="This is a text area with state"
                    />

                    <div className="flex-1 flex justify-center items-center gap-2">
                        <button
                            className={cn(
                                "!bg-surface hover:!bg-surface/90",
                                buttonClasses,
                            )}
                            onClick={() => setStatus("none")}
                        >
                            None
                        </button>
                        <button
                            className={cn(
                                "!bg-error-500 hover:!bg-error-500/90",
                                buttonClasses,
                            )}
                            onClick={() => setStatus("error")}
                        >
                            Error
                        </button>
                        <button
                            className={cn(
                                "!bg-warning-500 hover:!bg-warning-500/90",
                                buttonClasses,
                            )}
                            onClick={() => setStatus("warning")}
                        >
                            Warning
                        </button>
                    </div>
                </div>
            </VariantSection>

            <VariantSection
                title="Character Counter"
                description="A TextArea with a character counter and max length."
            >
                <div>
                    <TextArea
                        showCount={true}
                        maxLength={100}
                        value={showCountValue}
                        id="text-area-character-counter"
                        onChange={(value) => setShowCountValue(value)}
                        placeholder="This is a text area with a character counter"
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
                            Public props exposed by{" "}
                            <span className="font-mono text-fg">TextArea</span>.
                        </p>
                    </header>
                    <PropsTable rows={TextAreaProps} />
                </div>
            </section>
        </div>
    );
}
