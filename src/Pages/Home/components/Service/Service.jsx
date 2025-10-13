import serviceThumb from "/images/service_3.png";
import serviceThumb2 from "/images/service_4.png";
import serviceIcon from "/images/service_icon1.png";
import serviceIcon2 from "/images/service_icon2.png";
import ServiceCard from "./ServiceCard";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceNavigation from "./ServiceNavigation";

const ServiceData = [
    {
        id: 1,
        serviceIcon: serviceIcon,
        serviceSubTitle: "Finance",
        serviceTitle: "Investment Idea",
        serviceDesc: "Business visualize strategic informatic beanchmark",
        serviceUrl: "/service_details",
        btnContent: "View Details",
        btnIcon: <GoArrowUpRight />,
        serviceThumb: serviceThumb,
    },
    {
        id: 2,
        serviceIcon: serviceIcon2,
        serviceSubTitle: "Service",
        serviceTitle: "Investment Strategies",
        serviceDesc: "Business visualize strategic informatic beanchmark",
        serviceUrl: "/service_details",
        btnContent: "View Details",
        btnIcon: <GoArrowUpRight />,
        serviceThumb: serviceThumb2,
    },
    {
        id: 3,
        serviceIcon: serviceIcon,
        serviceSubTitle: "Offer",
        serviceTitle: "Smart Investment",
        serviceDesc: "Business visualize strategic informatic beanchmark",
        serviceUrl: "/service_details",
        btnContent: "View Details",
        btnIcon: <GoArrowUpRight />,
        serviceThumb: serviceThumb,
    },
    {
        id: 4,
        serviceIcon: serviceIcon2,
        serviceSubTitle: "Finance",
        serviceTitle: "Expert Investment",
        serviceDesc: "Business visualize strategic informatic beanchmark",
        serviceUrl: "/service_details",
        btnContent: "View Details",
        btnIcon: <GoArrowUpRight />,
        serviceThumb: serviceThumb2,
    },
];

const Service = () => {
    const settings = {
        loop: true,
        spaceBetween: 30,
        speed: 1000,
        initialSlide: 1,
        autoplay: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.5,
            },
            992: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2.5,
            },
        },
    };

    return (
        <section className="relative z-10 pt-28 pb-[120px] bg-BodyBg">
            <div className="Container">
                <div className="mb-4 md:-mb-[100px] lg:-mb-[120px]">
                    <div className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor uppercase mb-3">
                        Programs
                    </div>
                    <h2 className="font-FiraSans font-semibold text-HeadingColor text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
                        Programs We Offers
                    </h2>
                </div>
            </div>
            <div className="ml-0 lg:ml-7 xl:ml-[46px] 2xl:ml-[314px]">
                <Swiper {...settings}>
                    {ServiceData.map(
                        ({
                            id,
                            serviceIcon,
                            serviceSubTitle,
                            serviceTitle,
                            serviceDesc,
                            btnContent,
                            serviceUrl,
                            btnIcon,
                            serviceThumb,
                        }) => {
                            return (
                                <>
                                    <SwiperSlide
                                        key={id}
                                        className="pt-24 md:pt-[120px] lg:pt-[150px]"
                                    >
                                        <ServiceCard
                                            serviceIcon={serviceIcon}
                                            serviceSubTilte={serviceSubTitle}
                                            serviceTitle={serviceTitle}
                                            serviceDesc={serviceDesc}
                                            btnContent={btnContent}
                                            serviceUrl={serviceUrl}
                                            btnIcon={btnIcon}
                                            serviceThumb={serviceThumb}
                                        />
                                    </SwiperSlide>
                                </>
                            );
                        }
                    )}
                    <ServiceNavigation />
                </Swiper>
            </div>
        </section>
    );
};

export default Service;
