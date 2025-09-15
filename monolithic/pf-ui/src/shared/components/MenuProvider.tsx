import { useMemo, useState } from 'react';
import type { ChildContainerProps } from '@shared/types';
import { MenuContext } from '@shared/utils';

export function MenuProvider({ children }: ChildContainerProps) {
    const [activeMenu, setActiveMenu] = useState('');

    const value = useMemo(() => {
        return {
            activeMenu,
            setActiveMenu,
        };
    }, [activeMenu, setActiveMenu]);

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
