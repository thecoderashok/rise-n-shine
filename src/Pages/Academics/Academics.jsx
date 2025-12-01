import Button from "../../components/Button/Button";
import Image from "../../components/Image";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import ContactSec from "../components/ContactSec";
import PageBannerSec from "../components/PageBannerSec";
import ProgrammeCard from "./components/ProgrammeCard";
import { usePageSEO } from "../../hook/usePageSEO";

const programme_marketing = [
    {
        title: "Marketing and Sales Management Professional Development Programme",
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
            "Market Research"
        ]
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
            "Digital Storytelling"
        ]
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
            "Market Research and Analytics"
        ]
    }
];

const programme_finance = [
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
            "Islamic Finance"
        ]
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
            "Digital Storytelling"
        ]
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
            "International Financial Reporting Standards"
        ]
    }
];


const Academics = () => {
    usePageSEO({
        title: "Academics - Professional Development Programmes | Rise N Shine",
        canonical: `${window.location.origin}/academics`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle="Academics"
                title="From Classroom to Global Careers"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Academics" }
                ]}
                imageSrc="/images/hero-3.jpg"
            />

            <section className="about-intro-sec programmes-intro sec-gray">
                <div className="container">
                    <div className="row page-text-content align-items-center">
                        <div className="col-lg-6 left-side">
                            <ScrollReveal direction="clip-scale-out-downward" delay={0.1}>
                                <div className="image-wrapper">
                                    <Image
                                        src="/images/hero-2.jpg"
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="clip-fade-up" delay={0.25}>
                            <div className="col-lg-6">
                                <div className="heading-wrapper">
                                    <h2 className="title-text">
                                        Marketing Programmes
                                    </h2>
                                </div>
                                <div className="text-content py-0">
                                    <p>
                                        The Professional Marketing Management Development Programmes at Rise and Shine Institute of Learning are designed to equip learners with a comprehensive foundation in modern marketing and sales. Each programme progresses from essential principles to advanced strategies, combining academic depth with real-world application. Students engage with diverse modules ranging from digital marketing, sales and distribution, and financial services marketing, to cutting-edge areas such as AI-driven strategies, marketing technology, and growth hacking. This structured approach ensures that every learner develops not only a strong theoretical understanding but also the practical skills and global perspective required to excel in today's competitive business environment.
                                    </p>

                                    <Button textLabel="Learn More" link={`#`} />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="programmes-list-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="programmes-list">
                                {programme_marketing.map((program, index) => (
                                    <ProgrammeCard
                                        key={program.title ?? index}
                                        program={program}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-intro-sec programmes-intro sec-gray">
                <div className="container">
                    <div className="row page-text-content align-items-center">
                        <div className="col-lg-6 left-side">
                            <ScrollReveal direction="clip-scale-out-downward" delay={0.1}>
                                <div className="image-wrapper">
                                    <Image
                                        src="/images/hero-2.jpg"
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="clip-fade-up" delay={0.25}>
                            <div className="col-lg-6">
                                <div className="heading-wrapper">
                                    <h2 className="title-text">
                                        Finance Programmes
                                    </h2>
                                </div>
                                <div className="text-content py-0">
                                    <p>
                                        The Finance Management Professional Development Programmes at Rise and Shine Institute of Learning are designed to build expertise in the principles and practices that drive global financial systems. Beginning with foundational concepts such as banking, budgeting, valuation, and forecasting, the programmes advance into specialised areas including portfolio management, financial derivatives, equity valuation, and international reporting standards. Each stage combines rigorous academic learning with practical application, enabling learners to understand financial markets, master analytical tools, and make informed strategic decisions. By engaging with real-world case studies, simulations, and industry exposure, students develop the agility, technical acumen, and ethical perspective required to excel in the fast-changing financial sector and lead with confidence across global markets.
                                    </p>

                                    <Button textLabel="Learn More" link={`#`} />
                                </div>
                            </div>

                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="programmes-list-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="programmes-list">
                                {programme_finance.map((program, index) => (
                                    <ProgrammeCard
                                        key={program.title ?? index}
                                        program={program}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-intro-sec programmes-intro sec-gray">
                <div className="container">
                    <div className="row page-text-content align-items-center">
                        <div className="col-lg-6 left-side">
                            <ScrollReveal direction="clip-scale-out-downward" delay={0.1}>
                                <div className="image-wrapper">
                                    <Image
                                        src="/images/hero-2.jpg"
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal direction="clip-fade-up" delay={0.25}>
                            <div className="col-lg-6">
                                <div className="heading-wrapper">
                                    <h2 className="title-text">
                                        Digital Storytelling Programmes
                                    </h2>
                                </div>
                                <div className="text-content py-0">
                                    <p>
                                        The School of Digital Storytelling at Rise and Shine Institute of Learning is designed to cultivate creative thinkers who understand the power of narrative in a digital-first world. The curriculum introduces learners to the timeless art of storytelling and then extends it into modern contexts through platforms, tools, branding, and marketing. By blending creativity with ethical responsibility and practical industry readiness, the programme equips students to craft compelling narratives that inspire, engage, and influence. Learners graduate with the skills to navigate diverse media landscapes and the confidence to transform ideas into impactful digital stories that resonate across cultures and industries.
                                    </p>

                                    <Button textLabel="Learn More" link={`#`} />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="faculty-leadership-sec sec-dark">
                <div className="container">
                    <div className="row page-text-content align-items-center">
                        <div className="col-lg-6 left-side">
                            <ScrollReveal direction="clip-scale-out-downward" delay={0.1}>
                                <div className="image-wrapper">
                                    <Image
                                        src="/images/faculty.jpg"
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="clip-fade-up" delay={0.25}>
                            <div className="col-lg-6">
                                <div className="heading-wrapper">
                                    <h2 className="title-text">
                                        Faculty Profiles
                                    </h2>
                                </div>
                                <div className="text-content py-0">
                                    <p>
                                        At Rise and Shine Institute of Learning, our strength lies in the calibre of our leadership and faculty. The institute is guided by accomplished professionals who bring together academic excellence, industry expertise, and a global perspective. From visionary directors and senior academicians to dynamic officers shaping learning and operations, every member of the team contributes to creating an environment where knowledge meets real-world relevance. Their diverse qualifications in management, medicine, psychology, economics, and marketing reflect a multidisciplinary foundation that equips students with a truly holistic education. Collectively, they form a team committed to nurturing future-ready professionals who are prepared to excel in an increasingly competitive and interconnected world.
                                    </p>

                                    <Button textLabel="Meet our team" link={`/faculties`} />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <ContactSec />



        </>
    );
};

export default Academics;
