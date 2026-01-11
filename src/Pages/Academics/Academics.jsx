import ContactSec from "../components/ContactSec";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";
import FacultyLeadershipSec from "../Faculties/components/FacultyLeadershipSec";
import {
    programmeCatalog,
    Programmes_List_Page_Base_Path,
} from "../../lib/programmes";
import Image from "../../components/Image";
import Button from "../../components/Button/Button";
import { useLayoutEffect, useRef } from "react";

const Academics = () => {
    usePageSEO({
        title: "Programmes - Rise N Shine",
        canonical: `${window.location.origin}/programmes`,
    });

    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const containerEl = containerRef.current;
        if (!containerEl) return;

        const measure = () => {
            const colItems = containerEl.querySelectorAll(".col-item");

            colItems.forEach(col => {
                const title = col.querySelector(".title-text");
                const details = col.querySelector(".details-wrapper");
                if (!title || !details) return;

                // const titleHeight = title.offsetHeight;
                const detailsHeight = details.offsetHeight;

                const centerOffset = (detailsHeight) / 2;
                col.style.setProperty("--title-center-offset", `${centerOffset}px`);
            });
        };

        const handleResize = () => {
            requestAnimationFrame(measure);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const ro = new ResizeObserver(handleResize);
        containerEl.querySelectorAll(".col-item, .title-text, .details-wrapper")
            .forEach(el => ro.observe(el));

        if (document.fonts?.ready) {
            document.fonts.ready.then(handleResize).catch(() => { });
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            ro.disconnect();
        };
    }, []);


    return (
        <>
            <PageBannerSec
                pageTitle="Programmes"
                title="From Classroom to Global Careers"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Programmes" }
                ]}
                imageSrc="/images/programmes-banner.jpg"
            />


            <section className="programmes-cols-sec">
                <div className="cols-row" ref={containerRef}>
                    {programmeCatalog.map((programme, index) => {
                        const detailPath = `${Programmes_List_Page_Base_Path}/${programme.slug}`;

                        return (
                            <div className="col-item" key={index}>
                                <Image src={programme.image.src} alt={programme.image.alt} width={800} height={1200} />

                                <div className="inner">
                                    <div className="content-wrapper">
                                        <h2 className="title-text">{programme.title}</h2>

                                        <div className="details-wrapper">
                                            <Button textLabel={"Read More"} customClass={"style-1"} link={detailPath} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>


            <FacultyLeadershipSec />

            <ContactSec />
        </>
    );
};

export default Academics;

// <LeftRightImageTextSec
//     key={programme.slug}
//     imagePosition={programme.imagePosition}
//     image={programme.image}
//     mainTitle={programme.title}
//     content={programme.description}
//     imageColClass={"col-lg-6"}
//     contentColClass={"col-lg-6"}
//     buttons={[
//         {
//             textLabel: "Read More",
//             link: detailPath,
//         },
//     ]}
// />