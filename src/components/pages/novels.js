import React from "react";
import redshift from "../../images/photos/book-covers/redshift-cover.jpg";
import anthology from "../../images/photos/book-covers/anthology.jpg";
import inWork from "../../images/photos/in-work.png";

function Novels() {
  return (
    <div className="heading" style={{ overflow: "hidden" }}>
      <h1>NOVELS</h1>
      <div className="novels-wrapper">
        <div className="featured-image-wrapper" style={{ boxShadow: "none" }}>
          <img src={inWork} style={{ width: "300px" }} alt="in work"></img>
        </div>
        <div className="content-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quos
          qui eaque veritatis sequi rem magnam dolorum? Minus excepturi commodi
          rem ut corporis numquam!
        </div>
        <div className="featured-image-wrapper">
          <img
            src={anthology}
            style={{ width: "300px" }}
            alt="on deadly ground anthology"
          ></img>
        </div>
        <div className="content-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quos
          qui eaque veritatis sequi rem magnam dolorum? Minus excepturi commodi
          rem ut corporis numquam!
        </div>
        <div className="featured-image-wrapper">
          <img src={redshift} style={{ width: "300px" }} alt="redshift"></img>
        </div>
        <div className="content-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quos
          qui eaque veritatis sequi rem magnam dolorum? Minus excepturi commodi
          rem ut corporis numquam!
        </div>
      </div>
    </div>
  );
}

export default Novels;
