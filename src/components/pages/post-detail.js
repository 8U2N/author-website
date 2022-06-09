import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState({
    description: "",
    id: "",
    title: "",
    image: "",
  });

  const token = sessionStorage.getItem("token");
  const location = useLocation();

  const [description, setDescription] = useState([]);
  const [postId, setPostId] = useState([]);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);

  const updatePost = useState({
    description: description,
    id: postId,
    title: title,
    image: image,
  });

  useEffect(() => {
    getPost();
  }, []);

  function getPost() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http:127.0.0.1:3000",
      },
    };
    fetch(`http://127.0.0.1:5000${location.pathname}`, options)
      .then((response) => response.json())
      .then((data) => setPost(data));
    console.log("this is post: ", post);
  }

  //   useEffect(() => {
  //     getFeaturedPost();
  //   }, []);

  //   function getFeaturedPost() {
  //     fetch(`http://127.0.0.1:5000/post/${post.id}`)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //     // setDescription(post.description);
  //     // setPostId(post.postId);
  //     // setImage(post.image);
  //     // setTitle(post.title);
  //   }

  function handleEditClick(id) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http:127.0.0.1:3000",
      },
      body: JSON.stringify({ ...updatePost }),
    };
    fetch(`http://127.0.0.1:5000/post/update/${id}`, options).then(
      (response) => {
        response
          .json()
          .then((response) => {
            console.log(response);
            getPost();
          })
          .catch((error) => {
            console.error("Error: Update Failed!", error);
          });
      }
    );
  }

  return (
    <div className="heading" key="heading">
      {token && token !== "" && token !== undefined && token !== null ? (
        <h1>EDIT POST DETAIL</h1>
      ) : (
        <h1>{post.title.toUpperCase()}</h1>
      )}
      <div className="post-wrapper" style={{ overflow: "hidden" }}>
        <div className="post-detail" key={post.id}>
          <div className="post-container" key={post.id} id={post.id}>
            {token && token !== "" && token !== undefined && token !== null ? (
              <div className="edit-featured-image-container">
                <h2 style={{ color: "white" }}>
                  Edit Details for {post.title}
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
              <Link to={`/post/${post.title}`}>
                <div className="featured-image-container">
                  <img src={post.image} alt="book" style={{ width: "300px" }} />
                </div>
              </Link>
            )}
            {token && token !== "" && token !== undefined && token !== null ? (
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
                {post.title}
              </h2>
            )}
            {token && token !== "" && token !== undefined && token !== null ? (
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
                  placeholder={post.description}
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
                {post.description}
              </div>
            )}
            {token && token !== "" && token !== undefined && token !== null ? (
              <div className="change-button-wrapper">
                <button
                  onClick={() => handleEditClick(post.id)}
                  className="edit-button"
                >
                  UPDATE
                </button>
              </div>
            ) : (
              <div className="read-more-button-wrapper">
                <Link to={`/${post.title}`}>
                  <button className="read-more-button">READ MORE</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
