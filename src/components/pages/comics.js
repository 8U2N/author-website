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
            <strong>CRYPTO FORCE</strong>
            <p>
              Selena's brother goes missing, and that's just the beginning. The
              world was supposed to be a utopia...but the Shadow Man has other
              plans. It's up to Selena and her friends to follow the clues left
              behind by her brother to wrestle back control of Cryptonia from
              the Shadow Man's vile clutches.
            </p>
          </div>
          <a
            className="web-link"
            href="https://www.pink-nft.com/comics/crypto-force"
            rel="noreferrer"
            target="_blank"
          >
            READ NOW
          </a>
        </div>
        <div className="featured-image-container">
          <img
            src={sid}
            style={{ width: "300px" }}
            alt="spark in the dark"
          ></img>
          <div className="content-container">
            <strong>SPARK IN THE DARK</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              quos qui eaque veritatis sequi rem magnam dolorum? Minus excepturi
              commodi rem ut corporis numquam!
            </p>
          </div>
          <a
            className="web-link"
            href="https://www.webtoons.com/en/challenge/spark-in-the-dark/list?title_no=198829&page=1"
            rel="noreferrer"
            target="_blank"
          >
            READ NOW
          </a>
        </div>
        <div className="featured-image-container">
          <img src={fo} style={{ width: "300px" }} alt="finding omega"></img>
          <div className="content-container">
            <strong>Finding Omega #1</strong>
            <p>
              This series tells the story of Ray Wall, an eleven year old boy
              who finds himself caught up in a dark world ruled by a ruthless
              group of criminals whose morality is based on how much you can
              take before you die. Project on indefinite hiatus.
            </p>
            <br />
            <p>
              Co-created by Tyler and Lydia Burnworth, line art by Austin
              Brooks, colored by Eugene Betivu and written by Tyler Burnworth.
            </p>
            <a
              className="web-link"
              href="https://www.webtoons.com/en/challenge/spark-in-the-dark/list?title_no=198829&page=1"
              rel="noreferrer"
              target="_blank"
            >
              VIEW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comics;
