import React from "react";
import { Link } from "react-router-dom";
import noMatch from "../../images/backgrounds/no-match.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";

function NoMatch() {
  return (
    <div className="no-match-wrapper">
      <div className="error-image-wrapper">
        <img
          src={noMatch}
          alt="no match found"
          style={{ width: "300px" }}
        ></img>
      </div>
      <div className="error-message-wrapper">
        <h1>What're you, some kind of hacker or something?</h1>
        <h2>Anyway, this page doesn't exist...</h2>
        <Link path to="/home">
          <FontAwesomeIcon icon={faDumpsterFire} />
        </Link>
      </div>
    </div>
  );
}

export default NoMatch;
