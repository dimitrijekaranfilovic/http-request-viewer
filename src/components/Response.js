import React from "react";

const Response = ({ responseHeaders }) => {
  return (
    <div>
      <section className="status-container">
        <input
          type="text"
          name="status-code"
          id="status-code"
          placeholder="Status code"
          readOnly
          style={{
            width: "25%",
          }}
        />
        <input
          type="text"
          name="status-text"
          id="status-text"
          placeholder="Status text"
          readOnly
        />
      </section>

      <div>
        <h4>Headers</h4>
        <div className="header-container">
          {responseHeaders.map((header) => {
            return (
              <div key={header.key}>
                <input type="text" value={header.key} readOnly />
                <input type="text" value={header.value} readOnly />
              </div>
            );
          })}
          {responseHeaders.length === 0 && (
            <p>There are currently no headers.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Response;
