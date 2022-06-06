import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [data, setData] = useState([]);
  const orderedPosts = [...data].reverse();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleDeleteClick = (event) => {
    event.preventDefault();
    fetch(`http://http:127.0.0.1/delete/`, {
      method: "DELETE",
    }).then((response) => console.log(response));
  };

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
              <div className="post-container" key={item.id}>
                <Link to={`/post/${item.title}`}>
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
                  <div
                    className="content-container"
                    style={{
                      fontFamily: "Philosopher, sansSerif",
                      letterSpacing: "2px",
                      textShadow: "0px 1px black",
                    }}
                  >
                    {item.description}
                    {token &&
                    token !== "" &&
                    token !== undefined &&
                    token !== null ? (
                      <button
                        onClick={handleDeleteClick}
                        className="delete-button"
                      >
                        DELETE
                      </button>
                    ) : null}
                  </div>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
