/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useRef } from 'react';
import { useEventListener, useUnmountEffect } from 'primereact/hooks';
import { classNames } from 'primereact/utils';
import { AppFooter, AppSidebar, AppTopbar } from '@shared/components';
import { LayoutContext } from '@shared/utils';
// import { PrimeReactContext } from 'primereact/api';
import type { ChildContainerProps, LayoutState, AppTopbarRef } from '@shared/types';
import { useSafeContext } from '@shared/hooks';

const Layout = ({ children }: ChildContainerProps) => {
    const { layoutConfig, layoutState, setLayoutState } = useSafeContext(LayoutContext);
    // const { setRipple } = useContext(PrimeReactContext);
    const topbarRef = useRef<AppTopbarRef>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(
                sidebarRef.current?.isSameNode(event.target as Node) ??
                sidebarRef.current?.contains(event.target as Node) ??
                topbarRef.current?.menubutton?.isSameNode(event.target as Node) ??
                topbarRef.current?.menubutton?.contains(event.target as Node)
            );

            if (isOutsideClicked) {
                hideMenu();
            }
        },
    });

    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] =
        useEventListener({
            type: 'click',
            listener: (event) => {
                const isOutsideClicked = !(
                    topbarRef.current?.topbarmenu?.isSameNode(event.target as Node) ??
                    topbarRef.current?.topbarmenu?.contains(event.target as Node) ??
                    topbarRef.current?.topbarmenubutton?.isSameNode(event.target as Node) ??
                    topbarRef.current?.topbarmenubutton?.contains(event.target as Node)
                );

                if (isOutsideClicked) {
                    hideProfileMenu();
                }
            },
        });

    const hideMenu = () => {
        setLayoutState((prevLayoutState: LayoutState) => {
            return {
                ...prevLayoutState,
                overlayMenuActive: false,
                staticMenuMobileActive: false,
                menuHoverActive: false,
            };
        });
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };

    const hideProfileMenu = () => {
        setLayoutState((prevLayoutState: LayoutState) => {
            return {
                ...prevLayoutState,
                profileSidebarVisible: false,
            };
        });
        unbindProfileMenuOutsideClickListener();
    };

    const blockBodyScroll = (): void => {
        document.body.classList.add('blocked-scroll');
    };

    const unblockBodyScroll = (): void => {
        document.body.classList.remove('blocked-scroll');
    };

    useEffect(() => {
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }

        if (layoutState.staticMenuMobileActive) {
            blockBodyScroll();
        }
    }, [
        bindMenuOutsideClickListener,
        layoutState.overlayMenuActive,
        layoutState.staticMenuMobileActive,
    ]);

    useEffect(() => {
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [bindProfileMenuOutsideClickListener, layoutState.profileSidebarVisible]);

    useUnmountEffect(() => {
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });

    const containerClass = classNames('layout-wrapper', {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive':
            layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive,
        'p-input-filled': layoutConfig.inputStyle === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple,
    });

    return (
        <React.Fragment>
            <div className={containerClass}>
                <AppTopbar ref={topbarRef} />
                <div ref={sidebarRef} className="layout-sidebar">
                    <AppSidebar />
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">{children}</div>
                    <AppFooter />
                </div>
                <div className="layout-mask"></div>
            </div>
        </React.Fragment>
    );
};

export { Layout };
