import "./Steps.scss";
import { useStoreState } from "easy-peasy";

export const Step1 = () => {
  const formData = useStoreState((state) => state.formData);
  return (
    <div className="Step-container">
      <span className="Step-number">Step 1/4</span>
      <h2 className="Step-body__header">Select things to give away:</h2>
      <div className="Step1-body">
        <div
          className="Step1-body-checklist"
          onChange={(event) => (formData.type = event.target.value)}
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

export const Step2 = () => {
  const formData = useStoreState((state) => state.formData);

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
          onChange={(event) => (formData.bags = event.target.value)}
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

export const Step3 = () => {
  const formData = useStoreState((state) => state.formData);

  const handleCheck = (value) => {
    formData.helpGroups.includes(value)
      ? (formData.helpGroups = formData.helpGroups.filter(
          (group) => group !== value
        ))
      : (formData.helpGroups = [...formData.helpGroups, value]);
  };

  return (
    <div className="Step-container">
      <span className="Step-number">Step 3/4</span>
      <h2 className="Step-body__header">Location:</h2>
      <select
        className="Step3-body-select"
        onChange={(event) => (formData.location = event.target.value)}
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
          onChange={(event) => (formData.organisation = event.target.value)}
        ></input>
      </h3>
    </div>
  );
};

export const Step4 = () => {
  const formData = useStoreState((state) => state.formData);

  return (
    <div className="Step-container">
      <span className="Step-number">Step 4/4</span>
      <h2 className="Step-body__header">
        Enter your address and time of courier collection
      </h2>
      <div className="Step4-body">
        <div className="Step4-body-section">
          <h3 className="Step-body__minorHeader">Address for collection:</h3>

          <div className="Step4-body-section-item">
            <label className="Step-body__label">Street</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="street"
              onChange={(event) => (formData.street = event.target.value)}
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">City</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="city"
              onChange={(event) => (formData.city = event.target.value)}
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Postcode</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="postcode"
              onChange={(event) => (formData.postcode = event.target.value)}
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Phone</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="phone"
              onChange={(event) => (formData.phone = event.target.value)}
            ></input>
          </div>
        </div>
        <div className="Step4-body-section">
          <h3 className="Step-body__minorHeader">Date of collection:</h3>

          <div className="Step4-body-section-item">
            <label className="Step-body__label">Day</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="day"
              onChange={(event) => (formData.day = event.target.value)}
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Time</label>
            <input
              className="Step4-body-section-item__input"
              type="text"
              name="time"
              onChange={(event) => (formData.time = event.target.value)}
            ></input>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label notes-label">
              Delivery <br></br> notes
            </label>
            <textarea
              className="Step4-body-section-item__input notes-text"
              name="notes"
              onChange={(event) => (formData.notes = event.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Step5 = () => {
  const formData = useStoreState((state) => state.formData);

  return (
    <div className="Step-container Step5-container">
      <h2 className="Step-body__header">Summary of your donation</h2>
      <h3 className="Step-body__minorHeader">You're donating:</h3>
      <p className="Step-body__minorHeader summary">
        {formData.bags} bags, {formData.type}, {formData.helpGroups.join(", ")}
      </p>
      <p className="Step-body__minorHeader location">
        location: {formData.location}
      </p>
      <div className="Step4-body">
        <div className="Step4-body-section">
          <h3 className="Step-body__minorHeader">Address for collection:</h3>

          <div className="Step4-body-section-item">
            <label className="Step-body__label">Street</label>
            <span>{formData.street}</span>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">City</label>
            <span>{formData.city}</span>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Postcode</label>
            <span>{formData.postcode}</span>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Phone</label>
            <span>{formData.phone}</span>
          </div>
        </div>
        <div className="Step4-body-section">
          <h3 className="Step-body__minorHeader">Date of collection:</h3>

          <div className="Step4-body-section-item">
            <label className="Step-body__label">Day</label>
            <span>{formData.day}</span>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label">Time</label>
            <span>{formData.time}</span>
          </div>
          <div className="Step4-body-section-item">
            <label className="Step-body__label notes-label">
              Delivery <br></br> notes
            </label>
            <p>{formData.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Step6 = () => {
  return (
    <div className="Step6-body">
      <p>
        Thank you for submitting the form<br></br>We will send the details
        <br></br> regarding collection via email
      </p>
    </div>
  );
};
