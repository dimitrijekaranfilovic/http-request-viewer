import React, { useState, useEffect } from "react";

const Response = ({ response }) => {
  //const headers = response.headers;
  const [responseData, setResponseData] = useState({
    status: "",
    statusText: "",
    headers: [],
  });

  //const [headers, setHeaders] = useState([]);
  //const

  useEffect(() => {
    if (response) {
      setResponseData({
        status: response.status,
        statusText: response.statusText,
        headers: Array.from(response.headers.entries()),
      });
    }
  }, [response]);

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
          value={responseData.status}
        />
        <input
          type="text"
          name="status-text"
          id="status-text"
          placeholder="Status text"
          readOnly
          value={responseData.statusText}
        />
      </section>

      <div>
        <h4>Headers</h4>
        <div className="header-container">
          {responseData.headers.map((header) => {
            return (
              <div key={header[0]}>
                <input
                  type="text"
                  value={header[0]}
                  readOnly
                  className="header-key-input"
                />
                <input
                  type="text"
                  value={header[1]}
                  readOnly
                  className="header-value-input"
                />
              </div>
            );
          })}
          {responseData.headers.length === 0 && (
            <p>There are currently no headers.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Response;
