import { classNames } from 'primereact/utils';
import React, { useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import type { AppTopbarRef } from '@shared/types';
import { AuthContext, LayoutContext } from '@shared/utils';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useSafeContext } from '@shared/hooks/useSafeContext';
import { useT } from '@shared/hooks';

interface AppTopbarProps {
    ref?: React.Ref<AppTopbarRef>;
}

export function AppTopbar({ ref }: AppTopbarProps) {
    const { t } = useT();
    const { logout, authToken, isLogoutSuccessfull } = useSafeContext(AuthContext);
    const navigate = useNavigate();
    const { layoutState, onMenuToggle, showProfileSidebar } = useSafeContext(LayoutContext);
    const menubuttonRef = useRef<HTMLButtonElement>(null);
    const topbarmenuRef = useRef<HTMLDivElement>(null);
    const topbarmenubuttonRef = useRef<HTMLButtonElement>(null);

    // Expose refs to parent
    useImperativeHandle(ref, () => {
        return {
            menubutton: menubuttonRef.current,
            topbarmenu: topbarmenuRef.current,
            topbarmenubutton: topbarmenubuttonRef.current,
        };
    });

    const handleLogout = useCallback(() => {
        if (!authToken) {
            void navigate('/web/login', { replace: true });
            return;
        }

        logout({
            requestInfo: {
                authToken,
            },
        });
    }, [logout, navigate, authToken]);

    useEffect(() => {
        if (isLogoutSuccessfull) {
            void navigate('/web/login', { replace: true });
        }
    }, [isLogoutSuccessfull, navigate]);

    return (
        <div className="layout-topbar">
            <div className="layout-topbar-logo">
                <span>{t('APP_TITLE')}</span>
            </div>

            <button
                ref={menubuttonRef}
                type="button"
                className="p-link layout-menu-button layout-topbar-button"
                onClick={onMenuToggle}
            >
                <i className="pi pi-bars" />
            </button>

            <button
                ref={topbarmenubuttonRef}
                type="button"
                className="p-link layout-topbar-menu-button layout-topbar-button"
                onClick={showProfileSidebar}
            >
                <i className="pi pi-ellipsis-v" />
            </button>

            <div
                ref={topbarmenuRef}
                className={classNames('layout-topbar-menu', {
                    'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible,
                })}
            >
                <LanguageSwitcher />

                <Button
                    type="button"
                    className="p-link layout-topbar-button"
                    onClick={handleLogout}
                >
                    <i className="pi pi-sign-out" />
                </Button>
            </div>
        </div>
    );
}

AppTopbar.displayName = 'AppTopbar';
