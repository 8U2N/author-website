import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import PostDetail from "./post-detail";

const Home = () => {
  const [data, setData] = useState([]);
  const orderedPosts = [...data].reverse();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("https://by-blood-or-by-star-back.herokuapp.com/posts", options)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  function handleDeleteClick(id) {
    fetch(`https://by-blood-or-by-star-back.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((response) => {
        console.log(response);
        getPosts();
      });
    });
  }

  return (
    <div className="heading">
      <h1>
        H<FontAwesomeIcon icon={faDumpsterFire} />
        ME
      </h1>
      <div className="home-wrapper" style={{ overflow: "hidden" }}>
        <ul key="posts">
          {orderedPosts.map((item) => {
            return (
              <div className="post-container" key={item.id} id={item.id}>
                <Link to={`/post/${item.id}`}>
                  <div className="featured-image-container">
                    <img
                      src={item.image}
                      alt="book"
                      style={{ width: "300px" }}
                    />
                  </div>

                  <h2
                    className="title"
                    style={{
                      color: "red",
                      fontFamily: "Orbitron, sansSerif",
                      letterSpacing: "3px",
                      textShadow: "2px 3px black",
                    }}
                  >
                    {item.title.toUpperCase()}
                  </h2>
                </Link>

                <div
                  className="content-container"
                  style={{
                    fontFamily: "Philosopher, sansSerif",
                    letterSpacing: "2px",
                    textShadow: "0px 1px black",
                  }}
                >
                  {item.description.slice(0, 100, 1) + "..."}
                </div>

                {token &&
                token !== "" &&
                token !== undefined &&
                token !== null ? (
                  <div className="change-button-wrapper">
                    <Link to={`/post/${item.id}`} className="edit-button">
                      EDIT
                    </Link>

                    <button
                      onClick={() => handleDeleteClick(item.id)}
                      className="delete-button"
                    >
                      DELETE
                    </button>
                  </div>
                ) : (
                  <div className="read-more-button-wrapper">
                    <Link to={`/post/${item.id}`}>
                      <button className="read-more-button">READ MORE</button>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
