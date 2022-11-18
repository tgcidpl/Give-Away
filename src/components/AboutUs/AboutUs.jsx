import React from "react";
import "./AboutUs.scss";
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader";

export function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="AboutUs-description">
        <DecoratedHeader text2="About us" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
      </div>
      <div className="AboutUs-image"></div>
    </div>
  );
}
