
import "../style/article.css"
import { useState } from "react";
import Modal from "./Modal"

const Article = ({ key,title, category, body,image, author }) => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const  hideModal = () => {
   setShow(false);
  };

   
  return (
    <div className="article">
      <img
        src={`data:image/png;base64,${image}`}
        alt="image1"
        className="image1"
      />
      <div className="div-atricle-data">
        <h1>{title}</h1>
        <h3>{category}</h3>
        <h4>{author}</h4>
        {show && (
          <Modal
            key={key}
            title={title}
            category={category}
            body={body}
            image={image}
            author={author}
            show={showModal}
            handleClose={hideModal}
          />
        )}
        <button className="more-view-btn" onClick={showModal}>
          More View
        </button>
      </div>
    </div>
  );
};

export default Article