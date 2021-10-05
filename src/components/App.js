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
          />
        )}
      </div>
      <div className="container">
        <div className="container-item">
          <h3>REQUEST</h3>
          <FormRequest
            showModal={showModal}
            responseHeaders={responseHeaders}
            setResponseHeaders={setResponseHeaders}
          />
        </div>
        <div className="container-item">
          <h3>RESPONSE</h3>
          <Response responseHeaders={responseHeaders} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
