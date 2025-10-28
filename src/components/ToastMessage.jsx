import React, { useEffect, useRef } from 'react'

const ToastMessage = ({ show, message, type = "success", delay = 2000, onClose }) => {
    const toastRef = useRef(null);

    useEffect(() => {
        if (!window.bootstrap) return
        if (!show || !toastRef.current) return;
        const toastElement = toastRef.current;


        const toast = new window.bootstrap.Toast(toastElement, { delay });

        toast?.show();
        const handleHidden = () => onClose?.();
        toastElement.addEventListener("hidden.bs.toast", handleHidden);

        return () => {
            toast?.dispose();
            toastElement.removeEventListener("hidden.bs.toast", handleHidden);
        };

    }, [show, delay, onClose]);

    return (
        <div className="toast-container" data-type={type}>
            <div ref={toastRef} className="toast" data-type={type} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body">
                    <i className={`${type === "error" ? "fa-regular fa-circle-exclamation" : "fa-solid fa-square-check"}`}></i>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}

export default ToastMessage;