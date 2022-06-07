import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PostManager from "../pages/post-manager";

export default function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    login: false,
  });

  const token = sessionStorage.getItem("token");

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [login, setLogin] = useState(false);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email && values.password && !login) {
      setValid(true);
      setLogin(true);
    }
    setSubmitted(true);
  };

  const handleClick = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http:127.0.0.1:3000",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    };
    fetch("http://127.0.0.1:5000/login", options)
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) => {
        // console.log("This came from the back end:", data);
        sessionStorage.setItem("token", data.access_token);
        setValues({
          email: values.email,
          password: "",
          login: true,
        });
        <Redirect
          to={{ pathname: "/post-manager", component: { PostManager } }}
        />;
      })
      .catch((error) => {
        console.error("Error: Login Failed!", error);
      });
  };

  return (
    <div className="form-container">
      {submitted && valid ? (
        <div className="success-banner">You're Logged In!</div>
      ) : (
        <div className="login-banner">Go Ahead and Log In!</div>
      )}
      {token && token !== "" && token !== undefined ? (
        <PostManager />
      ) : (
        <form className="form" onSubmit={handleSubmit}>
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
            type="password"
            onChange={handleInputChange}
            value={values.password}
            className="form-field"
            name="password"
            placeholder="&#10033; Enter Password"
          />
          {submitted && !values.password ? (
            <span>Try a password, jerk-face!</span>
          ) : null}

          <button onClick={handleClick} className="form-field" type="submit">
            Log In
          </button>
        </form>
      )}
    </div>
  );
}
