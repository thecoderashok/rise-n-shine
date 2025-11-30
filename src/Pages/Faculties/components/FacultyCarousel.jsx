import React from "react";
import { SwiperSlide } from "swiper/react";
import SecTitle from "../../../components/SecTitle";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import FacultyCard from "./FacultyCard";

const FacultyCarousel = ({ facultiesData }) => {

    return (
        <section className="faculties-carousel-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <SecTitle
                            mainTitle="Faculty Profiles"
                        />
                    </div>
                    <div className="col-12">
                        <div className="faculties-carousel">
                            <SwiperCarousel
                                slidesPerView={1}
                                spaceBetween={18}
                                navigationBtns
                                showPagination
                                paginationType="progressbar"
                                loop={false}
                                breakpoints={{
                                    575: { slidesPerView: 1.05 },
                                    768: { slidesPerView: 1.5 },
                                    991: { slidesPerView: 2.1 },
                                    1280: { slidesPerView: 3 },
                                }}
                            >
                                {facultiesData?.map((profile, index) => (
                                    <SwiperSlide key={index}>
                                        <FacultyCard profile={profile} />
                                    </SwiperSlide>
                                ))}
                            </SwiperCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacultyCarousel;

