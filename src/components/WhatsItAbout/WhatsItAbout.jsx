import React from "react";
import "./WhatsItAbout.scss";
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader";
import { LargeBtn } from "../LargeBtn/LargeBtn";

export function WhatsItAbout() {
  return (
    <div className="WhatsItAbout">
      <DecoratedHeader text2={"Just 4 easy steps"} />
      <div className="WhatsItAbout-info">
        <div className="WhatsItAbout-info-column">
          <h3 className="WhatsItAbout-info-column__title title1">
            Pick things
          </h3>
          <p className="WhatsItAbout-info-column__text">
            clothes, toys, tools and others
          </p>
        </div>
        <div className="WhatsItAbout-info-column">
          <h3 className="WhatsItAbout-info-column__title title2">Pack them</h3>
          <p className="WhatsItAbout-info-column__text">use bin bags</p>
        </div>
        <div className="WhatsItAbout-info-column">
          <h3 className="WhatsItAbout-info-column__title title3">
            Decide who to help
          </h3>
          <p className="WhatsItAbout-info-column__text">
            choose a trusted place
          </p>
        </div>
        <div className="WhatsItAbout-info-column">
          <h3 className="WhatsItAbout-info-column__title title4">
            Book a courier
          </h3>
          <p className="WhatsItAbout-info-column__text">
            courier will arrive at a suitable time
          </p>
        </div>
      </div>
      <div className="WhatsItAbout-btn">
        <LargeBtn link={`/give-away`} text="GIVE AWAY" />
      </div>
    </div>
  );
}
