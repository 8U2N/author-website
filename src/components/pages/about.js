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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptatum dolores et sunt distinctio esse temporibus voluptas quia ad
          omnis a quae laboriosam non, doloribus dignissimos ratione. Nemo
          veritatis vero praesentium facere quam et velit rem voluptate
          doloribus repellat soluta pariatur, doloremque ipsam possimus corporis
          exercitationem ipsa molestiae?
        </div>
        <div className="featured-image-wrapper">
          <img src={veteran} alt="developer" style={{ width: "300px" }}></img>
        </div>

        <h2>Veteran</h2>
        <div className="content-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error
          neque, necessitatibus dolores quae quia esse cumque velit. Odio ipsum
          minus, laudantium veritatis optio quisquam illum. Dolore, odit. Atque
          beatae ea veniam adipisci illum excepturi, ducimus accusantium
          blanditiis architecto a hic vitae? Blanditiis molestias hic quae
          suscipit pariatur!
        </div>
        <div className="featured-image-wrapper">
          <img src={developer} alt="developer" style={{ width: "300px" }}></img>
        </div>
        <h2>Full Stack Developer</h2>
        <div className="content-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error
          neque, necessitatibus dolores quae quia esse cumque velit. Odio ipsum
          minus, laudantium veritatis optio quisquam illum. Dolore, odit. Atque
          beatae ea veniam adipisci illum excepturi, ducimus accusantium
          blanditiis architecto a hic vitae? Blanditiis molestias hic quae
          suscipit pariatur! Check out my
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
