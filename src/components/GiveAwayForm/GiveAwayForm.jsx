import React, { useState } from "react";
import "./GiveAwayForm.scss";
import { InfoBar } from "./modules/InfoBar";
import { Step1, Step2, Step3, Step4, Step5, Step6 } from "./modules/Steps";

export const GiveAwayForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "",
    bags: "",
    location: "",
    helpGroups: [],
    organisation: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  console.log(formData);

  const NavButton = ({ text, step }) => {
    return (
      <div onClick={() => setStep(step)} className="NavBtn">
        {text}
      </div>
    );
  };

  if (step === 1) {
    return (
      <>
        <InfoBar
          text={`Choose type of unwanted things, so we know who should receive them.`}
        />
        <div className="Form-container">
          <Step1
            onChange={(value) => setFormData({ ...formData, type: value })}
          />
          <div className="Form-nav">
            <NavButton text={"Next"} step={2} />
          </div>
        </div>
      </>
    );
  }
  if (step === 2) {
    return (
      <>
        <InfoBar
          text={`Pack all things in 60l bags. Proper packing instruction can be found HERE.`}
        />
        <div className="Form-container">
          <Step2
            onChange={(value) => setFormData({ ...formData, bags: value })}
          />
          <div className="Form-nav">
            <NavButton text={"Back"} step={1} />
            <NavButton text={"Next"} step={3} />
          </div>
        </div>
      </>
    );
  }
  if (step === 3) {
    return (
      <>
        <InfoBar
          text={`You may pick an organisation from the list if you know whom you would like to help. You may also filter organisations by location or aim.`}
        />
        <div className="Form-container">
          <div onClick={() => console.log(formData)}>whotohelp</div>
          <Step3
            selectWhoToHelp={(value) =>
              setFormData({ ...formData, helpGroups: value })
            }
            onChange={(value) =>
              setFormData({
                ...formData,
                location: value,
              })
            }
          />
          <div className="Form-nav">
            <NavButton text={"Back"} step={2} />
            <NavButton text={"Next"} step={4} />
          </div>
        </div>
      </>
    );
  }
  if (step === 4) {
    return (
      <>
        <InfoBar text={`Enter your address and collection time.`} />
        <div className="Form-container">
          <Step4 />
          <div className="Form-nav">
            <NavButton text={"Back"} step={3} />
            <NavButton text={"Next"} step={5} />
          </div>
        </div>
      </>
    );
  }
  if (step === 5) {
    return (
      <>
        <div className="Form-container">
          <Step5 />
          <div className="Form-nav">
            <NavButton text={"Back"} step={4} />
            <NavButton text={"Confirm"} step={6} />
          </div>
        </div>
      </>
    );
  }
  if (step === 6) {
    return (
      <>
        <div className="Form-container">
          <Step6 />
        </div>
      </>
    );
  } else {
    console.log("step print error");
  }
};
