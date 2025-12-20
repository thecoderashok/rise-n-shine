import React from 'react';
import Image from '../../../components/Image';
import SecTitle from '../../../components/SecTitle';

const facilitiesData = [
    {
        icon: "fa-solid fa-wifi",
        text: "Round-the-clock Wi-Fi connectivity for seamless learning"
    },
    {
        icon: "fa-solid fa-mug-hot",
        text: "Refreshment stations with hot and cold beverages, along with purified drinking water"
    },
    {
        icon: "fa-solid fa-couch",
        text: "Dedicated student lounge for relaxation and informal collaboration"
    },
    {
        icon: "fa-solid fa-laptop",
        text: "AI-enabled classrooms, digital library with soft resources, and smart conference rooms"
    },
    {
        icon: "fa-solid fa-microphone",
        text: "Podcast studio and recreation room with indoor leisure activities"
    },
    {
        icon: "fa-solid fa-heart",
        text: "Personal counselling services supporting mental well-being and holistic growth"
    },
    {
        icon: "fa-solid fa-newspaper",
        text: "Access to daily newspapers, magazines, and a responsive inquiry and reception centre"
    }
];

const CampusFacilitiesSec = () => {
    return (
        <section className="campus-facilities-sec p-0">
            <div className="sticky-sec">
                <div className="img-wrapper">
                    <Image
                        src="/images/campus-facility-bg.jpg"
                        alt="Campus Facilities"
                        width={1920}
                        height={1080}
                    />
                </div>

                <div className="inner-content">
                    <p>
                        The Rise and Shine campus in Dubai combines state-of-the-art infrastructure with modern amenities to create an environment that inspires excellence, innovation, and well-being. From AI-enabled classrooms to dedicated student lounges, every facility is designed to support both academic growth and personal development.
                    </p>
                </div>
            </div>
            <div className="inner-sec">
                <div className="row">
                    <div className="col-12">
                        <SecTitle
                            mainTitle={<>Campus Facilities</>}
                        />
                    </div>

                    <div className="col-12">
                        <div className="facilities-list-wrapper">

                            {facilitiesData.map((facility, index) => (
                                <div className="facility-card" key={index}>
                                    <div className="icon">
                                        <i className={facility.icon}></i>
                                    </div>
                                    <p>{facility.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampusFacilitiesSec;

