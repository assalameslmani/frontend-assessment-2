import React from 'react';

import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import DeleteArticle from './dashboardDelete';
import UpdateArticle from './dashboardUpdate';
import ShowArticles from './showArticles';
function App() {
  return (
    <div >
      <ShowArticles/>
    </div>
  );
}

export default App;
