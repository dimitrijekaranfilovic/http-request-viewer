import { useState } from "react";

export const useModal = () => {
  const [modalState, setModalState] = useState({
    messageContent: "",
    messageType: "",
    isModal: false,
    displayTime: 3000,
  });

  const closeModal = () => {
    setModalState((oldState) => {
      return { ...oldState, isModal: false };
    });
  };
  const showModal = (messageContent, messageType, displayTime = 3000) => {
    setModalState({ messageContent, messageType, isModal: true, displayTime });
  };

  return { modalState, showModal, closeModal };
};
