import React from 'react';
import { StatisticsSkeletonLoaderProps } from './StatisticsTable.types';

const StatisticsSkeletonLoader: React.FC<StatisticsSkeletonLoaderProps> = ({ rows, columns }) => {
    if (columns) {
        return (
            <div className="bg-primary-700 w-full">
                <div className="bg-primary-400 h-10 w-full animate-pulse" />
                <div className="space-y-1">
                    {[...Array(rows)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-primary-700 mt-1 flex animate-pulse items-center justify-between gap-2 px-4 py-2"
                        >
                            {[...Array(columns)].map((_, index) => (
                                <div key={index} className="bg-primary-900 h-4 w-8 rounded"></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-primary-900 w-full">
            <div className="bg-primary-400 h-10 w-full animate-pulse" />
            <div className="space-y-1">
                {[...Array(rows)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-primary-700 mt-1 flex animate-pulse items-center justify-between gap-2 px-4 py-2"
                    >
                        <div className="bg-primary-900 h-4 w-10 rounded"></div>
                        <div className="bg-primary-900 h-4 w-40 rounded"></div>
                        <div className="bg-primary-900 h-4 w-20 rounded"></div>
                        <div className="bg-primary-900 h-4 w-10 rounded"></div>
                        <div className="bg-primary-900 h-4 w-10 rounded"></div>
                        <div className="bg-primary-900 h-4 w-16 rounded"></div>
                        <div className="bg-primary-900 h-4 w-10 rounded"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatisticsSkeletonLoader;