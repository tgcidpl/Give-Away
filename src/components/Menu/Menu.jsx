import React, { useState } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export function Menu() {
  const [listOpen, setListOpen] = useState(false);

  const handleChange = () => {
    setListOpen(!listOpen);
  };

  return (
    <div className="Menu">
      <ul className="Menu-auth">
        <li>
          <Link className="Menu-auth__link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="Menu-auth__link" to="/sign-up">
            Sign Up
          </Link>
        </li>
      </ul>
      <nav className="Menu-navbar">
        <input
          className="Menu-navbar-toggle-button"
          type="checkbox"
          onChange={handleChange}
        ></input>
        <ul className={`Menu-navbar-list ${listOpen ? "active" : ""}`}>
          <li>
            <ScrollLink
              className="Menu-navbar-list__link"
              to="Menu"
              smooth="easeOutQuad"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="Menu-navbar-list__link"
              offset={-40}
              to="WhatsItAbout"
              smooth="easeOutQuad"
            >
              What's It About?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="Menu-navbar-list__link"
              offset={10}
              to="AboutUs"
              smooth="easeOutQuad"
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="Menu-navbar-list__link"
              offset={-40}
              to="Foundation"
              smooth="easeOutQuad"
            >
              Foundation and Organisations
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="Menu-navbar-list__link"
              to="Contact"
              smooth="easeOutQuad"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
