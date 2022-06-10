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
          Jack returns from the war to find the life he left behind has moved on
          without him. Making ends meet in a galaxy still reeling from an
          interstellar campaign may require unconventional methods...
        </div>
        <div className="featured-image-wrapper">
          <img
            src={anthology}
            style={{ width: "300px" }}
            alt="on deadly ground anthology"
          ></img>
        </div>
        <div className="content-container">
          Across a thousand battlefields and a million wars, there is always a
          question. What do you do when all the chips are on the table? Do you
          run? Try to find salvation in the arms of an easy peace? Or do you
          stand and fight? Send your enemies into whatever hole they crawled out
          of? On Deadly Ground has ten stories handling that exact question.
          Each character faces the impossible in different ways, but all will be
          tested before the day is done. Can they earn a heroic victory amongst
          the endless eternity of space, or are they doomed to fall into
          obscurity?
        </div>
        <a
          className="web-link"
          href="https://www.amazon.com/Deadly-Ground-Heroic-Bayonet-Anthology-ebook/dp/B09GL5CYY4"
          rel="noreferrer"
          target="_blank"
        >
          GET IT HERE
        </a>
        <div className="featured-image-wrapper">
          <img src={redshift} style={{ width: "300px" }} alt="redshift"></img>
        </div>
        <div className="content-container">
          The Shadow Man was there when Milune was destroyed, wielding a power
          that ordinary folk should not behold. But frightened children are
          rarely believed. With Abraham’s mother dead, his father tries
          desperately to build his sons a new life on a new world. There are
          friends, enemies, romances, and the usual embarrassments of teenage
          years. But Abraham dreams only of revenge – against the vile riskar,
          destroyers of Milune. Enamored by tales of the great campaign against
          the riskar, Abraham signs up, the realities of war and the dynamics of
          camaraderie molding a simple farmboy into a deadly and intuitive
          soldier. But there are truths still to emerge, and The Shadow Man is
          no longer the distant memory of a frightened child. Nor does he hover
          at the edges of Abraham’s dark dreams. In fact, he is much closer than
          Abraham could have imagined.
        </div>
        <a
          className="web-link"
          href="https://www.amazon.com/Redshift-Blood-Star-Book-1-ebook/dp/B09F3SNQHL/ref=sr_1_1?crid=EHH5BLWRDAP3&keywords=redshift+tyler+burnworth&qid=1654897106&s=digital-text&sprefix=redshift+tyler+burnwroth%2Cdigital-text%2C115&sr=1-1"
          rel="noreferrer"
          target="_blank"
        >
          GET IT HERE
        </a>
      </div>
    </div>
  );
}

export default Novels;
