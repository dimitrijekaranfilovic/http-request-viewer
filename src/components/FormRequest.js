import React, { useState, useRef } from "react";

const FormRequest = ({ showModal }) => {
  const [headers, setHeaders] = useState([]);
  const headerKey = useRef(null);
  const headerValue = useRef(null);
  const url = useRef(null);
  const method = useRef(null);

  const removeHeader = (key) => {
    setHeaders((oldHeaders) => {
      return oldHeaders.filter((header) => header.key !== key);
    });
  };

  const addHeader = () => {
    const key = headerKey.current.value;
    const value = headerValue.current.value;
    if (headerExists(key)) {
      showModal(`Header with name '${key}' already exists.`, "error");
    } else if (!key || !value) {
      showModal("Header name and value cannot be empty.", "error");
    } else {
      setHeaders((oldHeaders) => {
        const newHeaders = [...oldHeaders, { key, value }];
        headerKey.current.value = "";
        headerValue.current.value = "";
        return newHeaders;
      });
      showModal("Header successfully added.", "success");
    }
  };

  const headerExists = (headerKey) => {
    return headers.find((header) => header.key === headerKey) !== undefined;
  };

  const performRequest = async () => {
    //const requestHeaders = new Headers();
    //const request = new Request();
  };

  return (
    <React.Fragment>
      <div>
        <h3>FETCH</h3>
      </div>

      <section>
        <select name="request" id="request" ref={method}>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        <input type="text" name="url" id="url" ref={url} placeholder="url" />
      </section>

      <div>
        <h4>Options</h4>
      </div>

      <section>
        <h4>Headers</h4>
        <div className="header-container">
          {headers.map((header) => {
            return (
              <div key={header.key}>
                <input type="text" value={header.key} readOnly />
                <input type="text" value={header.value} readOnly />
                <button
                  type="button"
                  className="btn error-btn"
                  onClick={() => removeHeader(header.key)}
                >
                  &times;
                </button>
              </div>
            );
          })}
          {headers.length === 0 && (
            <strong>There are currently no headers.</strong>
          )}
        </div>
      </section>
      <br />
      <div>
        <input
          type="text"
          name="header-key"
          id="header-key"
          placeholder="Header name"
          ref={headerKey}
        />
        <input
          type="text"
          name="header-value"
          id="header-value"
          placeholder="Header value"
          ref={headerValue}
        />
        <button type="button" className="btn ok-btn" onClick={addHeader}>
          +
        </button>
      </div>
      <button type="button" className="btn info-btn" onClick={performRequest}>
        Perform
      </button>
    </React.Fragment>
  );
};

export default FormRequest;
