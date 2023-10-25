import React, { useState, useEffect } from "react";
import "../styles/articles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const handleDeleteProject = (articleId) => {
  fetch(`http://localhost:5000/projects/delete/${articleId}`, {
    method: "DELETE",
  })
    .then((response) => response.data.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        window.alert("Project deleted successfully!");
      } else {
        window.alert("Project couldn't be deleted!");
      }
    })
    .catch((error) => {
      console.error("Error deleting project:", error);
    });
};

const Display = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl = "http://localhost:5000/Article/getAll";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="articles" id="display">
      <h1>Dispaly All Articles</h1>
      <div className="article-container">
        {data.map((article) => (
          <div className="card" key={article.id}>
            <p className="title">{article.title}</p>
            <img src={article.image} alt={article.title} className="image" />
            <p className="author">{article.author}</p>
            <p className="category">{article.category}</p>
            <p className="body">{article.body}</p>
            <button
              className="delete_button"
              onClick={handleDeleteProject(article.id)}
            >
              Delete Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
