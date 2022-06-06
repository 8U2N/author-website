import React from "react";
import cf from "../../images/photos/comics-covers/cf.png";
import sid from "../../images/photos/comics-covers/sid.jpg";
import fo from "../../images/photos/comics-covers/fo.png";

function Comics() {
  return (
    <div className="heading" style={{ overflow: "hidden" }}>
      <h1>COMICS</h1>
      <div className="comics-wrapper">
        <div className="featured-image-container">
          <img src={cf} style={{ width: "300px" }} alt="crypto force"></img>
          <div className="content-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              quos qui eaque veritatis sequi rem magnam dolorum? Minus excepturi
              commodi rem ut corporis numquam!
            </p>
          </div>
        </div>
        <div className="featured-image-container">
          <img
            src={sid}
            style={{ width: "300px" }}
            alt="spark in the dark"
          ></img>
          <div className="content-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              quos qui eaque veritatis sequi rem magnam dolorum? Minus excepturi
              commodi rem ut corporis numquam!
            </p>
          </div>
        </div>
        <div className="featured-image-container">
          <img src={fo} style={{ width: "300px" }} alt="finding omega"></img>
          <div className="content-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              quos qui eaque veritatis sequi rem magnam dolorum? Minus excepturi
              commodi rem ut corporis numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comics;
