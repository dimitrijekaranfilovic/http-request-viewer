import React from "react";
import FormRequest from "./FormRequest";
import Response from "./Response";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const App = () => {
  const { modalState, showModal, closeModal } = useModal();

  return (
    <React.Fragment>
      <div className="modal-container">
        {modalState.isModal && (
          <Modal
            messageContent={modalState.messageContent}
            messageType={modalState.messageType}
            closeModal={closeModal}
          />
        )}
      </div>
      <div className="container">
        <div className="container-item">
          <FormRequest showModal={showModal} />
        </div>
        <div className="container-item">
          <Response />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
