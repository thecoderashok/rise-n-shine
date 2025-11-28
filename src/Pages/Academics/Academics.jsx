import PageBannerSec from "../components/PageBannerSec";

const Academics = () => {
    return (
        <>
            <PageBannerSec
                pageTitle="Academics"
                title="From Classroom to Global Careers"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Academics" },
                ]}
                imageSrc="/images/banner/hero-3.jpg"
            />
        </>
    );
};

export default Academics;
