// UpdateArticle.js
import React, { useState } from "react";
import axios from "axios";
import "./Mycss/DashCss.css";

const UpdateArticle = () => {
  const [id, setId] = useState(""); // Add an input for Article ID
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  // Function to handle updating an article
  const handleUpdateArticle = async () => {
    // Check if the required fields are not empty
    if (!id || !title || !author || !category || !body || !image) {
      console.error("Please fill in all the required fields.");
      return;
    }

    const articleData = new FormData();
    articleData.append("id", id); // Include ID
    articleData.append("title", title);
    articleData.append("author", author);
    articleData.append("category", category);
    articleData.append("body", body);
    articleData.append("image", image);

    try {
      // Send a PUT request to update the article
      const response = await axios.put("http://localhost:5000/article/update/" + id, articleData);

      if (response.status === 200) {
        console.log("Article updated successfully");
        // Optionally, reset the form or perform any other action upon successful article update
      } else {
        console.error("Error updating the article.");
      }
    } catch (error) {
      console.error("Error during article update:", error);
    }
  };

  return (
    <div className="dash-assignment">
      <h2 className="assignment-title">Update Article</h2>
      <div className="assignment-input-list">
        <input
          type="text"
          placeholder="Article ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="assignment-zoom"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="assignment-zoom"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="assignment-zoom"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="assignment-zoom"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="assignment-file"
        />
        <label htmlFor="article-body">Body</label>
        <textarea
          id="article-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="assignment-requirement"
        ></textarea>
      </div>
      <button
        type="button"
        className="assignment-btn-submit"
        onClick={handleUpdateArticle}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateArticle;
