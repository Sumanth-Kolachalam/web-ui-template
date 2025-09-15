// LandingContext.tsx
import React, { useMemo } from 'react';
import type { Props } from '@shared/types';
import { LandingContext } from '@shared/utils';

const LandingProvider: React.FC<Props> = ({ children, vmenu }) => {
    const value = useMemo(() => {
        return { vmenu };
    }, [vmenu]);

    return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>;
};

export { LandingProvider };
