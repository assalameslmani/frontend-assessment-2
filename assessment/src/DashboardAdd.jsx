import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './bootstrap.min.css';
import DashboardHeader from './DashboardHeader';

function DashboardAdd() {
  const [articleData, setArticleData] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:5000/articles/add', {
      title,
      category,
      author,
      body
    })
      .then((response) => {
        console.log(response.data.data);
        setArticleData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <DashboardHeader />

      <div className='container'>
        <p className='add-article'>ADD ARTICLE</p>

        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="h-input"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="h-input"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="h-input"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              className="h-input input-body"
              id="body"
              name="body"
              rows="4"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <br />
          {/* <div className="form-group">
                        <label>Image</label>
                        <input
                    type="file"
                    onClick={(e) => handlePicture(article._id, '', e.target.)}
                    accept="image/*"
                  />
                </div> */}
          <button
            type="button"
            className="form-submit add-article-btn"
            onClick={handleAdd}
          >
            ADD ARTICLE
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashboardAdd;
