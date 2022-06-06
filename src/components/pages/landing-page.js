import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      className="landing-page-container"
      style={{ backgroundColor: "white" }}
    >
      <div className="landing-page-header">BURN SHIELD, LTD.</div>
      <div className="icon-wrapper">
        <img
          src={logo}
          style={{ maxWidth: "300px" }}
          className="App-logo"
          alt="logo"
        />
        <Link to="/home" className="App-link">
          Enter Site
        </Link>
      </div>
      <div className="landing-page-footer">The Writings of Tyler Burnworth</div>
    </div>
  );
}

export default LandingPage;
