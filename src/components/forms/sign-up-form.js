import React, { useState } from "react";

export default function SignUpForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    favorite: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-banner">
            You did it! You're <strike>hooked</strike> signed up!
          </div>
        ) : null}
        <input
          onChange={handleInputChange}
          value={values.firstName}
          className="form-field"
          name="firstName"
          placeholder="&#10033; First Name"
        />
        {submitted && !values.firstName ? (
          <span>Prithee, user, but what shall we call thee?</span>
        ) : null}
        <input
          onChange={handleInputChange}
          value={values.lastName}
          className="form-field"
          name="lastName"
          placeholder="&#10033; Last Name"
        />
        {submitted && !values.lastName ? (
          <span>You forgot your last name. That's slightly depressing...</span>
        ) : null}

        <input
          onChange={handleInputChange}
          value={values.email}
          className="form-field"
          name="email"
          placeholder="&#10033; Email Address"
        />
        {submitted && !values.email ? (
          <span>There was a dog and EMAIL WAS HIS NAME-O!</span>
        ) : null}

        <input
          onChange={handleInputChange}
          value={values.favorite}
          className="form-field"
          name="favorite"
          placeholder="Favorite Book/Series or Author"
        />
        <button className="form-field" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
