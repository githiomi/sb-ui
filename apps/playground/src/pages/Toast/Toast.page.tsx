import { Button, useToast } from '@dgithiomi/sbui-web';
import { VariantSection } from '@components/VariantSection';
import { PageHeader, PropsTable } from '@layouts/shared';
import { ToastProps, useToastProps } from './Toast.props';

const toastDemos = [
    {
        label: 'Success',
        variant: 'success' as const,
        title: 'Bet placed',
        message: 'Your single bet on Arsenal to win has been accepted.'
    },
    {
        label: 'Error',
        variant: 'error' as const,
        title: 'Bet rejected',
        message: 'Insufficient balance to place this wager.'
    },
    {
        label: 'Warning',
        variant: 'warning' as const,
        title: 'Odds changed',
        message: 'Market odds moved since you opened the bet slip.'
    },
    {
        label: 'Info',
        variant: 'info' as const,
        title: 'Cash out',
        message: 'Cash-out value updates every 5 seconds during live play.'
    }
];

export function ToastPage() {
    const { showToast } = useToast();

    return (
        <div className="bg-canvas">
            <PageHeader
                category="molecule"
                title="Toast"
                status="stable"
                description="Transient feedback for bet placement, errors, and system messages. Wrap your app in `SbUiProvider` (or `ToastProvider`) and call `showToast` from `useToast()`."
            />

            <VariantSection
                title="Triggering toasts"
                description="Click a button to fire a toast. Notifications stack in the bottom-right corner and auto-dismiss."
            >
                <div className="flex flex-wrap gap-3">
                    {toastDemos.map(
                        ({ label, variant, title, message }) => (
                            <Button
                                key={variant}
                                label={label}
                                variant="ghost"
                                id={`toast-trigger-${variant}`}
                                onClick={() =>
                                    showToast({ variant, title, message })
                                }
                            />
                        )
                    )}
                </div>
            </VariantSection>

            <VariantSection
                title="Setup"
                description="The playground already wraps the app in `SbUiProvider`, which includes `ToastProvider` by default."
            >
                <pre className="overflow-x-auto rounded-xl border border-outline/20 bg-surface p-4 text-sm text-fg-muted">
                    {`import { SbUiProvider, useToast } from "@dgithiomi/sbui-web";

// App root
<SbUiProvider>
  <App />
</SbUiProvider>

// Any child component
const { showToast } = useToast();
showToast({
  variant: "success",
  title: "Bet placed",
  message: "Your wager was accepted.",
});`}
                </pre>
            </VariantSection>

            <section className="border-t border-outline/20">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <header className="mb-5">
                        <h2 className="text-lg font-semibold text-fg">
                            API reference
                        </h2>
                        <p className="mt-1 text-sm text-fg-muted">
                            Props accepted by{' '}
                            <span className="font-mono text-fg">showToast</span>{' '}
                            and the underlying{' '}
                            <span className="font-mono text-fg">Toast</span>{' '}
                            component.
                        </p>
                    </header>
                    <PropsTable rows={ToastProps} />
                    <div className="mt-8">
                        <h3 className="mb-3 text-sm font-semibold text-fg">
                            useToast()
                        </h3>
                        <PropsTable rows={useToastProps} />
                    </div>
                </div>
            </section>
        </div>
    );
}
