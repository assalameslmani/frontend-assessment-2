import React from 'react';

import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import DeleteArticle from './dashboardDelete';
import UpdateArticle from './dashboardUpdate';
import ShowArticles from './showArticles';
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

        <Route path="/addArticles" element={<Dashboard />} />
        <Route path="/DeleteArticle" element={<DeleteArticle />} />

        <Route path="/getArticles" element={<ShowArticles />} />
        <Route path="/UpdateArticle" element={<UpdateArticle />} />
      </Routes>
    </BrowserRouter>    </div>
  );
}

export default App;
