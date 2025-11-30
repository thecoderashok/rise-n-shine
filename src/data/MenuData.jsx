export const GetHeaderMenu = () => {

    const HeaderMenu = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "About us",
            path: "/about-us",
        },
        {
            label: "Academics",
            path: "/academics",
        },
        {
            label: "Faculties",
            path: "/faculties",
        },
        {
            label: "Programs",
            path: "#",
        },
        {
            label: "Admissions",
            path: "#",
        },
        {
            label: "News & Events",
            path: "#",
        },
        // {
        //     label: "Contact Us",
        //     path: "#",
        //     sub_menu: [
        //         {
        //             label: "Home",
        //             path: "/",
        //         },
        //         {
        //             label: "About us",
        //             path: "/about-us",
        //         },
        //         {
        //             label: "Our Services",
        //             path: "/our-services",
        //         },
        //         {
        //             label: "Our Projects",
        //             path: "/our-projects",
        //         },
        //         {
        //             label: "Contact Us",
        //             path: "/contact-us",
        //         },
        //     ]
        // },
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
                { label: "Contact Us", path: "#" },
            ],
        },
    ];


    return {
        HeaderMenu: HeaderMenu,
        footerQuickLinks: HeaderMenu,
        FooterMenuGroup: FooterMenuGroup,
    };
};

