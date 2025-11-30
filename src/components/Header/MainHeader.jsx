import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from "react";
import { Link, useLocation } from "react-router";
import MenuItem from "./MenuItem";
import styles from "./Header.module.scss";
import Hamburger from "hamburger-react";
import { GetHeaderMenu } from "../../data/MenuData";
import { useClassNames } from "../../hook/useClassNames";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import Button from "../Button/Button";
import { useLoader } from "../../context/Loader/LoaderContext";

const MainHeader = ({ isTransparent }) => {
    const menuData = useMemo(() => GetHeaderMenu(), []);
    const { HeaderMenu } = menuData;
    const { isMounted } = useLoader();
    const location = useLocation();

    const [isSticky, setIsSticky] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuBtnToggled, setMenuBtnToggled] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const headerRef = useRef(null);
    const lastScrollTop = useRef(0);
    const headerHeight = useRef(0);
    const menuPanelRef = useRef(0);
    const overlayRef = useRef(0);

    const [isMenuClosed, setIsMenuClosed] = useState(true);

    const classes = useClassNames();

    const lenis = useLenis();

    useEffect(() => {
        const ctx = gsap.matchMedia();

        ctx.add("(max-width: 991px)", () => {
            const header = document.querySelector("header");
            if (!menuPanelRef?.current || !overlayRef?.current) return;

            const menuItems = menuPanelRef.current.querySelectorAll("nav > ul > li");

            if (!menuItems.length) return;

            gsap.set(overlayRef.current, {
                opacity: 0,
                visibility: "hidden",
                pointerEvents: "none",
            });
            gsap.set(menuPanelRef.current, { x: "100%", display: "none" });

            if (menuBtnToggled) {
                if (menuOpen) {
                    lenis?.stop();

                    setIsAnimating(true);

                    gsap.set(menuPanelRef.current, {
                        willChange: "transform",
                        display: "flex",
                        x: "100%",
                    });
                    gsap.set(menuItems, {
                        willChange: "opacity, transform",
                    });
                    gsap.set(overlayRef.current, {
                        visibility: "visible",
                        pointerEvents: "auto",
                        willChange: "opacity",
                    });

                    header.dataset.menuState = "opened";
                    setIsMenuClosed(false);

                    gsap.fromTo(
                        overlayRef.current,
                        {
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            duration: 0.5,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.set(overlayRef.current, { clearProps: "willChange" });
                            },
                        }
                    );

                    gsap.fromTo(
                        menuPanelRef.current,
                        {
                            x: "100%",
                        },
                        {
                            x: 0,
                            duration: 0.8,
                            ease: "power4.inOut",
                            onComplete: () => {
                                gsap.set(menuPanelRef.current, { clearProps: "willChange" });
                            },
                        }
                    );

                    gsap.fromTo(
                        menuItems,
                        {
                            y: 40,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            stagger: 0.05,
                            duration: 0.8,
                            delay: 0.6,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.set(menuItems, { clearProps: "all" });
                                setIsAnimating(false);
                            },
                        }
                    );
                } else {
                    setIsAnimating(true);

                    gsap.set(menuPanelRef.current, {
                        willChange: "transform",
                        display: "flex",
                    });
                    gsap.set(overlayRef.current, {
                        visibility: "visible",
                        pointerEvents: "none",
                        willChange: "opacity",
                    });

                    gsap.fromTo(
                        menuPanelRef.current,
                        { x: 0 },
                        {
                            x: "100%",
                            duration: 0.8,
                            ease: "power3.inOut",
                            onComplete: () => {
                                gsap.set(menuPanelRef.current, {
                                    clearProps: "willChange",
                                    display: "none",
                                });
                                header.dataset.menuState = "closed";
                                setIsMenuClosed(true);
                                lenis?.start();
                            },
                        }
                    );

                    gsap.fromTo(
                        overlayRef.current,
                        {
                            opacity: 1,
                        },
                        {
                            opacity: 0,
                            duration: 0.5,
                            delay: 0.3,
                            ease: "power3.inOut",
                            onComplete: () => {
                                gsap.set(overlayRef.current, { clearProps: "all" });
                                setIsAnimating(false);
                            },
                        }
                    );
                }
            }
        });

        return () => ctx.revert();
    }, [menuOpen, lenis, menuBtnToggled]);

    const handleMenuBtnClick = () => {
        if (isAnimating) return;
        setMenuOpen((prev) => !prev);
        setMenuBtnToggled(true);
    };

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;

        if (scrollTop < 100) {
            setIsSticky(false);
        } else if (scrollTop > headerHeight.current) {
            setIsSticky(true);
        }

        if (!menuOpen) {
            if (scrollTop > lastScrollTop.current && scrollTop > 200) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }

        lastScrollTop.current = Math.max(scrollTop, 0);
    }, [menuOpen]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        setTimeout(() => {
            setMenuOpen(false);
            setMenuBtnToggled(false);
            setIsMenuClosed(true);
            setIsAnimating(false);
            lenis?.start();
        }, 500);
    }, [location.pathname, lenis]);

    const computedClassName = useMemo(() => {
        return classes(
            styles.main_header,
            isTransparent && styles.transparent,
            isSticky && styles.sticky_header,
            isHidden && styles.header_hide
        );
    }, [isTransparent, isSticky, isHidden, classes]);

    return (
        <header
            className={computedClassName}
            ref={headerRef}
            data-hidden={isHidden}
            data-sticky={isSticky}
            data-header-revealed={isMounted}
        >
            <div className={`container-fluid ${styles.header_container}`}>
                <div
                    className={`${styles.header_inner} row justify-content-between align-items-center`}
                >
                    <div className={`col-auto ${styles.header_logo_wrapper}`}>
                        <Link
                            className={styles.header_logo}
                            to="/"
                            aria-label="Header Logo"
                        >
                            <img
                                src="/images/logo/logo.png"
                                width={200}
                                height={64}
                                alt="Header Logo"
                                title=""
                                loading="eager"
                                decoding="async"
                            />
                        </Link>
                    </div>

                    <div
                        className={classes(styles.header_main_menu, "col-auto")}
                        data-state={menuOpen ? "opened" : "closed"}
                        ref={menuPanelRef}
                    >
                        <div className={styles.header_top_wrapper}>
                            <span
                                className={classes(styles.menu_btn_close, "d-none")}
                                onClick={() => setMenuOpen(false)}
                            >
                                <i className="fa-regular fa-xmark-large"></i>{" "}
                                <small>Close menu</small>
                            </span>
                        </div>
                        <div className={styles.header_menu_inner}>
                            <nav>
                                <ul className={styles.header_menu_list}>
                                    {HeaderMenu.map((item, index) => (
                                        <MenuItem
                                            menuItem={item}
                                            menuItemIndex={index}
                                            isMenuClosed={isMenuClosed}
                                            key={index}
                                        />
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-auto pe-0">
                        <Button textLabel={"Apply Now"} iconClass="fa-solid fa-arrow-right-to-bracket" />
                    </div>

                    <div className={classes("col-auto pe-0", styles.menu_btn_wrapper)} data-state={menuOpen ? "opened" : "closed"}>
                        <div className={classes(styles.header_menu_btn)}>
                            <Hamburger
                                size={26}
                                toggled={menuOpen}
                                onToggle={handleMenuBtnClick}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={styles.header_overlay}
                ref={overlayRef}
                onClick={() => setMenuOpen(false)}
            ></div>
        </header>
    );
};

export default React.memo(MainHeader);
