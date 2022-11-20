import React from "react";
import organisations from "../organisations.json";
import collections from "../collections.json";
import "./TabPrint.scss";

export const TabPrint = ({ tab }) => {
  let title = `Foundation`;
  if (tab === organisations) title = `Organisation`;
  if (tab === collections) title = "Collection";

  return (
    <ul className="TabPrint">
      {tab.map((item) => (
        <li key={item.id} className="TabPrint-item">
          <div className="TabPrint-item-info">
            <h3>
              {title} "{item.name}"
            </h3>
            <p>Aim and goals: {item.goals}</p>
          </div>
          <div className="TabPrint-item-items">{item.items}</div>
        </li>
      ))}
    </ul>
  );
};
