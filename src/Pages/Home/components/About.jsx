import aboutThumb from "/images/about_2.png";
import thumb from "/images/like.png";
import { FaRegThumbsUp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";

const About = () => {
    return (
        <section className="pb-[120px] pt-[120px] relative z-10">
            <div className="Container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-16 items-center">
                    <div className="relative z-10">
                        <img
                            src={aboutThumb}
                            draggable="false"
                            className="w-full 2xl:w-[inherit]"
                        />
                        <div className="absolute -top-4 sm:-top-16 right-9 md:-top-8 sm:right-12 md:right-24 2xl:-top-[70px] 2xl:right-[56px] size-[74px] sm:size-[142px] lg:size-[120px] xl:size-[180px] bg-BodyBg4 rounded-full flex items-center justify-center">
                            <div className="size-14 sm:size-24 lg:size-28 xl:size-[120px] animate-rotational ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 250.5 250.5"
                                    className="overflow-visible"
                                >
                                    <path
                                        d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                                        id="e-path-35ee1b2"
                                        className="fill-transparent"
                                    ></path>
                                    <text className="font-FiraSans text-[32px] uppercase">
                                        <textPath
                                            id="e-text-path-35ee1b2"
                                            href="#e-path-35ee1b2"
                                            startOffset="0%"
                                            className="fill-HeadingColor"
                                        >
                                            * Business Const. * Agency 2025 * Finance Consult
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <img src={thumb} draggable="false" />
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor uppercase mb-3">About Us</div>
                        <h1 className="font-FiraSans font-semibold text-HeadingColor text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
                            About Rise N Shine 
                        </h1>
                        <p className="font-FiraSans text-TextColor2">
                            At Rise N Shine, we are dedicated to fostering an educational environment that not only challenges our students academically but also prepares them thoroughly for the demands of the global job market. Our Certification Tracks are meticulously designed to blend rigorous academic theory with practical, real-world applications, ensuring that our students are not just learners, but innovators and industry leaders of tomorrow.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-8 mt-[50px]">
                            <Link to={"/contact"}>
                                <button className="primary-btn2">
                                    <FaRegThumbsUp />
                                    {`Explore More`}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
