import React, { useEffect, useRef } from "react";
import { useLoader } from "../../context/Loader/LoaderContext";
import { useLocation } from "react-router";
import { useModal } from "../../context/Modal/ModalContext";
import AdmissionPageForm from "../Forms/AdmissionPageForm";

const MODAL_NAME = "online_admission";

const OnlineAddmissionModal = ({
    // isOpen = false,
    onClose = () => { },
}) => {
    const { activeModalName, closeModal } = useModal();
    const { isMounted } = useLoader();
    const modalInstanceRef = useRef(null);
    const modalRef = useRef(null);
    const { pathname } = useLocation();

    const stopLenisScroll = (add) => {
        document.body.toggleAttribute("data-lenis-prevent", add);
    };

    useEffect(() => {
        if (!window.bootstrap) return;
        if (!isMounted) return;
        if (!modalRef.current) return;

        const element = modalRef.current;

        modalInstanceRef.current = new window.bootstrap.Modal(element, {
            backdrop: "static",
            keyboard: false,
        });

        const handleShown = () => stopLenisScroll(true);
        const handleHidden = () => {
            stopLenisScroll(false);
            onClose();
            closeModal()
        };

        element.addEventListener("shown.bs.modal", handleShown);
        element.addEventListener("hidden.bs.modal", handleHidden);

        return () => {
            element.removeEventListener("shown.bs.modal", handleShown);
            element.removeEventListener("hidden.bs.modal", handleHidden);
        };
    }, [isMounted, onClose, closeModal]);

    // useEffect(() => {
    //     if (!modalInstanceRef.current) return;

    //     if (isOpen) {
    //         modalInstanceRef.current.show();
    //     } else {
    //         modalInstanceRef.current.hide();
    //     }
    // }, [isOpen]);

    useEffect(() => {
        if (!modalInstanceRef.current) return;

        if (activeModalName === MODAL_NAME) {
            modalInstanceRef.current.show();
        } else {
            modalInstanceRef.current.hide();
        }
    }, [activeModalName]);

    return (
        <div
            className="modal fade"
            tabIndex={-1}
            ref={modalRef}
            key={pathname}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">
                            Apply Online
                        </h2>
                        <button type="button" className="btn-close-custom" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                            document.activeElement?.blur();
                            stopLenisScroll(false);
                        }}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className="modal-body">
                        <AdmissionPageForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineAddmissionModal;
