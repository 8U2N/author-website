import React from "react";
import ContactForm from "../forms/contact-form";

function Contact() {
  return (
    <div className="heading" style={{ overflow: "hidden" }}>
      <h1>Contact</h1>
      <div className="contact-wrapper">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
