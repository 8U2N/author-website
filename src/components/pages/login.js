import React from "react";
import LoginForm from "../forms/login-form";

function Login() {
  return (
    <div className="heading" style={{ overflow: "hidden" }}>
      <h1>LOG-IN</h1>
      <div className="log-in-wrapper">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
