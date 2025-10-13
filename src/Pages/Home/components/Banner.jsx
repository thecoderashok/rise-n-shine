import { Link } from "react-router";

const Banner = () => {
    return (
        <section className="bg-[url('/images/21243.jpg')] bg-cover bg-center bg-no-repeat h-[90vh] sm:h-[100vh] md:h-[100vh] lg:h-[90vh] xl:h-[85vh] 2xl:h-[100vh] flex items-center relative z-1 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:z-10">
            <div className="Container relative z-10">
                <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[72px]">
                    <div className="relative">
                        <h1 className="font-FiraSans font-semibold text-white text-[30px] leading-[36px] sm:text-[46px] sm:leading-[52px] md:text-[68x] lg:text-[50px] xl:text-[54px] xl:leading-[68px] 2xl:text-[56px] 2xl:leading-[70px]">
                            Crafting the Digital
                            <br />
                            Solutions for your
                            <br />
                            <span className="relative before:absolute before:bottom-3 before:left-0 before:w-full before:h-[10px] before:bg-PrimaryColor before:-z-10">
                                Business
                            </span>
                        </h1>
                        <p className="font-FiraSans text-white mb-[38px] mt-[22px]">
                            Continually plagiarize virtual web services with resource{" "}
                            <br className="hidden xl:block 2xl:hidden" />
                            maximizing <br className="hidden 2xl:block" /> action items.
                            Globally build front-end
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                            <Link to={"/contact"}>
                                <button className="primary-btn">{`Get Started now`}</button>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="relative md:flex justify-end hidden">
                        <img
                            src={"/images/hero-banner.jpg"}
                            draggable="false"
                            className="md:w-11/12 xl:w-[inherit] 2xl:max-w-[inherit] lg:-mb-24 xl:-mb-11 relative xl:left-[124px]"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
