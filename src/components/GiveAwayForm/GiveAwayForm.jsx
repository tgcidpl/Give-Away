import React, { useState } from "react";
import "./GiveAwayForm.scss";
import { InfoBar } from "./modules/InfoBar";
import { Step1 } from "./modules/Step1";
import { Step2 } from "./modules/Step2";
import { Step3 } from "./modules/Step3";
import { Step4 } from "./modules/Step4";
import { Step5 } from "./modules/Step5";
import { Step6 } from "./modules/Step6";

export const GiveAwayForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    things: "",
    bags: "",
    location: "",
    who: "",
    organisation: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  if (step === 1) {
    return (
      <>
        <InfoBar
          text={`Fill in details of unwanted things, so we know who should receive them.`}
        />
        <Step1 />
      </>
    );
  }
  if (step === 2) {
    return (
      <>
        <InfoBar
          text={`Pack all things in 60l bags. Proper packing instruction can be found HERE.`}
        />
        <Step2 />
      </>
    );
  }
  if (step === 3) {
    return (
      <>
        <InfoBar
          text={`You may pick an organisation from the list if you know whom you would like to help. You may also filter organisations by location or aim.`}
        />
        <Step3 />
      </>
    );
  }
  if (step === 4) {
    return (
      <>
        <InfoBar text={`Enter your address and collection time.`} />
        <Step4 />
      </>
    );
  }
  if (step === 5) {
    return (
      <>
        <Step5 />
      </>
    );
  }
  if (step === 6) {
    return (
      <>
        <Step6 />
      </>
    );
  } else {
    console.log("step print error");
  }
};
