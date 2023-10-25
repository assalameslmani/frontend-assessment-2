import React, { useState } from "react";
import axios from "axios";
import "./Mycss/DashCss.css";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  // Function to handle adding an article
  const handleAddArticle = async () => {
    // Check if the required fields are not empty
    if (!title || !author || !category || !body || !image) {
      console.error("Please fill in all the required fields.");
      return;
    }

    const articleData = new FormData();
    articleData.append("title", title);
    articleData.append("author", author);
    articleData.append("category", category);
    articleData.append("body", body);
    articleData.append("image", image);

    try {
      // Send a POST request to add the article
      const response = await axios.post("http://localhost:5000/article/add", articleData);

      if (response.status === 200) {
        console.log("Article added successfully");
        // Optionally, reset the form or perform any other action upon successful article addition
      } else {
        console.error("Error adding the article.");
      }
    } catch (error) {
      console.error("Error during article addition:", error);
    }
  };

  return (
    <div className="dash-assignment">
      <h2 className="assignment-title">Add Article</h2>
      <div className="assignment-input-list">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="assignment-zoom" // Added the same style as for Zoom Link
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="assignment-zoom" // Added the same style as for Zoom Link
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="assignment-zoom" // Added the same style as for Zoom Link
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="assignment-file" // Added the same style as for Assignment File
        />
        <label htmlFor="article-body">Body</label>
        <textarea
          id="article-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="assignment-requirement" // Added the same style as for Assignment Requirements
        ></textarea>
      </div>
      <button
        type="button"
        className="assignment-btn-submit"
        onClick={handleAddArticle}
      >
        Submit
      </button>
    </div>
  );
};

export default AddArticle;
