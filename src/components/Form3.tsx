import React from "react";

const Form3 = () => {
  return (
    <div>
      <div className="p-3">
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Button
        </button>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>

      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Example text with two button addons"
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
      </div>
    </div>
  );
};

export default Form3;
