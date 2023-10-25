import React, { useState, useEffect } from "react";
import "../styles/articles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Article = () => {
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
      <h1>Articles</h1>
      <div className="article-container">
        {data.map((article) => (
          <div className="card" key={article.id}>
            <p className="title">{article.title}</p>
            <p>
              <img src={article.image} alt={article.title} className="image" />
            </p>
            <p className="author">{article.author}</p>
            <p className="category">{article.author}</p>
            <p className="body">{article.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
