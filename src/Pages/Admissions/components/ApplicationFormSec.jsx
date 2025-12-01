import React, { useState } from "react";
import SecTitle from "../../../components/SecTitle";
import Button from "../../../components/Button/Button";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import AdmissionPageForm from "../../../components/Forms/AdmissionPageForm";
import { useClassNames } from "../../../hook/useClassNames";

const ApplicationFormSec = () => {
    const classes = useClassNames();
    const [selectedFormType, setSelectedFormType] = useState(null);

    const formTypes = [
        { id: "marketing", label: "Marketing", icon: "fa-solid fa-bullhorn" },
        { id: "finance", label: "Finance", icon: "fa-solid fa-chart-line" },
        { id: "digital-storytelling", label: "Digital Storytelling", icon: "fa-solid fa-pen-nib" }
    ];

    const handleDownloadForm = (e) => {
        e.preventDefault();
        alert("Download form coming soon");
    };

    const handleOpenModal = (e) => {
        e.preventDefault();
        const modalElement = document.getElementById("applyOnlineModal");
        if (modalElement && window.bootstrap) {
            const modal = new window.bootstrap.Modal(modalElement);
            modal.show();
        }
    };

    return (
        <>
            <section className="application-form-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <SecTitle
                                mainTitle={<><b className="colored">Application Form</b> <br /> Specialization Programmes</>}
                                desc={"Download the application form for your preferred programme or apply online directly through our streamlined application process."}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-types-wrapper">
                                <div className="form-types-grid">
                                    {formTypes.map((formType, index) => {
                                        const itemClasses = classes(
                                            "form-type-item",
                                            `form-type-${formType.id}`,
                                            selectedFormType === formType.id && "active"
                                        );
                                        return (
                                            <ScrollReveal key={index} direction="clip-scale-in-downward" delay={0.1 * (index + 1)}>
                                                <div className="form-type-item-wrapper">
                                                    <div
                                                        className={itemClasses}
                                                        onClick={() => setSelectedFormType(formType.id)}
                                                    >
                                                        <div className="icon">
                                                            <i className={formType.icon}></i>
                                                        </div>
                                                        <div className="label">
                                                            <p>{formType.label}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ScrollReveal>
                                        );
                                    })}
                                </div>
                                <ScrollReveal direction="clip-scale-out-downward" delay={0.4}>
                                    <div className="form-actions">
                                        <Button
                                            textLabel="Download Form"
                                            iconClass="fa-solid fa-download"
                                            onClick={handleDownloadForm}
                                            customClass="download-btn"
                                        />
                                        <Button
                                            textLabel="Apply Online"
                                            iconClass="fa-solid fa-arrow-right-to-bracket"
                                            onClick={handleOpenModal}
                                            customClass="apply-online-btn style-2"
                                        />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apply Online Modal */}
            <div className="modal fade" id="applyOnlineModal" tabIndex="-1" aria-labelledby="applyOnlineModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="applyOnlineModalLabel">Apply Online</h5>
                            <button type="button" className="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <AdmissionPageForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplicationFormSec;

