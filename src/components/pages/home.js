import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

const Home = (props) => {
  const [data, setData] = useState([]);
  const orderedPosts = [...data].reverse();
  const token = sessionStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    fetch("http://127.0.0.1:5000/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
    setDescription(description);
    setPostId(postId);
    setImage(image);
    setTitle(title);
  }

  function handleDeleteClick(id) {
    fetch(`http://127.0.0.1:5000/delete/${id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((response) => {
        console.log(response);
        getPosts();
      });
    });
  }

  function selectPost(id) {
    let post = [id - 1];
    setTitle(post.title);
    setImage(post.image);
    setDescription(post.description);
    setPostId(post.id);
  }

  function updatePost() {
    let post = { image, title, description, postId };
    console.warn("post", post);
  }
  function handleEditClick(id) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http:127.0.0.1:3000",
      },
      body: JSON.stringify([...selectPost()]),
    };
    fetch(`http://127.0.0.1:5000/post/update/${id}`, options).then(
      (response) => {
        response
          .json()
          .then((response) => {
            console.log(response);
            getPosts();
          })
          .catch((error) => {
            console.error("Error: Update Failed!", error);
          });
      }
    );
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
                {token &&
                token !== "" &&
                token !== undefined &&
                token !== null ? (
                  <div className="edit-featured-image-container">
                    <h2 style={{ color: "white" }}>
                      Edit Details for {item.title}
                    </h2>
                    <input
                      placeholder="New Image Url"
                      name="image"
                      onChange={(event) => {
                        setImage(event.target.value);
                      }}
                    ></input>
                  </div>
                ) : (
                  <Link to={`/post/${item.title}`}>
                    <div className="featured-image-container">
                      <img
                        src={item.image}
                        alt="book"
                        style={{ width: "300px" }}
                      />
                    </div>
                  </Link>
                )}
                {token &&
                token !== "" &&
                token !== undefined &&
                token !== null ? (
                  <div className="edit-title-wrapper">
                    <input
                      name="title"
                      placeholder="New Title"
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                    ></input>
                  </div>
                ) : (
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
                )}
                {token &&
                token !== "" &&
                token !== undefined &&
                token !== null ? (
                  <div
                    className="edit-content-container"
                    style={{
                      fontFamily: "Philosopher, sansSerif",
                      letterSpacing: "2px",
                      textShadow: "0px 1px black",
                    }}
                  >
                    <textarea
                      name="description"
                      placeholder={item.description}
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                    ></textarea>
                  </div>
                ) : (
                  <div
                    className="content-container"
                    style={{
                      fontFamily: "Philosopher, sansSerif",
                      letterSpacing: "2px",
                      textShadow: "0px 1px black",
                    }}
                  >
                    {item.description}
                  </div>
                )}
                {token &&
                token !== "" &&
                token !== undefined &&
                token !== null ? (
                  <div className="change-button-wrapper">
                    <button
                      onClick={() => handleEditClick(item.id)}
                      className="edit-button"
                    >
                      UPDATE
                    </button>
                    <button
                      onClick={() => handleDeleteClick(item.id)}
                      className="delete-button"
                    >
                      DELETE
                    </button>
                  </div>
                ) : (
                  <div className="read-more-button-wrapper">
                    <Link to={`http:127.0.0.1:5000/${item.title}`}>
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
