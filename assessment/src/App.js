import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllArticles from './AllArticles';
import SingleArticle from './SingleArticle';
import DashboardEdit from './DashboardEdit';
import DashboardAdd from './DashboardAdd';
import DashboardDelete from './DashboardDelete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllArticles/>} />
        <Route path="/articles/:id" element={<SingleArticle/>} />
        <Route path="/dashboard/edit" element={<DashboardEdit/>} />
        <Route path="/dashboard/add" element={<DashboardAdd/>} />
        <Route path="/dashboard/delete" element={<DashboardDelete/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;