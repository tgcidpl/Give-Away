import React, { useEffect, useState } from "react";
import { DecoratedHeader } from "../../DecoratedHeader/DecoratedHeader";
import "./Steps.scss";

export const Step1 = (props) => {
  return (
    <div className="Step-container">
      <span className="Step-number">Step 1/4</span>
      <h2 className="Step-body__header">Select things to give away:</h2>
      <div className="Step1-body">
        <div
          className="Step1-body-checklist"
          onChange={(event) => props.onChange(event.target.value)}
        >
          <div className="Step1-body-checklist-item">
            <input
              className="Step1-body-checklist-item__checkmark"
              type="radio"
              value="clothes in good condition"
              name="type"
            />
            <label className="Step1-body-checklist-item__label">
              clothes in good condition
            </label>
          </div>
          <div className="Step1-body-checklist-item">
            <input
              className="Step1-body-checklist-item__checkmark"
              type="radio"
              value="clothes to be thrown away"
              name="type"
            />
            <label className="Step1-body-checklist-item__label">
              clothes to be thrown away
            </label>
          </div>
          <div className="Step1-body-checklist-item">
            <input
              className="Step1-body-checklist-item__checkmark"
              type="radio"
              value="toys"
              name="type"
            />
            <label className="Step1-body-checklist-item__label">toys</label>
          </div>
          <div className="Step1-body-checklist-item">
            <input
              className="Step1-body-checklist-item__checkmark"
              type="radio"
              value="books"
              name="type"
            />
            <label className="Step1-body-checklist-item__label">books</label>
          </div>
          <div className="Step1-body-checklist-item">
            <input
              className="Step1-body-checklist-item__checkmark"
              type="radio"
              value="other"
              name="type"
            />
            <label className="Step1-body-checklist-item__label">other</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Step2 = (props) => {
  return (
    <div className="Step-container">
      <span className="Step-number">Step 2/4</span>
      <h2 className="Step-body__header">
        Select the number of 60l bags with packed things:
      </h2>
      <div className="Step2-body">
        <label className="Step2-body__label">Number of 60l bags:</label>
        <select
          className="Step2-body-select"
          onChange={(event) => props.onChange(event.target.value)}
        >
          <option value="0">- select -</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export const Step3 = (props) => {
  const [who, setWho] = useState([]);
  const [organisation, setOrganisation] = useState([]);

  useEffect(() => {
    props.selectWhoToHelp(who);
  }, [who]);

  useEffect(() => {
    props.selectOrganisation(organisation);
  }, [organisation]);

  const handleCheck = (value) => {
    who.includes(value)
      ? setWho(who.filter((word) => word !== value))
      : setWho([...who, value]);
  };

  return (
    <div className="Step-container">
      <span className="Step-number">Step 3/4</span>
      <h2 className="Step-body__header">Location:</h2>
      <select
        className="Step3-body-select"
        onChange={(event) => props.onChange(event.target.value)}
      >
        <option value="0">- select -</option>
        <option value="Poznań">Poznań</option>
        <option value="Warszawa">Warszawa</option>
        <option value="Kraków">Kraków</option>
        <option value="Wrocław">Wrocław</option>
        <option value="Katowice">Katowice</option>
      </select>

      <h3 className="Step-body__minorHeader">Who would you like to help?</h3>
      <div className="Step3-body-checkboxes">
        <input
          className="Step3-body-checkboxes__item checkboxChildren"
          type="checkbox"
          value="children"
          name="type"
          onClick={(event) => handleCheck(event.target.value)}
        ></input>
        <input
          className="Step3-body-checkboxes__item checkboxSingleMothers"
          type="checkbox"
          value="single mothers"
          name="type"
          onClick={(event) => handleCheck(event.target.value)}
        ></input>
        <input
          className="Step3-body-checkboxes__item checkboxHomeless"
          type="checkbox"
          value="homeless"
          name="type"
          onClick={(event) => handleCheck(event.target.value)}
        ></input>
        <input
          className="Step3-body-checkboxes__item checkboxDisabled"
          type="checkbox"
          value="disabled"
          name="type"
          onClick={(event) => handleCheck(event.target.value)}
        ></input>
        <input
          className="Step3-body-checkboxes__item checkboxElderly"
          type="checkbox"
          value="elderly"
          name="type"
          onClick={(event) => handleCheck(event.target.value)}
        ></input>
      </div>
      <h3 className="Step-body__minorHeader">
        Enter chosen organisation's name (optional)
        <input
          className="Step3-body__input"
          type="text"
          name="organisation"
          onChange={(event) => setOrganisation(event.target.value)}
        ></input>
      </h3>
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
      <div className="Step4-body">
        <div className="Step4-body-section">
          <h3 className="Step-body__minorHeader">Address for collection</h3>

          <div className="Step4-body-section-item">
            <label className="Step-body__label">Street</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="street"
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">City</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="city"
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Postcode</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="postcode"
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Phone</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="phone"
            ></input>
          </div>
        </div>
        <div className="Step4-body-section">
          <h3 className="Step-body__minorHeader">Date of collection</h3>

          <div className="Step4-body-section-item">
            <label className="Step-body__label">Day</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="day"
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Time</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="time"
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label notes-label">
              Delivery <br></br> notes
            </label>
            <textarea
              className="Step4-body-section-item__input notes-text"
              name="street"
            ></textarea>
          </div>
        </div>
      </div>
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
