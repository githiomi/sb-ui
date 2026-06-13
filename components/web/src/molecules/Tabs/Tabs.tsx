import React, { forwardRef, type Ref, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { cn } from '@uniicy/libs';
import { Card } from '@atoms/Card';
import { Button } from '@atoms/Button';
import { TabsProps, TabsRef } from './Tabs.types';

export const Tabs = forwardRef<TabsRef, TabsProps>((props, ref) => {
    const {
        id,
        className,
        tabs,
        activeTab,
        onTabChange,
        onTabStatusChange,
        tabPosition = 'top',
        variant = 'primary',
        padding = 'small',
        bordered = false,
        shadow = 'none',
        tabLabelStyle = ''
    } = props;

    const [activeIndexInternal, setActiveIndexInternal] = useState(activeTab ?? 0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState<number>(0);

    const isControlled = typeof activeTab === 'number';
    const activeIndex = isControlled ? activeTab! : activeIndexInternal;

    useEffect(() => {
        if (isControlled && activeTab !== activeIndexInternal) {
            setActiveIndexInternal(activeTab!);
        }
    }, [activeTab, activeIndexInternal, isControlled]);

    useEffect(() => {
        if (containerRef.current && (tabPosition === 'left' || tabPosition === 'right')) {
            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setContainerHeight(entry.contentRect.height);
                }
            });
            observer.observe(containerRef.current);
            return () => observer.disconnect();
        }
    }, [tabPosition]);

    useImperativeHandle(ref, () => ({
        scrollToActiveTab() {
            containerRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }));

    if (!tabs || tabs.length === 0) return null;

    const handleTabClick = (newIndex: number, disabled?: boolean) => {
        if (disabled) return;
        const oldIndex = activeIndex;
        if (!isControlled) {
            setActiveIndexInternal(newIndex);
            onTabStatusChange?.(newIndex, oldIndex);
        }
        onTabChange?.(newIndex);
    };

    const activeButtonVariant = variant;
    const inactiveButtonVariant = variant === 'primary' ? 'cyan' : 'primary';

    const renderButton = (tab: (typeof tabs)[number], i: number) => {
        const isActive = i === activeIndex;
        const labelNode = <span className={tab.disabled ? 'opacity-50' : ''}>{tab.label}</span>;

        const disabledClassNames = `!cursor-not-allowed hover:cursor-not-allowed opacity-60`;

        const style =
            (tabPosition === 'left' || tabPosition === 'right') && containerHeight
                ? { height: containerHeight / tabs.length }
                : undefined;
        return (
            <div
                key={tab.label}
                className={tabPosition === 'left' || tabPosition === 'right' ? '' : 'h-full flex-1'}
                style={style}
            >
                <Button
                    aria-label={tab.label}
                    aria-expanded={isActive}
                    ref={tab.buttonRef as Ref<HTMLButtonElement>}
                    label={labelNode}
                    onClick={() => handleTabClick(i, tab.disabled)}
                    variant={isActive ? activeButtonVariant : inactiveButtonVariant}
                    size="medium"
                    className={`h-full w-full font-semibold uppercase ${
                        tab.disabled ? disabledClassNames : ''
                    } ${tabLabelStyle}`}
                    rounded={false}
                />
            </div>
        );
    };

    const cardBaseClass = variant === 'primary' ? '' : '';
    const cardClassName =
        tabPosition === 'left' || tabPosition === 'right' ? `${cardBaseClass} h-full` : cardBaseClass;

    const renderCardContent = () => {
        const activeTabItem = tabs[activeIndex];
        if (activeTabItem.header || activeTabItem.body || activeTabItem.footer) {
            return (
                <div ref={activeTabItem.cardRef as React.Ref<HTMLDivElement>} className="h-full w-full">
                    {activeTabItem.header && (
                        <>
                            <div className="tab-card-header mb-4">{activeTabItem.header}</div>
                            <div className="border-b"></div>
                        </>
                    )}
                    <div className={cn(`tab-card-body ${padding}`, activeTabItem.bodyClassName)}>
                        {activeTabItem.body ?? activeTabItem.content}
                    </div>
                    {activeTabItem.footer && (
                        <>
                            <div className="border-t"></div>
                            <div className="tab-card-footer mt-4">{activeTabItem.footer}</div>
                        </>
                    )}
                </div>
            );
        }
        return (
            <div ref={activeTabItem.cardRef as React.Ref<HTMLDivElement>}>{activeTabItem.content}</div>
        );
    };

    let container;
    if (tabPosition === 'left' || tabPosition === 'right') {
        return (
            <div ref={containerRef} id={id} className={`flex h-full w-full ${className ?? ''}`}>
                {tabPosition === 'left' && (
                    <div className="flex h-full w-auto flex-col">{tabs.map(renderButton)}</div>
                )}
                <div className="h-full flex-1">
                    <Card
                        id={`tab-content-${activeIndex}`}
                        width="100%"
                        height="100%"
                        shadow={shadow}
                        padding={padding}
                        bordered={bordered}
                        className={cn(cardClassName)}
                    >
                        {renderCardContent()}
                    </Card>
                </div>
                {tabPosition === 'right' && (
                    <div className="flex h-full w-auto flex-col">{tabs.map(renderButton)}</div>
                )}
            </div>
        );
    } else {
        const buttonsContainer = <div className="flex w-full">{tabs.map(renderButton)}</div>;
        const cardContainer = (
            <Card
                id={`tab-content-${activeIndex}`}
                width="100%"
                height="auto"
                shadow={shadow}
                padding={padding}
                bordered={bordered}
                className={cardBaseClass}
            >
                {renderCardContent()}
            </Card>
        );
        container = (
            <div ref={containerRef} id={id} className={`flex h-full w-full flex-col ${className ?? ''}`}>
                {tabPosition === 'top' ? (
                    <>
                        {buttonsContainer}
                        {cardContainer}
                    </>
                ) : (
                    <>
                        {cardContainer}
                        {buttonsContainer}
                    </>
                )}
            </div>
        );
    }

    return container;
});

Tabs.displayName = 'Tabs';