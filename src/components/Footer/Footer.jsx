import React, { useMemo } from "react";
import "./styles.scss";
import { Link } from "react-router";
import Image from "../Image";
import TransitionLink from "../TransitionLink";
import { getMenu } from "../../lib/menu";

function Footer() {
    const menuData = useMemo(() => getMenu(), []);

    const { FooterMenuGroup } = menuData;

    const SocialLinks = [
        {
            label: "Facebook",
            path: "#",
            icon: <i className="fa-brands fa-facebook-f"></i>
        },
        {
            label: "Instagram",
            path: "#",
            icon: <i className="fa-brands fa-instagram"></i>
        },
        {
            label: "LinkedIn",
            path: "#",
            icon: <i className="fa-brands fa-linkedin"></i>
        }
    ];

    const footerBottomLinks = [
        { label: "Privacy Policy", path: "#" },
        { label: "Terms of Service", path: "#" },
        { label: "Sitemap", path: "#" }
    ];


    const handleNewsletterSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <footer className="main-footer">
            <div className="footer-top">
                <div className="container footer-grid">
                    <div className="footer-col footer-brand">
                        <div className="footer-logo">
                            <TransitionLink to={"/"} aria-label="Go to Home Page">
                                <Image
                                    src={`/images/logo/logo-white.png`}
                                    alt="Rise N Shine Logo"
                                    width={96}
                                    height={96}
                                    priority
                                />
                            </TransitionLink>
                        </div>
                        <div className="footer-social">
                            <ul>
                                {SocialLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link to={item.path} aria-label={item.label} title={item.label}>
                                            {item.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {FooterMenuGroup?.map((menu, index) => (
                        <div className="footer-col footer-links" key={`footer-menu-column-${index}`}>
                            <div className="menu-section" key={menu.heading}>
                                <span className="col-title">{menu.heading}</span>
                                <nav className="footer-nav" aria-label={menu.heading}>
                                    <ul>
                                        {menu.menu.map((item) => (
                                            <li key={item.label} className="nav-item">
                                                <TransitionLink href={item.path}>{item.label}</TransitionLink>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    ))}

                    <div className="footer-col footer-newsletter">
                        <span className="col-title">Stay Updated</span>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            <label htmlFor="footer-newsletter" className="visually-hidden">
                                Enter your email
                            </label>
                            <input
                                id="footer-newsletter"
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit" aria-label="Join newsletter">
                                <i className="fa-solid fa-arrow-right" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container inner">
                    <p className="copyright-text">
                        &copy; {new Date().getFullYear()} <b>Rise N Shine</b>. All rights reserved.
                    </p>
                    <ul className="bottom-menu">
                        {footerBottomLinks.map((item) => (
                            <li key={item.label}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
