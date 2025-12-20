import React, { useCallback, useState } from 'react'
import { ModalContext } from './ModalContext'

const ModalProvider = ({ children }) => {
    const [activeModalName, setActiveModalName] = useState(null);
    const [modalProps, setModalProps] = useState({});

    const openModal = useCallback(
        ({ modalName, props = {} }) => {
            if (!modalName) return;
            setActiveModalName(modalName);
            setModalProps(props);
        },
        []
    );

    const closeModal = useCallback(() => {
        setActiveModalName(null);
        setModalProps({});
    }, []);

    return (
        <ModalContext.Provider
            value={{
                activeModalName,
                modalProps,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;