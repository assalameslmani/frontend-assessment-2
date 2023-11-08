import React from "react";
import articles from "../data/articles";

function ArticleDashboard() {
  // You can add functionality for adding, updating, and deleting articles here

  return (
    <div>
      <h2>Article Dashboard</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.title} -{" "}
            <a href={`/dashboard/article/${article.id}`}>Edit</a> |{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleDashboard;