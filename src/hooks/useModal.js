import { useState } from "react";

export const useModal = () => {
  const [modalState, setModalState] = useState({
    messageContent: "",
    messageType: "",
    isModal: false,
  });

  const closeModal = () => {
    setModalState((oldState) => {
      return { ...oldState, isModal: false };
    });
  };
  const showModal = (messageContent, messageType) => {
    setModalState({ messageContent, messageType, isModal: true });
  };

  return { modalState, showModal, closeModal };
};
