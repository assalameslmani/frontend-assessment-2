import React, { useState, useEffect } from "react";
import axios from "axios";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  
  const fetchAllArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/articles/getAll"); 
      if (response.status === 200) {
        const data = response.data.data;
        setArticles(data);
      } else {
        console.error("Failed to fetch articles");
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    
    fetchAllArticles();
  }, []);

  return (
    <div>
      <h2 >All Articles</h2>
      <ul>
      {articles.map((article) => (
  <div key={article._id} className="blog-card">
    <h1>{article.title}</h1>
    <h5>{article.author}</h5>
    <p>{article.category}</p>
    <p>{article.body}</p>
    <img src={article.image} alt={article.title} />
  </div>
))}

      </ul>
    </div>
  );
};

export default AllArticles;