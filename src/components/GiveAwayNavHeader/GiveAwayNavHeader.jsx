import React from "react";
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader.jsx";
import { Menu } from "../Menu/Menu.jsx";
import "./GiveAwayNavHeader.scss";

export function GiveAwayNavHeader() {
  return (
    <div className="GiveAwayNavHeader">
      <div className="GiveAwayNavHeader-banner"></div>
      <div className="GiveAwayNavHeader-header">
        <Menu />
        <div className="GiveAwayNavHeader-header-steps">
          <DecoratedHeader
            text1={"Give away unwanted things"}
            text2={"TO THOSE WHO NEED THEM"}
          />
          <h2 className="GiveAwayNavHeader-header-steps__text">
            Just 4 simple steps:
          </h2>
          <div className="GiveAwayNavHeader-header-steps-box">
            <div className="GiveAwayNavHeader-header-steps-box-step">
              <h3>1</h3>
              <p>Choose things</p>
            </div>
            <div className="GiveAwayNavHeader-header-steps-box-step">
              <h3>2</h3>
              <p>Bag them</p>
            </div>
            <div className="GiveAwayNavHeader-header-steps-box-step">
              <h3>3</h3>
              <p>Choose location</p>
            </div>
            <div className="GiveAwayNavHeader-header-steps-box-step">
              <h3>4</h3>
              <p>Book courier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
