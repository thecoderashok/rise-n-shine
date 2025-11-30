import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import ContactSec from "../components/ContactSec";
import FacultyCarousel from "./components/FacultyCarousel";

const Faculties = () => {
    const facultiesData = [
        {
            name: "Dr. Somnath Prasad Patil",
            designation: "Director",
            education:
                "Bachelor's Degree in Information Technology | MBA | Ph.D. in Management",
            image: "Dr-Somnath-Patil.jpg",
        },
        {
            name: "Dr. Rohini Somnath Patil",
            designation: "Director",
            education: "MBBS | DDHN | DDSEN | Certified Anti-Aging Specialist | ODM",
            image: "Dr-Rohini-Patil.jpg",
        },
        {
            name: "Dr. Amol Gawande",
            designation: "General Manager",
            education: "MA - Psychology | Ph.D. in Financial Management",
            image: "Dr-Amol-Gawande.jpg",
        },
        {
            name: "Dr. Mohd Osama Ahmad",
            designation: "Chief Learning Officer",
            education: "M.Com | M.Phil | Ph.D. in Economics",
            image: "Dr-Ahmad.jpg",
        },
        {
            name: "Dr. Sankalp Dandawate",
            designation: "Chief Learning Officer",
            education: "MBA | Ph.D. in Marketing Management",
            image: "Dr-Sankalp-Dandawate.jpg",
        },
        {
            name: "Ms. Suman Deokota",
            designation: "Deputy Learning Officer",
            education: "M.Com | MA - Psychology",
            image: "Ms-Suman-Deokota.jpg",
        },
        {
            name: "Ms. Palak Khanna",
            designation: "Deputy Operations Officer",
            education: "MA | MBA Marketing Management",
            image: "Ms-Palak-Khanna.jpg",
        },
    ];

    return (
        <>
            <PageBannerSec
                pageTitle="Faculties"
                title={
                    <>
                        The minds shaping
                        <br />
                        future-ready leaders
                    </>
                }
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Faculties" }]}
                imageSrc="/images/faculty.jpg"
            />
            <FacultyCarousel facultiesData={facultiesData} />
            <ContactSec />
        </>
    );
};

export default Faculties;
