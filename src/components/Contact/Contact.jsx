import React, { useState } from "react";
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader";
import "./Contact.scss";

export const Contact = () => {
  const { name, setName } = useState(null);
  const { email, setEmail } = useState(null);
  const { message, setMessage } = useState(null);

  return (
    <div className="Contact">
      <div className="Contact-image"></div>
      <div className="Contact-form">
        <DecoratedHeader text2="Contact us" />
        <form>
          <fieldset>
            <div className="Contact-form-data">
              <div>
                <label className="Contact-form-data__label">
                  Enter your name
                </label>
                <input
                  onChange={setName}
                  type="text"
                  className="Contact-form-data__field name"
                ></input>
              </div>
              <div>
                <label className="Contact-form-data__label">
                  Enter your email
                </label>
                <input
                  onChange={setEmail}
                  type="text"
                  className="Contact-form-data__field email"
                ></input>
              </div>
            </div>
            <div>
              <label className="Contact-form-data__label">
                Enter your message
              </label>
              <textarea
                onChange={setMessage}
                className="Contact-form__text"
              ></textarea>
            </div>
            <button type="button" className="Contact-form__btn">
              Send
            </button>
          </fieldset>
        </form>
        <div className="Contact-form-links">
          <a href="https:\\facebook.com">Facebook</a>
          <a href="https:\\instagram.com">Instagram</a>
        </div>
      </div>
    </div>
  );
};
