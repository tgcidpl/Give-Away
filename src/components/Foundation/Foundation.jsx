import React, { useState } from "react";
import "./Foundation.scss";
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader";

import foundations from "./foundations.json";
import organisations from "./organisations.json";
import collections from "./collections.json";
import { TabPrint } from "./modules/TabPrint";

export const Foundation = () => {
  const [tab, setTab] = useState(foundations);

  const handleClick = (name) => {
    setTab(name);
  };

  return (
    <div className="Foundation">
      <DecoratedHeader text2="Who we help?" />
      <div className="Foundation-selector">
        <span
          onClick={() => handleClick(foundations)}
          className="Foundation-selector__button"
          style={tab !== foundations ? { borderColor: "transparent" } : {}}
        >
          Foundations
        </span>
        <span
          onClick={() => handleClick(organisations)}
          className="Foundation-selector__button"
          style={tab !== organisations ? { borderColor: "transparent" } : {}}
        >
          Non-Gov Organisations
        </span>
        <span
          onClick={() => handleClick(collections)}
          className="Foundation-selector__button"
          style={tab !== collections ? { borderColor: "transparent" } : {}}
        >
          Local Collections
        </span>
      </div>
      <p>
        Our database collects all verified Foundations we work with. You may
        check their activities, who they help and what they need.
      </p>
      <TabPrint tab={tab} />
    </div>
  );
};
