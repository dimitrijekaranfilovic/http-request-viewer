import React, { useState, useRef } from "react";

const FormRequest = ({ showModal, responseHeaders, setResponseHeaders }) => {
  const [requestHeaders, setRequestHeaders] = useState([]);
  const headerKey = useRef(null);
  const headerValue = useRef(null);
  const url = useRef(null);
  const method = useRef(null);
  const mode = useRef(null);

  const removeRequestHeader = (key) => {
    setRequestHeaders((oldRequestHeaders) => {
      return oldRequestHeaders.filter((header) => header.key !== key);
    });
  };

  const addRequestHeader = () => {
    const key = headerKey.current.value;
    const value = headerValue.current.value;
    if (headerExists(key)) {
      showModal(`Header with name '${key}' already exists.`, "error");
    } else if (!key || !value) {
      showModal("Header name and value cannot be empty.", "error");
    } else {
      setRequestHeaders((oldRequestHeaders) => {
        const newRequestHeaders = [...oldRequestHeaders, { key, value }];
        headerKey.current.value = "";
        headerValue.current.value = "";
        return newRequestHeaders;
      });
      showModal("Header successfully added.", "success");
    }
  };

  const headerExists = (headerKey) => {
    return (
      requestHeaders.find((header) => header.key === headerKey) !== undefined
    );
  };

  const createRequestHeadersObject = () => {
    let headers = new Headers();
    requestHeaders.forEach((requestHeader) => {
      headers.append(requestHeader.key, requestHeader.value);
    });
    //console.log(headers);
    return headers;
  };

  const performRequest = async () => {
    //const requestRequestHeaders = new RequestHeaders();
    //const request = new Request();
    const headers = createRequestHeadersObject();
  };

  return (
    <div>
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
        <h4>Other options</h4>
      </div>

      <section className="options-container">
        <div>
          <label htmlFor="mode">mode</label>
          <input type="text" name="mode" id="mode" ref={mode} />
        </div>
        <div>
          <label htmlFor="credentials">credentials</label>
          <input type="text" name="credentials" id="credentials" />
        </div>
      </section>

      <section>
        <h4>Headers</h4>
        <div className="header-container">
          {requestHeaders.map((header) => {
            return (
              <div key={header.key}>
                <input type="text" value={header.key} readOnly />
                <input type="text" value={header.value} readOnly />
                <button
                  type="button"
                  className="btn error-btn"
                  onClick={() => removeRequestHeader(header.key)}
                >
                  &times;
                </button>
              </div>
            );
          })}
          {requestHeaders.length === 0 && (
            <p>There are currently no headers.</p>
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
        <button type="button" className="btn ok-btn" onClick={addRequestHeader}>
          +
        </button>
      </div>
      <button type="button" className="btn info-btn" onClick={performRequest}>
        Perform
      </button>
    </div>
  );
};

export default FormRequest;
