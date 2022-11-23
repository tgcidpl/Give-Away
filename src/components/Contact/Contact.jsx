import React, { useState } from "react";
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader";
import "./Contact.scss";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const data = {
    name: name,
    email: email,
    message: message,
  };

  const submitForm = () => {
    // CONTINUE BELOW
    async function sendData() {}
    setSubmitSuccess(true);
    console.log(`submitted`);
    console.log(JSON.stringify(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let noErrors = true;

    if (name.includes(" ") || name.length === 0) {
      setNameError(true);
      noErrors = false;
    } else {
      setNameError(false);
    }

    if (!email.includes("@")) {
      setEmailError(true);
      noErrors = false;
    } else {
      setEmailError(false);
    }
    if (message.length < 120) {
      setMessageError(true);
      noErrors = false;
    } else {
      setMessageError(false);
    }
    noErrors
      ? submitForm()
      : () => {
          return;
        };
  };

  return (
    <div className="Contact">
      <div className="Contact-image"></div>
      <div className="Contact-form">
        <DecoratedHeader text2="Contact us" />
        <label className={submitSuccess ? "success" : "hidden"}>
          Message succesfully sent! <br></br>We will contact you soon.
        </label>
        <form>
          <fieldset>
            <div className="Contact-form-data">
              <div className="Contact-form-data-info">
                <div className="labelInput">
                  <label className="label">Enter your name</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="Contact-form-data-info__field"
                    style={{
                      borderColor: nameError ? "red" : "",
                    }}
                    value={name}
                    placeholder="Krzysztof"
                  ></input>
                  <label className={nameError ? "error" : "hidden"}>
                    Incorrect name
                  </label>
                </div>
                <div className="labelInput">
                  <label className="label">Enter your email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="Contact-form-data-info__field"
                    style={{
                      borderColor: emailError ? "red" : "",
                    }}
                    value={email}
                    placeholder="abc@xyz.pl"
                  ></input>
                  <label className={emailError ? "error" : "hidden"}>
                    Incorrect email
                  </label>
                </div>
              </div>
              <div className="labelInput">
                <label className="label">Enter your message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="Contact-form-data__text"
                  style={{
                    borderColor: messageError ? "red" : "",
                  }}
                  value={message}
                  rows={4}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ></textarea>
                <label className={messageError ? "error" : "hidden"}>
                  Message should be longer than 120 signs
                </label>
              </div>
              <input
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className="Contact-form-data__btn"
                value="Send"
              ></input>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
