const ArticleCard = ({ title, author, category, body,image }) => {
    return (
      <div className="blog-card">
        <h1>{title}</h1>
        <h5>{author}</h5>
        <p>{category}</p>
        <p>{body}</p>
        <img src={image}></img>
      </div>
    );
  };
  
  export default ArticleCard;
  