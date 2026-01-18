import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PageBannerSec from "../components/PageBannerSec";
import ProgrammeCard from "./components/ProgrammeCard";
import ContactSec from "../components/ContactSec";
import { usePageSEO } from "../../hook/usePageSEO";
import { Programmes_List_Page_Base_Path } from "../../lib/programmes";

const Programmes = () => {
    const { programmeSlug } = useParams();
    const navigate = useNavigate();
    const [programmesData, setProgrammesData] = useState(null);

    useEffect(() => {
        const loadProject = async () => {
            try {
                const module = await import("../../lib/programmes");
                const data = module.getProgrammesDataBySlug(programmeSlug);

                if (data) {
                    setProgrammesData(data);
                } else {
                    navigate("/academics");
                }
            } catch {
                navigate("/academics");
            }
        };

        loadProject();
    }, [programmeSlug, navigate]);

    const defaultTitle = "Programmes | Rise N Shine";

    const canonicalPath = programmesData
        ? `${Programmes_List_Page_Base_Path}/${programmesData.slug}`
        : "/academics";

    const origin = typeof window !== "undefined" ? window.location.origin : "";

    const metaTitle = programmesData?.seo?.title;
    const metaDescription = programmesData?.seo?.description;

    usePageSEO({
        title: metaTitle ?? defaultTitle,
        canonical: `${origin}${canonicalPath}`,
        metas: [
            { attr: "name", key: "title", content: metaTitle },
            { attr: "name", key: "description", content: metaDescription },
        ],
    });

    if (!programmesData) return null;

    const banner = programmesData.banner;
    const programmesList = programmesData.programmes;

    return (
        <>
            <PageBannerSec
                pageTitle={programmesData.title}
                title={banner?.title}
                banner={{
                    src: banner?.image,
                    alt: banner?.title ?? programmesData.title,
                }}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Academics" },
                    { label: "Programmes", href: "/programmes" },
                    { label: programmesData.title },
                ]}
            />

            {programmesData.description && (
                <section className="programmes-page-sec pb-0">
                    <div className="container">
                        <div className="row page-text-content">
                            <div className="col-12 text-center">
                                <div className="content-wrapper">
                                    <div
                                        className="para"
                                        dangerouslySetInnerHTML={{
                                            __html: programmesData.description,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {programmesList && (
                <section className="programmes-list-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="programmes-list">
                                    {programmesList.map((programme, index) => (
                                        <ProgrammeCard
                                            key={index}
                                            programme={programme}
                                            itemIndex={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <ContactSec />
        </>
    );
};

export default Programmes;
