import React from "react";
import { useState } from "react";
import { Modal } from "../../components";
import { ModalContext } from "./ModalContext";


export const ModalProvider = ({ children })=> {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (modalConfig)=>{
        setModalContent(modalConfig);
        setModalOpened(true);
    }
    const closeModal = ()=>{
        setModalOpened(false);
    }
    const velueModalProvider = {
        openModal,
        closeModal
    }
   return (
    <ModalContext.Provider value={velueModalProvider}>
        {modalOpened && <Modal {...modalContent} />}
        {children}
    </ModalContext.Provider>
   )
}
