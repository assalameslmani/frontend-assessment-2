import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import logo from './logo.svg';

function SingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/articles/getArticleById/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setArticle(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <div className='header container-fluid d-flex justify-content-center align-items-center'>
        <p>Blablabla</p>
      </div>

      <div className='container allContainer'>
        <p className='generaltitle'>{article.title}</p>
        <p className='category'>{article.category}</p>
        <p className='author'>{article.author}</p>
        <img src={logo} alt="picture" className='picture' />
        <p className='body'>{article.body}</p>
      </div>
    </div>
  );
}

export default SingleArticle;
