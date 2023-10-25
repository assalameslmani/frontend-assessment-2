// DeleteArticle.js
import React, { useState } from "react";
import axios from "axios";
import "./Mycss/DashCss.css";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();

    const AddArticle=()=>{
        navigate("/addArticles");
    }
    const DeleteArticle=()=>{
        navigate("/DeleteArticle");
    }
    const GetArticles=()=>{
        navigate("/getArticles");
    }
    const GetArticleById=()=>{
        navigate("/ArticleById");
    }
    const UpdateArticle=()=>{
        navigate("/UpdateArticle");
    }

return (
    <div className="dash-assignment">
      <h2 className="assignment-title">Delete Article</h2>
      
      <button
        type="button"
        className="assignment-btn-submit"
        onClick={AddArticle}
      >
        Add
      </button>
      <button
        type="button"
        className="assignment-btn-submit"
        onClick={UpdateArticle}
      >
        Update
      </button><button
        type="button"
        className="assignment-btn-submit"
        onClick={DeleteArticle}

      >
        Delete
      </button>
      <button
        type="button"
        className="assignment-btn-submit"
        onClick={GetArticles}

      >
        getAll
      </button><button
        type="button"
        className="assignment-btn-submit"
        onClick={GetArticleById}
      >
        getById
      </button>
    </div>
  );
};

export default HomePage;
