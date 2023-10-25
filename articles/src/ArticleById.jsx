import React, { useState, useEffect } from "react";
import './Mycss/DashCss.css';

const ArticleById = () => {
  const [articleId, setArticleId] = useState("");
  const [article, setArticle] = useState(null);

  const handleFetchArticle = async () => {
    // Check if the article ID is provided
    if (!articleId) {
      console.error("Please enter an Article ID.");
      return;
    }

    try {
      // Send a GET request to fetch the article by ID
      const response = await fetch(`http://localhost:5000/article/getById/${articleId}`);
      if (response.status === 200) {
        const data = await response.json();
        setArticle(data);
      } else {
        console.error("Article not found");
        setArticle(null);
      }
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  return (
    <div className='dash-assignment'>
      <h2 className='assignment-title'>Get Article By Id</h2>
      <div className='assignment-input-list'>
        <div className="assignment-input">
          <label htmlFor="articleId">Article ID</label>
          <input
            type="text"
            id="articleId"
            placeholder="Article ID"
            className='assignment-zoom'
            value={articleId}
            onChange={(e) => setArticleId(e.target.value)}
          />
        </div>
      </div>

      <button
        type="button"
        className='assignment-btn-submit'
        onClick={handleFetchArticle}
      >
        Submit
      </button>

      {article && (
        <div className="article-details">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <p>{article.category}</p>
          <p>{article.body}</p>
          {article.image && <img src={article.image} alt="Article" />}
        </div>
      )}
    </div>
  );
};

export default ArticleById;
