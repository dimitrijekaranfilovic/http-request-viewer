import React, { useEffect } from "react";

const Modal = ({ messageType, messageContent, closeModal }) => {
  return (
    <React.Fragment>
      <h4 className={messageType}>{{ messageContent }}</h4>
    </React.Fragment>
  );
};

export default Modal;
