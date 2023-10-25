// DeleteArticle.js
import React, { useState } from "react";
import axios from "axios";
import "./Mycss/DashCss.css";

const DeleteArticle = () => {
  const [id, setId] = useState(""); // Add an input for Article ID

  // Function to handle deleting an article
  const handleDeleteArticle = async () => {
    // Check if the ID is not empty
    if (!id) {
      console.error("Please fill in the Article ID.");
      return;
    }

    try {
      // Send a DELETE request to delete the article
      const response = await axios.delete("http://localhost:5000/article/delete/" + id);

      if (response.status === 200) {
        console.log("Article deleted successfully");
        // Optionally, reset the form or perform any other action upon successful article deletion
      } else {
        console.error("Error deleting the article.");
      }
    } catch (error) {
      console.error("Error during article deletion:", error);
    }
  };

  return (
    <div className="dash-assignment">
      <h2 className="assignment-title">Delete Article</h2>
      <div className="assignment-input-list">
        <input
          type="text"
          placeholder="Article ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="assignment-zoom"
        />
      </div>
      <button
        type="button"
        className="assignment-btn-submit"
        onClick={handleDeleteArticle}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteArticle;
