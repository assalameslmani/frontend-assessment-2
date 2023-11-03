import React from 'react';
import './App.css';
import Addarticle from './Addarticle';
import DeleteArticle from './DeleteArticle';
import UpdateArticle from './UpdateArticle';
import GetAllArticles from './GetAllArticles'
import ArticleById from './ArticleById';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ArticleById" element={<ArticleById />} />

        <Route path="/addArticles" element={<Addarticle />} />
        <Route path="/DeleteArticle" element={<DeleteArticle />} />

        <Route path="/getArticles" element={<GetAllArticles />} />
        <Route path="/UpdateArticle" element={<UpdateArticle />} />
      </Routes>
    </BrowserRouter>    </div>
  );
}

export default App;