// UpdateArticle.js
import React, { useState } from "react";
import axios from "axios";
const UpdateArticle = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  const handleUpdateArticle = async () => {
    if (!title || !author || !category || !body) {
      console.error("Please fill in all the required fields.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('category', category);
    formData.append('body', body);

    if (image) {
      formData.append('image', image[0]); 
    }

    try {
      const response = await axios.put(`http://localhost:5000/articles/update/${title}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("Article updated successfully");
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
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files)}
          
        />
        <label htmlFor="article-body">Body</label>
        <textarea
          id="article-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          
        ></textarea>
      </div>
      <button
        type="button"
        
        onClick={handleUpdateArticle}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateArticle;