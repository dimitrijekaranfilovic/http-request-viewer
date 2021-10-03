import React, { useState, useRef } from "react";

const FormRequest = () => {
  const [api, setApi] = useState("fetch");
  const [headers, setHeaders] = useState([]);
  const headerKey = useRef(null);
  const headerValue = useRef(null);

  const removeHeader = (key) => {
    setHeaders((oldHeaders) => {
      return oldHeaders.filter((header) => header.key !== key);
    });
  };

  const addHeader = () => {
    const key = headerKey.current.value;
    const value = headerValue.current.value;
    setHeaders((oldHeaders) => {
      const newHeaders = [...oldHeaders, { key, value }];
      headerKey.current.value = "";
      headerValue.current.value = "";
      return newHeaders;
    });
  };

  const performRequest = () => {
    console.log(api);
  };

  return (
    <React.Fragment>
      <div>
        <h4>FETCH/XMLHTTP</h4>

        <div>
          <label htmlFor="api-select">API</label>
          <select
            name="api-select"
            id="api-select"
            value={api}
            onChange={(e) => setApi(e.target.value)}
          >
            <option value="fetch">Fetch</option>
            <option value="xml">XMLHtp</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="url">URL</label>
        <input type="text" name="url" id="url" />
      </div>

      <div>
        <div>
          <h3>Headers</h3>
          {headers.map((header) => {
            return (
              <div key={header.key}>
                <input type="text" value={header.key} readOnly />
                <input type="text" value={header.value} readOnly />
                <button type="button" onClick={() => removeHeader(header.key)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <input
            type="text"
            name="header-key"
            id="header-key"
            ref={headerKey}
          />
          <input
            type="text"
            name="header-value"
            id="header-value"
            ref={headerValue}
          />
          <button type="button" onClick={addHeader}>
            Add header
          </button>
        </div>
      </div>
      <div>
        <button type="button" onClick={performRequest}>
          Perform
        </button>
      </div>
    </React.Fragment>
  );
};

export default FormRequest;
