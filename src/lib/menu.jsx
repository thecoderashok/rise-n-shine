export const getMenu = () => {

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
            path: "#",
            sub_menu: [
                {
                    label: "Programmes",
                    path: "/programmes",
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
                // {
                //     label: "Research",
                //     path: "/research",
                // },
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
                { label: "Who We Are", path: "/about-us" },
                { label: "Faculties", path: "/faculties" },
            ],
        },
        {
            heading: "Academics",
            menu: [
                { label: "Programmes", path: "/programmes" },
                { label: "Admissions", path: "/admissions" },
                { label: "Campus", path: "/campus" },
                { label: "Students Life", path: "/students-life" },
                { label: "Placement", path: "/placement" },
                // { label: "Research", path: "#" },
            ],
        },
        {
            heading: "Connect",
            menu: [
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