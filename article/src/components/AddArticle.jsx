import React from 'react'
import React, { useState } from 'react';
import  './Dash.css';



const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [image, setimage] = useState('');
    const [body, setBody] = useState('');
  
  
    const handleAddArticle = async () => {
      const ArticleBody = { title, author,category,image, body };
  
      const response = await fetch('http://localhost:5000/Articles/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ArticleBody),
      });
      console.log(response)
      const data = await response.json();
      console.log(data);
    };
  
    return (
        <div className='addmain'>
            <h1 class="text">Add Article</h1>
      <div className="Article-form">
        
        <input
          type="text" class="inputstyle"
          placeholder="Enter title here"
          onChange={(e) => setTitle(e.target.value)}
        />

<input
          type="text"class="inputstyle"
          placeholder="Enter author here"
          onChange={(e) => setAuthor(e.target.value)}
        />
 <input
          type="text"class="inputstyle"
          placeholder="Enter Category here"
          onChange={(e) => setCategory(e.target.value)}
        />
 

       
        
        <textarea
          name="Article-body"
          cols="30"
          rows="10"class="inputstyle"
          placeholder="Enter body part1 here"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>



        <textarea
          name="Article-body"
          cols="30"class="inputstyle"
          rows="10"
          placeholder="Enter body part2 here"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>


       



        <button onClick={handleAddArticle}>Add Article</button>
      </div>
      </div>
    );
  };
  


export default AddArticle