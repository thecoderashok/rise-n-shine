export const GetHeaderMenu = () => {

    const HeaderMenu = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "About us",
            path: "/about-us",
            sub_menu: [
                {
                    label: "Faculties",
                    path: "/faculties",
                },
            ],
        },
        {
            label: "Academics",
            path: "/academics",
            sub_menu: [
                {
                    label: "Programmes and Courses",
                    path: "/programmes-and-courses",
                },
                {
                    label: "Research",
                    path: "/research",
                },
                {
                    label: "Campus Life",
                    path: "/campus-life",
                },
            ],
        },
        {
            label: "Admissions",
            path: "/admissions",
        },
        {
            label: "News & Events",
            path: "#",
        },
        {
            label: "Contact Us",
            path: "/contact-us",
        },
    ];

    const FooterMenuGroup = [
        {
            heading: "About",
            menu: [
                { label: "About Us", path: "#" },
                { label: "Vision & Mission", path: "#" },
                { label: "Founder’s Message", path: "#" },
            ],
        },
        {
            heading: "Academics",
            menu: [
                { label: "Programs", path: "#" },
                { label: "Admissions", path: "#" },
                { label: "Research", path: "#" },
            ],
        },
        {
            heading: "Connect",
            menu: [
                { label: "Campus Life", path: "#" },
                { label: "News & Events", path: "#" },
                { label: "Contact Us", path: "/contact-us" },
            ],
        },
    ];


    return {
        HeaderMenu: HeaderMenu,
        footerQuickLinks: HeaderMenu,
        FooterMenuGroup: FooterMenuGroup,
    };
};

