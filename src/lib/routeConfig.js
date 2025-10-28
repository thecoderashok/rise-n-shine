export const headerConfig = {
    nonTransparentRoutes: ["/about-us", "/contact-us", "/404"],
};

export const pageTransitionConfig = [
    {
        path: "/",
        routeTitle: "Welcome",
    },
    {
        path: "/about-us",
        routeTitle: "Who we are",
    },
    {
        path: "*",
    },
];