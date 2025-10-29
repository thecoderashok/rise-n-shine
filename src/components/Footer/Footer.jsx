import React, { useMemo } from "react";
import "./styles.scss";
import { Link } from "react-router";
import { GetHeaderMenu } from "../../data/MenuData";
import Image from "../Image";
import TransitionLink from "../TransitionLink";

function Footer() {
    const menuData = useMemo(() => GetHeaderMenu(), []);

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
        },
    ]

    return (
        <footer className="main-footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="footer-col">
                                <div className="footer-logo">
                                    <TransitionLink to={"/"} aria-label="Go to Home Page">
                                        <Image
                                            src={`/images/logo/logo.png`}
                                            alt="Footer Logo"
                                            width={60}
                                            height={60}
                                            priority
                                        />
                                    </TransitionLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="menu-container">

                                {FooterMenuGroup.map((menu, index) => (
                                    <div className="footer-col" key={index}>
                                        <span className="col-title">{menu.heading}</span>
                                        <nav className="footer-nav">
                                            <ul>
                                                {menu.menu.map((item, index) => (
                                                    <li key={index} className="nav-item">
                                                        <TransitionLink href={item.path}>{item.label}</TransitionLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="inner container">
                    <p className="copyright-text">
                        <span>
                            © 2025 <b>Rise N Shine</b>
                        </span>{" "}
                        All Rights Reserved. <br />
                        <span className="credit-text d-none">
                            <a href="#" target="_blank">Wisecow</a> Product
                        </span>
                    </p>

                    <div className="footer-social">
                        <ul>
                            {SocialLinks.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} aria-label={item.label} title={item.label}>
                                        {item.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;