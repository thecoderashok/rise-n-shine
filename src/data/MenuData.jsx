export const GetHeaderMenu = () => {

    const HeaderMenu = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "About us",
            path: "#",
            sub_menu: [
                {
                    label: "Who We Are",
                    path: "/about-us",
                },
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
                    label: "Campus",
                    path: "/campus",
                },
                {
                    label: "Student's Life",
                    path: "/students-life",
                },
                {
                    label: "Placement",
                    path: "/placement",
                },
                {
                    label: "Research",
                    path: "/research",
                },
            ],
        },
        {
            label: "Admissions",
            path: "/admissions",
        },
        {
            label: "News & Events",
            path: "/news-events",
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
                { label: "Campus", path: "/campus" },
                { label: "Students Life", path: "/students-life" },
                { label: "Placement", path: "/placement" },
                { label: "News & Events", path: "/news-events" },
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

