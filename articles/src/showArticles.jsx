import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  // Function to fetch all articles
  const fetchAllArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/article/getAll"); // Replace with your actual API endpoint
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
    // Fetch all articles when the component mounts
    fetchAllArticles();
  }, []);

  return (
    <div className="article-list">
      <h2 className="article-title">All Articles</h2>
      <ul>
        {articles.map((article) => (
            <ArticleCard
           key={article._id}
           title= {article.title}
            author={article.author}
           category= {article.category}
            body = {article.body}
          image = {article.image} 
          />
        ))}
      </ul>
    </div>
  );
};

export default AllArticles;
