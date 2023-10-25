import React, { useState } from "react";
import './Mycss/DashCss.css';

const ArticleById = () => {
 

  // Function to handle adding an assignment
  

  return (
    <div className='dash-assignment'>
        
      <h2 className='assignment-title'>Get Article By Id</h2>
      <div className='assignment-input-list'>
        <div className="assignment-input">
          
        </div>
      
       
        <div className="assignment-input">
        <label htmlFor="assignment-requirement"> Article ID</label>

          <input
            type="text"
            id="category"
            placeholder=" Article ID"
            className='assignment-zoom'
          />
        </div>
     
        
      </div>

      <button
        type="button"
        className='assignment-btn-submit'
      >
        Submit
      </button>
      

    </div>
  );
};

export default ArticleById;
