import React from "react";
import "./NavigationLinkForm.css";

const NavigationLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className=" center ">
        <div className="form shadow-5 center pa4 br3 ">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            placeholder="Enter image URL of any face"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationLinkForm;
