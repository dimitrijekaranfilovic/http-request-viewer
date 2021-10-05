import React, { useEffect } from "react";

const Modal = ({ messageType, messageContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => closeModal(), 3000);
  }, [closeModal]);
  const modalClass = `modal ${messageType}`;
  return (
    <React.Fragment>
      <div className={modalClass}>
        <h6 className={messageType}>{messageContent}</h6>
      </div>
    </React.Fragment>
  );
};

export default Modal;
