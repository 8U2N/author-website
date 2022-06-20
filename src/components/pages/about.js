import React from "react";
import author from "../../images/photos/profile-photos/author.png";
import veteran from "../../images/photos/profile-photos/veteran.png";
import developer from "../../images/photos/profile-photos/developer.jpg";

function About() {
  return (
    <div className="heading" style={{ overflow: "hidden" }}>
      <h1>ABOUT</h1>
      <div className="about-wrapper">
        <h1>The Many Faces of Tyler Burnworth</h1>

        <div className="featured-image-wrapper">
          <img src={author} alt="author" style={{ width: "300px" }}></img>
        </div>
        <h2>Author</h2>
        <div className="content-container">
          Tyler E.C. Burnworth lives in the shadow of Area 51, a diamond in the
          desert wastes called Las Vegas. His days are spent as an F-16
          mechanic, his nights as a husband to Lydia, his superhuman wife, and
          as a father to two rambunctious little ruffians whose public behavior
          determines whether they are claimed or not. The writing happens at
          that magic time of late night/early morning, a time most know as
          "sleep."
        </div>
        <div className="featured-image-wrapper">
          <img src={veteran} alt="developer" style={{ width: "300px" }}></img>
        </div>

        <h2>Veteran</h2>
        <div className="content-container">
          Master Sergeant Burnworth's Air Force career spanned 14 years as a
          tactical aircraft maintenance technician on the F-16 Fighting Falcon,
          many of those years spent with the 926th Aircraft Maintenance Squadron
          at Viper AMU, and as a civilian contractor with M1 Support Services at
          Falcon Aircraft Maintenance Squadron on Nellis Air Force Base with
          some of the Air Force's finest maintainers.
        </div>
        <div className="featured-image-wrapper">
          <img src={developer} alt="developer" style={{ width: "300px" }}></img>
        </div>
        <h2>Full Stack Developer</h2>
        <div className="content-container">
          Fresh out of the Full Stack Developer Certification Course at Bottega
          University, Tyler's coding skills are a work in progress. Yesterday, a
          Blackjack game ran in the terminal, built with Python. Today, this
          app, built in React using JSX, Python, and Javascript. Tomorrow...more
          to come! Check out Tyler's
          <a
            href="https://tyler-b-portfolio.herokuapp.com/"
            alt="link to developer portfolio"
          >
            <em>_</em>Developer Portfolio!
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
