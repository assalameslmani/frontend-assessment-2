import React from "react";
import articles from "../data/articles";

function Article({ match }) {
  const articleId = match.params.id;
  const article = articles.find((a) => a.id.toString() === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;