import React from "react";
import SignUpForm from "../forms/sign-up-form";

function SignUp() {
  return (
    <div className="heading" style={{ overflow: "hidden" }}>
      <h1>SIGN-UP</h1>
      <h2>JOIN THE MAILING LIST TODAY!</h2>
      <p>No spam, just updates on new releases!</p>
      <div className="sign-up-wrapper">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
