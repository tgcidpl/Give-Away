import React from "react";

export function InfoBar({ text }) {
  return (
    <div>
      <h2>Important!</h2>
      <span>{text}</span>
    </div>
  );
}
