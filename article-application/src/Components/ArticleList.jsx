import React from "react";
import articles from "../data/articles";

function ArticleList() {
  return (
    <div>
      <h2>All Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={`/article/${article.id}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;