import React from "react";
import { NavHeader } from "../components/NavHeader/NavHeader.jsx";
import { ThreeColumns } from "../components/ThreeColumns/ThreeColumns.jsx";
import { WhatsItAbout } from "../components/WhatsItAbout/WhatsItAbout.jsx";
import { AboutUs } from "../components/AboutUs/AboutUs.jsx";
import { Foundation } from "../components/Foundation/Foundation.jsx";
import { Contact } from "../components/Contact/Contact.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export function Home() {
  return (
    <>
      <NavHeader />
      <ThreeColumns />
      <WhatsItAbout />
      <AboutUs />
      <Foundation />
      <Contact />
      <Footer />
    </>
  );
}
