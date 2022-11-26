import React from "react";
import { DecoratedHeader } from "../../DecoratedHeader/DecoratedHeader";
import "./Steps.scss";

export const Step1 = (props) => {
  return (
    <div className="Step-container">
      <span className="Step-number">Step 1/4</span>
      <div className="Step-body">
        <h2 className="Step-body__header">Select things to give away:</h2>
        <div
          className="Step-body-checklist"
          onChange={(event) => props.onChange(event.target.value)}
        >
          <div className="Step-body-checklist-item">
            <input
              className="Step-body-checklist-item__checkmark"
              type="radio"
              value="clothes in good condition"
              name="type"
            />
            <label className="Step-body-checklist-item__label">
              clothes in good condition
            </label>
          </div>
          <div className="Step-body-checklist-item">
            <input
              className="Step-body-checklist-item__checkmark"
              type="radio"
              value="clothes to be thrown away"
              name="type"
            />
            <label className="Step-body-checklist-item__label">
              clothes to be thrown away
            </label>
          </div>
          <div className="Step-body-checklist-item">
            <input
              className="Step-body-checklist-item__checkmark"
              type="radio"
              value="toys"
              name="type"
            />
            <label className="Step-body-checklist-item__label">toys</label>
          </div>
          <div className="Step-body-checklist-item">
            <input
              className="Step-body-checklist-item__checkmark"
              type="radio"
              value="books"
              name="type"
            />
            <label className="Step-body-checklist-item__label">books</label>
          </div>
          <div className="Step-body-checklist-item">
            <input
              className="Step-body-checklist-item__checkmark"
              type="radio"
              value="other"
              name="type"
            />
            <label className="Step-body-checklist-item__label">other</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Step2 = () => {
  return (
    <div className="Step-container">
      <span className="Step-number">Step 2/4</span>
      <h2 className="Step-body__header">
        Select number of 60l bags with packed things:
      </h2>
    </div>
  );
};

export const Step3 = () => {
  return (
    <div className="Step-container">
      <span className="Step-number">Step 3/4</span>
      <h2 className="Step-body__header">Location:</h2>
    </div>
  );
};

export const Step4 = () => {
  return (
    <div className="Step-container">
      <span className="Step-number">Step 4/4</span>
      <h2 className="Step-body__header">
        Enter your address and time of courier collection
      </h2>
    </div>
  );
};

export const Step5 = () => {
  return (
    <div className="Step-container">
      <h2 className="Step-body__header">Summary of your donation</h2>
    </div>
  );
};

export const Step6 = () => {
  return (
    <div>
      <DecoratedHeader
        text1={"Thank you for submitting the form"}
        text2={"We will send the details regarding collection via email"}
      />
    </div>
  );
};
