import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./buttons/button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [menuIcon, setMenuIcon] = useState(true);
  const token = sessionStorage.getItem("token");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logoutClick = () => {
    sessionStorage.removeItem("token");
    <Redirect to="/" component={"/landing-page"} />;
    closeMobileMenu();
  };

  const showButton = () => {
    if (window.innerWidth >= 960) {
      setButton(false);
      if (closeMobileMenu(false)) setButton(false);
    } else {
      setButton(true);
    }
  };

  const showMenuIcon = () => {
    if (window.innerWidth >= 960) {
      setMenuIcon(false);
    } else {
      setMenuIcon(true);
    }
  };

  window.addEventListener("resize", showButton, showMenuIcon);

  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <Link
            path
            to="/home"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <FontAwesomeIcon icon={faDumpsterFire} />
          </Link>
          {menuIcon ? (
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <FontAwesomeIcon icon={faX} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          ) : (
            false
          )}

          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-link">
              <Link
                to="/home"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faDumpsterFire} />
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/novels"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                Novels
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/comics"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                Comics
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/about"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/contact"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/sign-up"
                className="navigation-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            {token && token !== "" && token !== undefined && token !== null ? (
              <li className="nav-link">
                <Link
                  to="/"
                  className="navigation-links-mobile"
                  onClick={logoutClick}
                >
                  Log Out
                </Link>
              </li>
            ) : (
              <li className="nav-link">
                <Link
                  to="/login"
                  className="navigation-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Log In
                </Link>
              </li>
            )}
            {token && token !== "" && token !== undefined && token !== null ? (
              <li className="nav-link">
                <Link
                  to="/post-manager"
                  className="navigation-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Post Manager
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
