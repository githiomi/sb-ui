import { useState } from "react";
import { TextArea } from "ui-web";
import { PageHeader } from "@layouts/shared";
import { VariantSection } from "@components/VariantSection";
import { PropsTable, type PropRow } from "@layouts/shared/PropsTable";

const PROPS: PropRow[] = [
    {
        name: "id",
        type: "string",
        required: true,
        description:
            "Wires the `<textarea>` to its `<label>` for accessibility.",
    },
    {
        name: "label",
        type: "string",
        required: true,
        description: "Visible label rendered above the textarea.",
    },
    {
        name: "placeholder",
        type: "string",
        required: true,
        description: "Placeholder shown when the textarea is empty.",
    },
    {
        name: "className",
        type: "string",
        description:
            "Optional class names appended to the outer wrapper. Useful for spacing or surface overrides.",
    },
];

export function TextAreaPage() {
    const [controlledValue, setControlledValue] = useState(
        "Manchester United vs Arsenal — write your match preview here…",
    );

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
                        id="text-area-default"
                        label="Match notes"
                        placeholder="Jot down a few thoughts about tonight's fixture…"
                    />
                </div>
            </VariantSection>

            <VariantSection
                title="On a dark surface"
                description="Drop the component onto an elevated dark surface to verify legibility in the dark theme."
            >
                <div className="rounded-xl bg-primary-900 p-6">
                    <TextArea
                        id="text-area-dark"
                        label="Punter feedback"
                        placeholder="Tell us what felt off about the last bet…"
                        className="bg-primary-800"
                    />
                </div>
            </VariantSection>

            <VariantSection
                title="Side by side"
                description="Two textareas in a responsive grid — used inside forms with multiple long-form fields."
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    <TextArea
                        id="text-area-pros"
                        label="What went well"
                        placeholder="Highlight the wins from this campaign…"
                    />
                    <TextArea
                        id="text-area-cons"
                        label="What to improve"
                        placeholder="List the friction points or bugs you noticed…"
                    />
                </div>
            </VariantSection>

            <VariantSection
                title="Controlled (with character counter)"
                description="A higher-level form pattern — wrap the atom inside your own controlled component."
            >
                <div className="max-w-lg">
                    <TextArea
                        id="text-area-controlled"
                        label="Match preview"
                        placeholder="Set the scene for tomorrow's derby…"
                    />
                    <div className="mt-3 flex items-center justify-between text-xs text-fg-subtle">
                        <span>
                            Live value mirrored below via a local state hook for
                            demo.
                        </span>
                        <span className="font-mono">
                            {controlledValue.length} chars
                        </span>
                    </div>
                    <textarea
                        value={controlledValue}
                        onChange={(event) =>
                            setControlledValue(event.target.value)
                        }
                        rows={3}
                        className="mt-3 w-full rounded-md border border-outline/20 bg-surface p-3 font-mono text-xs text-fg-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    />
                </div>
            </VariantSection>

            <VariantSection
                title="In a form layout"
                description="Composed inside a card with surrounding form chrome to show typical real-world usage."
            >
                <form
                    onSubmit={(event) => event.preventDefault()}
                    className="mx-auto max-w-xl rounded-2xl border border-outline/20 bg-surface p-6 shadow-soft"
                >
                    <header className="mb-5">
                        <h3 className="text-base font-semibold text-fg">
                            Submit a feature request
                        </h3>
                        <p className="mt-1 text-sm text-fg-muted">
                            Tell the design system team what you wish a
                            component could do.
                        </p>
                    </header>

                    <div className="flex flex-col gap-4">
                        <div>
                            <label
                                htmlFor="text-area-form-title"
                                className="mb-1 block text-sm font-medium text-fg"
                            >
                                Title
                            </label>
                            <input
                                id="text-area-form-title"
                                type="text"
                                placeholder="Quick summary"
                                className="h-10 w-full rounded-md border border-outline/20 bg-canvas px-3 text-sm text-fg placeholder:text-fg-subtle focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                            />
                        </div>

                        <TextArea
                            id="text-area-form-body"
                            label="Describe the problem"
                            placeholder="What are you trying to accomplish, and what's currently in the way?"
                        />

                        <div className="mt-2 flex items-center justify-end gap-2">
                            <button
                                type="button"
                                className="h-10 rounded-lg px-4 text-sm font-medium text-fg-muted transition hover:bg-neutral-300 hover:text-fg"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="h-10 rounded-lg bg-accent-500 px-4 text-sm font-semibold text-primary-700 transition hover:bg-accent-400"
                            >
                                Send request
                            </button>
                        </div>
                    </div>
                </form>
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
                    <PropsTable rows={PROPS} />
                </div>
            </section>
        </div>
    );
}
