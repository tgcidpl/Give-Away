import React from "react";
import { Contact } from "../components/Contact/Contact.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { GiveAwayForm } from "../components/GiveAwayForm/GiveAwayForm.jsx";
import { GiveAwayNavHeader } from "../components/GiveAwayNavHeader/GiveAwayNavHeader.jsx";

export function GiveAway() {
  return (
    <>
      <GiveAwayNavHeader />
      <GiveAwayForm />
      <Contact />
      <Footer />
    </>
  );
}
