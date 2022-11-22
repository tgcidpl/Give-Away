import React, { useState } from "react";
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader";
import "./Contact.scss";

export const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

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
                  <label className="Contact-form-data-info__label">
                    Enter your name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="Contact-form-data-info__field"
                    value={name}
                    placeholder="Krzysztof"
                  ></input>
                </div>
                <div className="labelInput">
                  <label className="Contact-form-data-info__label">
                    Enter your email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="Contact-form-data-info__field email"
                    value={email}
                    placeholder="abc@xyz.pl"
                  ></input>
                </div>
              </div>
              <div className="labelInput">
                <label className="label">Enter your message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="Contact-form-data__text"
                  value={message}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ></textarea>
              </div>
              <button type="button" className="Contact-form-data__btn">
                Send
              </button>
            </div>
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
