import React, { useState, useRef } from "react";

const FormRequest = ({ showModal, setResponse }) => {
  const [requestHeaders, setRequestHeaders] = useState([]);
  const [otherOptions, setOtherOptions] = useState({
    mode: "cors",
    credentials: "omit",
    cache: "default",
  });
  const headerKey = useRef(null);
  const headerValue = useRef(null);
  const url = useRef(null);
  const method = useRef(null);

  const removeRequestHeader = (key) => {
    setRequestHeaders((oldRequestHeaders) => {
      return oldRequestHeaders.filter((header) => header.key !== key);
    });
  };

  const updateOtherOptions = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOtherOptions((oldOtherOptions) => {
      return { ...oldOtherOptions, [name]: value };
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

  const performRequest = async () => {
    const address = url.current.value;
    if (!address) showModal("URL cannot be empty.", "error");
    else {
      let headers = new Headers();
      requestHeaders.forEach((requestHeader) => {
        headers.append(requestHeader.key, requestHeader.value);
      });

      try {
        const response = await fetch(address, {
          ...otherOptions,
          method: method.current.value,
          headers,
        });
        setResponse(response);
        showModal(
          "Request successful. For more info, visit the network tab in the developer options",
          "success",
          5000
        );
      } catch (error) {
        showModal(
          `${error.message}.\n${"Check the console for more info."}`,
          "error",
          5000
        );
      }
    }
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
        <label htmlFor="mode">mode</label>
        <select name="mode" id="mode" onChange={(e) => updateOtherOptions(e)}>
          <option value="cors">cors</option>
          <option value="no-cors">no-cors</option>
          <option value="same-origin">same-origin</option>
        </select>

        <label htmlFor="credentials">credentials</label>
        <select
          name="credentials"
          id="credentials"
          onChange={(e) => updateOtherOptions(e)}
        >
          <option value="omit">omit</option>
          <option value="same-origin">same-origin</option>
          <option value="include">include</option>
        </select>

        <label htmlFor="cache">cache</label>
        <select name="cache" id="cache" onChange={(e) => updateOtherOptions(e)}>
          <option value="default">default</option>
          <option value="no-store">no-store</option>
          <option value="reload">reload</option>
          <option value="no-cache">no-cache</option>
          <option value="force-cache">force-cache</option>
          <option value="only-if-cached">only-if-cached</option>
        </select>
      </section>

      <section>
        <h4>Headers</h4>
        <div className="header-container">
          {requestHeaders.map((header) => {
            return (
              <div key={header.key}>
                <input
                  type="text"
                  value={header.key}
                  readOnly
                  className="header-key-input"
                />
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
