import React, { useState, useEffect } from "react";


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
      const response = await fetch(`http://localhost:5000/articles/get/${articleId}`);
      if (response.status === 200) {
        const data = await response.json();
        setArticle(data.data);
        console.log("article",data);
      } else {
        console.error("Article not found");
        setArticle(null);
      }
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  return (
    <div >
      <h2 >Get Article By Id</h2>
      <div >
        <div>
          <label htmlFor="articleId">Article ID</label>
          <input
            type="text"
            id="articleId"
            placeholder="Article ID"
            
            value={articleId}
            onChange={(e) => setArticleId(e.target.value)}
          />
        </div>
      </div>

      <button
        type="button"
      
        onClick={handleFetchArticle}
      >
        Submit
      </button>

      {article && (
        <div >
          <h3>title {article.title}</h3>
          <p>author {article.author}</p>
          <p>{article.category}</p>
          <p>{article.body}</p>
          {article.image && <img src={article.image} alt="Article" />}
        </div>
      )}
    </div>
  );
};

export default ArticleById;