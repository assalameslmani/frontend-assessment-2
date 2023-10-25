import "../style/modal.css"

const Modal = ({ handleClose, show, title,category,body,image,author }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-contain">
          <img
            src={`data:image/png;base64,${image}`}
            alt="image1"
            className="image2"
          />
          <div className="modal-content">
            <h1>{title}</h1>
            <h2>{category}</h2>
            <h6>{body}</h6>
            <h5>{author}</h5>
          </div>
        </div>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal;