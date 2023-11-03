
import React, { useState } from "react";
import axios from "axios";


const DeleteArticle = () => {
  const [id, setId] = useState(""); 

  
  const handleDeleteArticle = async () => {
    
    if (!id) {
      console.error("Please fill in the Article ID.");
      return;
    }

    try {
      
      const response = await axios.delete(`http://localhost:5000/articles/delete/${id}`);

      if (response.status === 200) {
        console.log("Article deleted successfully");
       
      } else {
        console.error("Error deleting the article.");
      }
    } catch (error) {
      console.error("Error during article deletion:", error);
    }
  };

  return (
    <div >
      <h2 >Delete Article</h2>
      <div >
        <input
          type="text"
          placeholder="Article ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          
        />
      </div>
      <button
        type="button"
        
        onClick={handleDeleteArticle}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteArticle;