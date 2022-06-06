import React, { useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email && values.message) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-banner">You did it! You're signed up!</div>
        ) : null}
        <input
          onChange={handleInputChange}
          value={values.firstName}
          className="form-field"
          name="firstName"
          placeholder="&#10033; First Name "
        />
        {submitted && !values.firstName ? (
          <span>Wait...don't you think we need to know your first name?</span>
        ) : null}
        <input
          onChange={handleInputChange}
          value={values.lastName}
          className="form-field"
          name="lastName"
          placeholder="&#10033; Last Name"
        />
        {submitted && !values.lastName ? (
          <span>Seriously? No last name? That's...not very helpful.</span>
        ) : null}
        <input
          onChange={handleInputChange}
          value={values.email}
          className="form-field"
          name="email"
          placeholder="&#10033; Email Address"
        />
        {submitted && !values.email ? (
          <span>Eh, you kinda need to enter an email address...</span>
        ) : null}
        <textarea
          onChange={handleInputChange}
          value={values.message}
          className="form-field"
          name="message"
          placeholder="Type Your Message Here"
        />
        {submitted && !values.message ? (
          <span>Really? Came all this way and have nothing to say?</span>
        ) : null}
        <button className="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
