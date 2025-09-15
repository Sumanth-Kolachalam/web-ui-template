import { MenuProvider } from './MenuProvider';
import type { AppMenuItem } from '@shared/types';
import AppMenuitem from './AppMenuItem';
import type { VMenuType } from '@shared/types';
import { useSafeContext } from '@shared/hooks';
import { LandingContext } from '@shared/utils';

function buildMenuFromData(data: VMenuType[]): AppMenuItem[] {
    const root: AppMenuItem[] = [];

    const sorted = [...data].sort((a, b) => {
        return a.path.split('.').length - b.path.split('.').length;
    });

    for (const item of sorted) {
        const segments = item.path.split('.');
        let currentLevel = root;
        let absolutePath = '';

        segments.forEach((segment) => {
            absolutePath = absolutePath ? `${absolutePath}.${segment}` : segment;

            let existing = currentLevel.find((item) => {
                return item.label === segment;
            });

            if (!existing) {
                existing = {
                    label: segment,
                    displayName:
                        data.find((dp) => {
                            return dp.path == absolutePath;
                        })?.displayName ?? 'Dropdown',
                    icon: item.icon ?? 'pi pi-fw pi-bookmark',
                    ...(item.link ? { to: item.link } : { items: [] }),
                };
                currentLevel.push(existing);
            }

            if (!existing?.to && existing?.items) {
                currentLevel = existing.items;
            }
        });
    }

    return root;
}

const AppMenu = () => {
    const { vmenu } = useSafeContext(LandingContext);

    const model: AppMenuItem[] = buildMenuFromData(vmenu);

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? (
                        <AppMenuitem item={item} root={true} index={i} key={item.label} />
                    ) : (
                        <li className="menu-separator"></li>
                    );
                })}
            </ul>
        </MenuProvider>
    );
};

export { AppMenu };
