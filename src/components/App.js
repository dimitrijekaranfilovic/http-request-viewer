import React, { useState } from "react";
import FormRequest from "./FormRequest";
import Response from "./Response";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const App = () => {
  const { modalState, showModal, closeModal } = useModal();
  const [responseHeaders, setResponseHeaders] = useState([]);

  return (
    <React.Fragment>
      <div className="modal-container">
        {modalState.isModal && (
          <Modal
            messageContent={modalState.messageContent}
            messageType={modalState.messageType}
            closeModal={closeModal}
            displayTime={modalState.displayTime}
          />
        )}
      </div>
      <div className="bigger-container">
        <div className="container">
          <div className="container-item">
            <h3>REQUEST</h3>
            <FormRequest
              showModal={showModal}
              setResponseHeaders={setResponseHeaders}
            />
          </div>
          <div className="container-item">
            <h3>RESPONSE</h3>
            <Response responseHeaders={responseHeaders} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
