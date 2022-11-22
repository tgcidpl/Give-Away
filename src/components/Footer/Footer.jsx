import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="Footer">
      <span className="Footer-copyright">Copyright by Coders Lab</span>
      <div className="Footer-links">
        <a className="Footer-links__facebook" href="https:\\facebook.com">
          Facebook
        </a>
        <a className="Footer-links__instagram" href="https:\\instagram.com">
          Instagram
        </a>
      </div>
    </div>
  );
};
