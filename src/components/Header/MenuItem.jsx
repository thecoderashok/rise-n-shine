import React, { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { NavLink } from "react-router";
import SubMenu from "./SubMenu";
import styles from "./Header.module.scss";
import { useClassNames } from "../../hook/useClassNames";

const MenuItem = ({ menuItem, menuItemIndex, isMenuClosed, ...props }) => {
    const [liHoverIndex, setLIHoverIndex] = useState(null);

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const subMenuRef = useRef(null);
    const parentLI = useRef(null);

    const classes = useClassNames();

    const toggleSubmenu = useCallback((e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation();
            setIsSubMenuOpen((prev) => !prev);
        }
    }, []);

    useEffect(() => {
        const handleSubMenuElementHeight = () => {
            const submenu = subMenuRef.current;
            const parent = parentLI.current?.closest(`.${styles.header_sub_menu} ul`);

            if (!submenu) return;

            if (isSubMenuOpen) {
                submenu.style.height = `${submenu.scrollHeight}px`;
            } else {
                submenu.style.height = `${submenu.scrollHeight}px`;
                requestAnimationFrame(() => {
                    submenu.style.height = `0px`;
                });
            }

            if (parent) {
                parent.style.height = `${parent.scrollHeight}px`;
                requestAnimationFrame(() => {
                    parent.style.height = `auto`;
                });
            }
        };

        if (window.innerWidth <= 992) {
            requestAnimationFrame(handleSubMenuElementHeight);
        }
    }, [isSubMenuOpen]);


    useEffect(() => {
        if (isMenuClosed) {
            setIsSubMenuOpen(false);

            const parent = parentLI.current;
            if (!parent) return;

            const nestedULs = parent.querySelectorAll("ul");

            nestedULs.forEach((ul) => {
                requestAnimationFrame(() => {
                    ul.style.height = "";
                });
            });
        }
    }, [isMenuClosed]);


    const computedClass = useMemo(() => {
        return classes(
            liHoverIndex === menuItemIndex && styles.hovered,
            menuItem?.sub_menu && styles.has_children,
            menuItem?.multi_level_sub_menu && styles.multi_level,
            isSubMenuOpen && styles.open
        );
    }, [liHoverIndex, menuItem, isSubMenuOpen, menuItemIndex, classes]);

    return (
        <li
            className={computedClass}
            onMouseEnter={() => setLIHoverIndex(menuItemIndex)}
            onMouseLeave={() => setLIHoverIndex(null)}
            onClick={toggleSubmenu}
            ref={parentLI}
            {...props}
        >
            <NavLink
                to={menuItem?.path}
                className={({ isActive }) => {
                    if (menuItem.path.startsWith("#")) {
                        return classes(window.location.hash === menuItem.path && styles.active)
                    }
                    return classes(isActive && styles.active);
                }}
            >
                {menuItem?.label}
            </NavLink>

            {menuItem?.sub_menu ? (
                <SubMenu
                    customClass={classes(menuItem.multi_level_sub_menu && styles.multi_level_style01)}
                    menus={menuItem.sub_menu}
                    depth={menuItemIndex}
                    subMenuRef={subMenuRef}
                />
            ) : null}
        </li>
    );
};

export default React.memo(MenuItem);
