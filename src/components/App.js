import React from "react";
import FormRequest from "./FormRequest";
import Response from "./Response";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="container-item">
          <FormRequest />
        </div>
        <div className="container-item">
          <Response />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
