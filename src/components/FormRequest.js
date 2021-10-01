import React, { useState } from "react";

const FormRequest = () => {
  const [api, setApi] = useState("fetch");

  return (
    <React.Fragment>
      <div>
        <h4>FETCH/XMLHTTP</h4>
        <span>
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
        </span>
      </div>

      <textarea name="area" id="area" cols="50" rows="15"></textarea>
      <div>
        <button type="button">Perform</button>
      </div>
    </React.Fragment>
  );
};

export default FormRequest;
