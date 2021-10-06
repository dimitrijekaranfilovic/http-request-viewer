import React, { useState, lazy, Suspense } from "react";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const FormRequest = lazy(() => import("./FormRequest"));
const Response = lazy(() => import("./Response"));

const fallbackFormRequest = () => <p>Loading form request component..</p>;
const fallbackResponse = () => <p>Loading response component...</p>;

const App = () => {
  const { modalState, showModal, closeModal } = useModal();
  const [response, setResponse] = useState(undefined);

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
            <Suspense fallback={fallbackFormRequest()}>
              <FormRequest showModal={showModal} setResponse={setResponse} />
            </Suspense>
          </div>
          <div className="container-item">
            <h3>RESPONSE</h3>
            <Suspense fallback={fallbackResponse()}>
              <Response response={response} />
            </Suspense>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
