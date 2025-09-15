import { Ripple } from 'primereact/ripple';
import { classNames } from 'primereact/utils';
import { CSSTransition } from 'react-transition-group';
import { MenuContext } from '@shared/utils';
import type { AppMenuItemProps } from '@shared/types';
import { Link, useLocation } from 'react-router';
import { useT } from '@shared/hooks';
import { useSafeContext } from '@shared/hooks';
import { useCallback } from 'react';

const timeout = { enter: 1000, exit: 450 };

const AppMenuitem = (props: AppMenuItemProps) => {
    const { activeMenu, setActiveMenu } = useSafeContext(MenuContext);
    const location = useLocation();
    const item = props.item;
    const key = props.parentKey ? props.parentKey + '-' + props.index : String(props.index);
    const isActiveRoute = item!.to && location.pathname === item!.to;
    const active = activeMenu === key || activeMenu.startsWith(key + '-');
    const { t } = useT();

    // Move handler out of render scope
    const handleItemClick = useCallback(
        (
            event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
            itemArg = item,
            keyArg = key,
            activeArg = active,
            parentKeyArg = props.parentKey,
        ) => {
            if (itemArg!.disabled) {
                event.preventDefault();
                return;
            }
            if (itemArg!.command) {
                itemArg!.command({ originalEvent: event, item: itemArg });
            }
            if (itemArg!.items && itemArg!.items.length > 0)
                setActiveMenu(activeArg ? parentKeyArg! : keyArg);
            else setActiveMenu(keyArg);
        },
        [item, key, active, props.parentKey, setActiveMenu],
    );

    const subMenu = item!.items && item!.items.length > 0 && item!.visible !== false && (
        <CSSTransition
            timeout={timeout}
            classNames="layout-submenu"
            in={props.root ? true : active}
            key={item!.label}
        >
            <ul>
                {item!.items.map((child: typeof item, i: number) => {
                    return (
                        <AppMenuitem
                            item={child}
                            index={i}
                            parentKey={key}
                            key={key + '-' + i}
                            root={false}
                        />
                    );
                })}
            </ul>
        </CSSTransition>
    );

    return (
        <li
            className={classNames({
                'layout-root-menuitem': props.root,
                'active-menuitem': active,
            })}
        >
            {props.root && item!.visible !== false && (
                <div className="layout-menuitem-root-text">{item!.label}</div>
            )}
            {(!item!.to || item!.items) && item!.visible !== false ? (
                <a
                    href={item!.url}
                    onClick={handleItemClick}
                    className={classNames(item!.class, 'p-ripple')}
                    target={item!.target}
                    tabIndex={0}
                >
                    <i className={classNames('layout-menuitem-icon', item!.icon)}></i>
                    {Array.isArray(item?.items) && item.items.length > 0 && (
                        <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                    )}
                    <Ripple />
                </a>
            ) : null}

            {item!.to && !item!.items && item!.visible !== false ? (
                <Link
                    to={item!.to}
                    replace={item!.replaceUrl}
                    target={item!.target}
                    onClick={handleItemClick}
                    className={classNames(item!.class, 'p-ripple', {
                        'active-route': isActiveRoute,
                    })}
                    tabIndex={0}
                >
                    <i className={classNames('layout-menuitem-icon', item!.icon)}></i>
                    <span className="layout-menuitem-text">{t(item!.label)}</span>
                    {/* {Array.isArray(item?.items) && item.items.length > 0 && (
                        <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                    )} */}
                    <Ripple />
                </Link>
            ) : null}

            {subMenu}
        </li>
    );
};

export default AppMenuitem;
