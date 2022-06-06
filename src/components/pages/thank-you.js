import React from "react";
import { Link } from "react-router-dom";
import thankyou from "../../images/backgrounds/thank-you.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";

function ThankYou() {
  return (
    <div className="thank-you-wrapper">
      <div className="thank-you-image-wrapper">
        <img src={thankyou} alt="thank you" style={{ width: "300px" }}></img>
      </div>
      <div className="thank-you-message-wrapper">
        <h1>Special Thanks To The Following Developers:</h1>
        <h2>
          <a
            href="https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A"
            target="_blank"
            rel="noreferrer"
          >
            Brian Design
          </a>
        </h2>
        <h2>
          <a
            href="https://www.youtube.com/user/alesanchezr"
            target="_blank"
            rel="noreferrer"
          >
            Alasanchezr
          </a>
        </h2>
        <h2>
          <a
            href="https://dev.to/chandrapantachhetri/responsive-react-file-upload-component-with-drag-and-drop-4ef8"
            target="_blank"
            rel="noreferrer"
          >
            Chandra Panta Chhetri
          </a>
        </h2>

        <Link path to="/home">
          <FontAwesomeIcon icon={faDumpsterFire} />
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
