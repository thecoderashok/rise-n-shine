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
            label: "Our Services",
            path: "/our-services",
        },
        {
            label: "Our Projects",
            path: "/our-projects",
        },
        {
            label: "Our Clients",
            path: "/our-clients",
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


    const ServicesOffered = [
        {
            label: "Feasibility Study Services",
            path: "/#news_sec",
        },
        {
            label: "Design / Proof Checking Consultancy Services",
            path: "#",
        },
        {
            label: "Rehabilitation Works",
            path: "#",
        },
        {
            label: "Quality Assurance Services",
            path: "#",
        },
        {
            label: "Project Management Services",
            path: "#",
        },
        {
            label: "Advisory",
            path: "#",
        },
        {
            label: "Pre - Feasibility",
            path: "#",
        },
        {
            label: "Design / Proof Consultancy",
            path: "#",
        },
        {
            label: "Bot & Techno Economic Services",
            path: "#",
        },
    ];

    const FooterMenuGroup = [
        {
            heading: "Discover",
            menu: [
                { label: "Home", path: "/" },
                { label: "About us", path: "/about-us" },
                { label: "Our Clients", path: "/our-clients" },
            ],
        },
        {
            heading: "What we do",
            menu: [
                { label: "Our Services", path: "/our-services" },
                { label: "Our Projects", path: "/our-projects" },
            ],
        },
        {
            heading: "Connect",
            menu: [
                { label: "Contact Us", path: "/contact-us" },
            ],
        },
    ];

    return {
        HeaderMenu: HeaderMenu,
        footerQuickLinks: HeaderMenu,
        FooterMenuGroup: FooterMenuGroup,
        footerServicesMenu: ServicesOffered,
    };
};

