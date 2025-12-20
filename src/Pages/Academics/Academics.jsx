import ContactSec from "../components/ContactSec";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";
import FacultyLeadershipSec from "../Faculties/components/FacultyLeadershipSec";
import LeftRightImageTextSec from "../components/LeftRightImageTextSec";
import {
    programmeCatalog,
    Programmes_List_Page_Base_Path,
} from "../../lib/programmes";

const Academics = () => {
    usePageSEO({
        title: "Programmes - Rise N Shine",
        canonical: `${window.location.origin}/academics`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle="Programmes"
                title="From Classroom to Global Careers"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Academics" },
                    { label: "Programmes" }
                ]}
                imageSrc="/images/hero-3.jpg"
            />

            {programmeCatalog.map((programme) => {
                const detailPath = `${Programmes_List_Page_Base_Path}/${programme.slug}`;

                return (
                    <LeftRightImageTextSec
                        key={programme.slug}
                        imagePosition={programme.imagePosition}
                        image={programme.image}
                        mainTitle={programme.title}
                        content={programme.description}
                        imageColClass={"col-lg-6"}
                        contentColClass={"col-lg-6"}
                        buttons={[
                            {
                                textLabel: "Read More",
                                link: detailPath,
                            },
                        ]}
                    />
                );
            })}

            <FacultyLeadershipSec />

            <ContactSec />
        </>
    );
};

export default Academics;
