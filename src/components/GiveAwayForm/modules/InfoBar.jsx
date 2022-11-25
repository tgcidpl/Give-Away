import React from "react";
import "./InfoBar.scss";

export function InfoBar({ text }) {
  return (
    <div className="InfoBar">
      <h2 className="InfoBar__header">Important!</h2>
      <span className="InfoBar__text">{text}</span>
    </div>
  );
}
