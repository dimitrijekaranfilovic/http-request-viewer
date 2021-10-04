import React from "react";

const Response = () => {
  return (
    <React.Fragment>
      <div className="response-div">
        <h3>RESPONSE</h3>
        <textarea
          name="response"
          id="response"
          cols="50"
          rows="15"
          readOnly
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default Response;
