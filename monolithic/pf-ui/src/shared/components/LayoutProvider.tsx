import { useCallback, useMemo, useState } from 'react';
import type {
    LayoutState,
    ChildContainerProps,
    LayoutConfig,
    LayoutContextProps,
} from '@shared/types';
import { LayoutContext } from '@shared/utils';

export const LayoutProvider = ({ children }: ChildContainerProps) => {
    const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14,
    });

    const [layoutState, setLayoutState] = useState<LayoutState>({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
    });

    const onMenuToggle = useCallback(() => {
        const isOverlay = () => {
            return layoutConfig.menuMode === 'overlay';
        };
        const isDesktop = () => {
            return window.innerWidth > 991;
        };
        if (isOverlay()) {
            setLayoutState((prevLayoutState: LayoutState) => {
                return {
                    ...prevLayoutState,
                    overlayMenuActive: !prevLayoutState.overlayMenuActive,
                };
            });
        } else if (isDesktop()) {
            setLayoutState((prevLayoutState: LayoutState) => {
                return {
                    ...prevLayoutState,
                    staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive,
                };
            });
        } else {
            setLayoutState((prevLayoutState: LayoutState) => {
                return {
                    ...prevLayoutState,
                    staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive,
                };
            });
        }
    }, [layoutConfig.menuMode]);

    const showProfileSidebar = useCallback(() => {
        setLayoutState((prevLayoutState: LayoutState) => {
            return {
                ...prevLayoutState,
                profileSidebarVisible: !prevLayoutState.profileSidebarVisible,
            };
        });
    }, []);

    const contextValue = useMemo<LayoutContextProps>(() => {
        return {
            layoutConfig,
            setLayoutConfig,
            layoutState,
            setLayoutState,
            onMenuToggle,
            showProfileSidebar,
        };
    }, [layoutConfig, layoutState, onMenuToggle, showProfileSidebar]);

    return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
};
