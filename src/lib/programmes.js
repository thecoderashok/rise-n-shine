export const Programmes_List_Page_Base_Path = "/programmes";

const marketingDescription = `
    <p>
        The Professional Marketing Management Development Programmes at Rise and Shine Institute of Learning are designed to equip learners with a comprehensive foundation in modern marketing and sales. Each programme progresses from essential principles to advanced strategies, combining academic depth with real-world application. Students engage with diverse modules ranging from digital marketing, sales and distribution, and financial services marketing, to cutting-edge areas such as AI-driven strategies, marketing technology, and growth hacking. This structured approach ensures that every learner develops not only a strong theoretical understanding but also the practical skills and global perspective required to excel in today's competitive business environment.
    </p>
`;

const financeDescription = `
    <p>
        The Finance Management Professional Development Programmes at Rise and Shine Institute of Learning are designed to build expertise in the principles and practices that drive global financial systems. Beginning with foundational concepts such as banking, budgeting, valuation, and forecasting, the programmes advance into specialised areas including portfolio management, financial derivatives, equity valuation, and international reporting standards. Each stage combines rigorous academic learning with practical application, enabling learners to understand financial markets, master analytical tools, and make informed strategic decisions. By engaging with real-world case studies, simulations, and industry exposure, students develop the agility, technical acumen, and ethical perspective required to excel in the fast-changing financial sector and lead with confidence across global markets.
    </p>
`;

const digitalDescription = `
    <p>
        The School of Digital Storytelling at Rise and Shine Institute of Learning is designed to cultivate creative thinkers who understand the power of narrative in a digital-first world. The curriculum introduces learners to the timeless art of storytelling and then extends it into modern contexts through platforms, tools, branding, and marketing. By blending creativity with ethical responsibility and practical industry readiness, the programme equips students to craft compelling narratives that inspire, engage, and influence. Learners graduate with the skills to navigate diverse media landscapes and the confidence to transform ideas into impactful digital stories that resonate across cultures and industries.
    </p>
`;


const createImageData = (src, alt) => ({
    src,
    width: 1200,
    height: 800,
    alt,
});

export const programmeCatalog = [
    {
        slug: "marketing-programmes",
        title: "Marketing Programmes",
        seo: {
            title: "Marketing Programmes | Rise N Shine",
            description: "Marketing programmes that progress from fundamentals to AI-driven strategies, giving learners practical skills to lead modern marketing teams.",
        },
        image: createImageData("/images/marketing-bg.jpg", "Marketing Programmes"),
        description: marketingDescription,
        imagePosition: "left",
        banner: {
            image: "/images/marketing-bg.jpg",
            title: "Marketing and Sales Management"
        },
        programmes: [
            {
                title:
                    "Marketing and Sales Management Professional Development Programme",
                desc: "A strong foundation in core marketing and sales concepts, designed to prepare learners with practical skills that translate directly into business success.",
                icon: "vision.png",
                modules: [
                    "Principals of Marketing",
                    "Digital Marketing",
                    "Sales & Marketing",
                    "Key Account Management",
                    "Banking",
                    "Real Estate Marketing",
                    "FMCG",
                    "Market Research",
                ],
            },
            {
                title: "Professional Marketing Management Development Programme",
                desc: "An advanced step into specialised areas of marketing, blending technology, financial services, and digital commerce to prepare learners for leadership roles.",
                label: "Advanced Level 1",
                icon: "vision.png",
                modules: [
                    "Sales & Distribution Management",
                    "Marketing of Financial Services",
                    "AI-Driven Digital Marketing",
                    "MarTech & Marketing Automation Tools",
                    "Retail Management & Digital Commerce",
                    "Organisational Marketing",
                    "Digital Storytelling",
                ],
            },
            {
                title: "Professional Marketing Management Development Programme",
                desc: "A cutting-edge programme that sharpens expertise in consumer behaviour, technology-driven strategies, and performance marketing, equipping learners to lead growth in dynamic markets.",
                label: "Advanced Level 2",
                icon: "vision.png",
                modules: [
                    "Marketing Management",
                    "Phygital Consumer Behavior",
                    "Technology & AI",
                    "Services Marketing",
                    "Growth Hacking and Performance Marketing",
                    "Market Research and Analytics",
                ],
            },
        ],
    },
    {
        slug: "finance-programmes",
        title: "Finance Programmes",
        seo: {
            title: "Finance Programmes | Rise N Shine",
            description:
                "Finance programmes that cover banking, valuation, portfolio strategy, and global reporting standards through real-world application.",
        },
        description: financeDescription,
        imagePosition: "right",
        banner: {
            image: "/images/finance-bg.jpg",
            title: "Finance Management",
        },
        image: createImageData("/images/finance-bg.jpg", "Finance Programmes"),
        programmes: [
            {
                title: "Finance Management Professional Development Programme",
                desc: "A comprehensive foundation in financial management, covering banking, valuation, markets, and forecasting, designed to build confidence in core financial practices.",
                icon: "vision.png",
                modules: [
                    "Financial Management in Banking",
                    "Understanding Net Present Value",
                    "Capital Markets",
                    "Financial Modelling",
                    "Costing",
                    "Budgeting and Forecasting",
                    "Stock Valuation",
                    "Islamic Finance",
                ],
            },
            {
                title: "Professional Financial Management Development Programme",
                desc: "An advanced exploration of financial markets, investment strategies, and corporate ethics, with a strong focus on portfolio management and digital storytelling in finance.",
                icon: "vision.png",
                label: "Advanced Level 1",
                modules: [
                    "Business Accounting & Costing",
                    "Financial Markets and Instruments",
                    "Investment Analysis and Portfolio Management",
                    "Commercial Banking and Financial Services",
                    "Stock Market & Technical Analysis",
                    "Corporate Issuers & Ethics",
                    "Digital Storytelling",
                ],
            },
            {
                title: "Professional Financial Management Development Programme",
                desc: "A specialised programme that deepens expertise in financial modelling, equity valuation, derivatives, and international reporting standards, preparing learners for leadership in global finance.",
                label: "Advanced Level 2",
                icon: "vision.png",
                modules: [
                    "Financial Management",
                    "Financial Modelling & Equity Valuation",
                    "Financial Derivatives",
                    "Corporate Restructuring",
                    "Fixed Income Investments",
                    "International Financial Reporting Standards",
                ],
            },
        ],
    },
    {
        slug: "digital-storytelling-programmes",
        title: "Digital Storytelling Programmes",
        seo: {
            title: "Digital Storytelling Programmes | Rise N Shine",
            description:
                "Digital storytelling programmes that blend creative thinking, branding, technology platforms, and ethical narrative design for a digital-first world.",
        },
        description: digitalDescription,
        imagePosition: "left",
        banner: {
            image: "/images/digital-storytelling-bg.jpg",
            title: "School of Digital Storytelling",
        },
        image: createImageData(
            "/images/digital-storytelling-bg.jpg",
            "Digital Storytelling Programmes",
        ),
        programmes: [
            {
                title: "School of Digital Storytelling",
                desc: "A specialised school that nurtures creative talents capable of crafting compelling narratives for brands and causes across digital platforms.",
                icon: "vision.png",
                modules: [
                    "Foundation of Storytelling",
                    "Crafting Digital Narratives",
                    "Platforms and Tools",
                    "Branding and Marketing through Stories",
                    "Ethics and Social Impact",
                    "Practical Application and Industry Readiness",
                ],
            },
        ],
    },
];

export const getProgrammesDataBySlug = (slug) => {
    return programmeCatalog.find((programme) => programme.slug === slug);
}
