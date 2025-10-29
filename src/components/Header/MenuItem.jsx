import React, { useEffect, useState, useRef } from "react";
import SubMenu from "./SubMenu";
import styles from "./Header.module.scss";
import { useClassNames } from "../../hook/useClassNames";
import { useLocation } from "react-router";
import { gsap } from "../../gsapInit";
import useMobile from "../../hook/useMobile";
import TransitionLink from "../TransitionLink";

const MenuItem = ({ menuItem, menuItemIndex, isMenuClosed, ...props }) => {
    const isMobile = useMobile();
    const [liHoverIndex, setLIHoverIndex] = useState(null);

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const menuItemRef = useRef(null);
    const subMenuRef = useRef(null);

    const { pathname } = useLocation();
    const classes = useClassNames();

    useEffect(() => {
        const submenu = subMenuRef.current;
        if (!submenu || !isMobile) return;

        const ctx = gsap.context(() => {
            gsap.killTweensOf(submenu);
            gsap.set(submenu, { height: 0 });
            if (isSubMenuOpen) {
                gsap.to(submenu, {
                    height: submenu.scrollHeight,
                    duration: 0.6,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.set(submenu, { height: "auto" })
                    }
                });
            } else {
                gsap.set(submenu, { height: submenu.scrollHeight });
                gsap.to(submenu, {
                    height: 0,
                    duration: 0.6,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.set(submenu, { height: 0 })
                    }
                });
            }
        })

        return () => ctx.revert();

    }, [isSubMenuOpen, isMobile])

    useEffect(() => {
        if (isMenuClosed) {
            setIsSubMenuOpen(false);

            const submenu = subMenuRef.current;
            if (!submenu || !isMobile) return;

            gsap.killTweensOf(submenu);
            gsap.set(submenu, { height: 0 });
        }
    }, [isMenuClosed, isMobile]);


    const handleMouseEnter = () => {
        if (isMobile) return;
        setLIHoverIndex(menuItemIndex);
        setIsSubMenuOpen(true);
    };
    const handleMouseLeave = () => {
        if (isMobile) return;
        setLIHoverIndex(null);
        setIsSubMenuOpen(false);
    };

    const handleClick = (e) => {
        if (!isMobile) return;
        setLIHoverIndex(menuItemIndex);
        e.preventDefault();
        e.stopPropagation();

        if (menuItem?.sub_menu) {
            setIsSubMenuOpen((prev) => !prev);
        } else {
            setIsSubMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuItemRef.current && !menuItemRef.current.contains(e.target)) {
                setLIHoverIndex(null);
                setIsSubMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuItemRef, isMobile]);

    // const isActive = (() => {
    //     if (!menuItem?.path) return false;
    //     if (menuItem.path.startsWith("#")) {
    //         if (typeof window !== "undefined") {
    //             return window.location.hash === menuItem.path;
    //         }
    //         return false;
    //     }
    //     return pathname === menuItem.path;
    // })();

    return (
        <li
            className={
                classes(
                    liHoverIndex === menuItemIndex && styles.hovered,
                    menuItem?.sub_menu && styles.has_children,
                    menuItem?.multi_level_sub_menu && styles.multi_level,
                    isSubMenuOpen && styles.open
                )
            }
            id={menuItem?.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            ref={menuItemRef}
            {...props}
        >
            <TransitionLink
                href={menuItem?.path || "#"}
                className={classes(pathname === menuItem.path && styles.active)}
            >
                {menuItem?.label}
            </TransitionLink>

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
