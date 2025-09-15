import React, { useCallback, useRef } from 'react';
import { Menu } from 'primereact/menu';
import type { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import { useAtomValue, useAtom } from 'jotai';
import { availableLanguages, setSelectedLanguage } from '@shared/store';
import '@shared/styles/LanguageSwitcher.scss';

export const LanguageSwitcher: React.FC = () => {
    const menuRef = useRef<Menu>(null);
    const languages = useAtomValue(availableLanguages);
    const [, setLang] = useAtom(setSelectedLanguage);

    const changeLanguage = (lang: string) => {
        setLang(lang);
    };

    const items: MenuItem[] = languages.map((lng) => {
        return {
            label: lng.displayName,
            command: () => {
                return changeLanguage(lng.locale);
            },
        };
    });

    const handleToggle = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        menuRef.current?.toggle(event);
    }, []);

    return (
        <>
            <Button
                type="button"
                onClick={handleToggle}
                className="p-link layout-topbar-button language-switcher"
            >
                <i className={`pi pi-globe`}></i>
            </Button>
            <Menu model={items} popup ref={menuRef} />
        </>
    );
};
