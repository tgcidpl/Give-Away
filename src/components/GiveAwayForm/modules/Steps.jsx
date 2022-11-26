import React from "react";
import { DecoratedHeader } from "../../DecoratedHeader/DecoratedHeader";

export const Step1 = (props) => {
  return (
    <div>
      <span>Step 1/4</span>
      <h2>Select things to give away:</h2>
      <div onChange={(event) => props.onChange(event.target.value)}>
        <input type="radio" value="clothes in good condition" name="type" />
        clothes in good condition
        <input type="radio" value="clothes to be thrown away" name="type" />
        clothes to be thrown away
        <input type="radio" value="toys" name="type" />
        toys
        <input type="radio" value="books" name="type" />
        books
        <input type="radio" value="other" name="type" />
        other
      </div>
    </div>
  );
};

export const Step2 = () => {
  return (
    <div>
      <span>Step 2/4</span>
      <h2>Select number of 60l bags with packed things:</h2>
    </div>
  );
};

export const Step3 = () => {
  return (
    <div>
      <span>Step 3/4</span>
      <h2>Location:</h2>
    </div>
  );
};

export const Step4 = () => {
  return (
    <div>
      <span>Step 4/4</span>
      <h2>Enter your address and time of courier collection</h2>
    </div>
  );
};

export const Step5 = () => {
  return (
    <div>
      <h2>Summary of your donation</h2>
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
