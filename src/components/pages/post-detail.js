import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState([]);
  const blogPost = [post];
  const location = useLocation();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000${location.pathname}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [location.pathname]);

  return (
    <div className="heading" key="heading">
      <h1>BLOG</h1>
      <div className="post-wrapper" style={{ overflow: "hidden" }}>
        {blogPost.map((item) => {
          return (
            <div className="post-detail" key={post.id}>
              <h2
                style={{
                  color: "red",
                  fontFamily: "Orbitron, sansSerif",
                  letterSpacing: "3px",
                  textShadow: "2px 3px black",
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </h2>
              <div
                className="featured-image-container"
                key="featured-image-container"
              >
                <img src={item.image} alt="book" style={{ width: "300px" }} />
              </div>

              <div
                className="content-container"
                key="content-container"
                style={{
                  fontFamily: "Philosopher, sansSerif",
                  letterSpacing: "2px",
                  textShadow: "0px 1px black",
                }}
              >
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostDetail;
