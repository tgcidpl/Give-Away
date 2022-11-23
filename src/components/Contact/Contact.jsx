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

  const handleSubmit = (e) => {
    e.preventDefault();
    name.includes(" ") || name.length === 0
      ? setNameError(true)
      : setNameError(false);
    !email.includes("@") ? setEmailError(true) : setEmailError(false);
    message.length < 120 ? setMessageError(true) : setError(false);
    console.log(name, email, message);
  };

  return (
    <div className="Contact">
      <div className="Contact-image"></div>
      <div className="Contact-form">
        <DecoratedHeader text2="Contact us" />
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
                    value={name}
                    placeholder="Krzysztof"
                  ></input>
                  {nameError ? <label>Incorrect name</label> : ""}
                </div>
                <div className="labelInput">
                  <label className="label">Enter your email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="Contact-form-data-info__field"
                    value={email}
                    placeholder="abc@xyz.pl"
                  ></input>
                  {emailError ? <label>Incorrect email</label> : ""}
                </div>
              </div>
              <div className="labelInput">
                <label className="label">Enter your message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="Contact-form-data__text"
                  value={message}
                  rows={4}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ></textarea>
                {messageError ? (
                  <label>Message should be longer than 120 signs</label>
                ) : (
                  ""
                )}
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
