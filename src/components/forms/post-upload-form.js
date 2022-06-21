import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PostUploadForm() {
  const [values, setValues] = useState({
    image: "",
    title: "",
    description: "",
  });

  const history = useHistory();

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [login, setLogin] = useState(false);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email && values.password && !login) {
      setValid(true);
      setLogin(true);
    }
    setSubmitted(true);
  };

  const handleClick = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: values.image,
        title: values.title,
        description: values.description,
      }),
    };
    fetch("https://by-blood-or-by-star-back.herokuapp.com/post", options)
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) => {
        console.log("This came from the back end:", data);
        setValues({
          image: "",
          title: "",
          description: "",
        });
        history.push("/home");
      })
      .catch((error) => {
        console.error("Error: Post upload failed!", error);
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-banner">Post Added!</div>
        ) : null}
        <div className="upload-form-image-wrapper">
          <img src={values.image} style={{ width: "150px" }} alt="upload" />
        </div>
        <input
          type="text"
          onChange={handleInputChange}
          value={values.image}
          className="form-field"
          name="image"
          placeholder="Image URL"
        ></input>
        {submitted && !values.title ? (
          <span>Don't you need an image?</span>
        ) : null}
        <input
          type="text"
          onChange={handleInputChange}
          value={values.title}
          className="form-field"
          name="title"
          placeholder="Title"
        />
        {submitted && !values.title ? (
          <span>Bruh...try adding a title!</span>
        ) : null}
        <textarea
          onChange={handleInputChange}
          value={values.description}
          className="form-field"
          name="description"
          placeholder="Description"
        />
        {submitted && !values.description ? (
          <span>You've really lost it this time...INCLUDE A DESCRIPTION!</span>
        ) : null}
        <button onClick={handleClick} className="form-field" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default PostUploadForm;
