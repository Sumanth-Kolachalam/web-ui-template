import React, { useMemo } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import type { SuspenseFallbackProps } from '@shared/types';

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ size = '3rem' }) => {

    const spinnerStyle = useMemo(() => {return { width: size, height: size }}, [size]);

    return (
        <div className="flex align-items-center justify-content-center h-full w-full">
            <ProgressSpinner
                style={spinnerStyle}
                strokeWidth="8"
                animationDuration=".5s"
            />
        </div>
    );
};


export { SuspenseFallback };
