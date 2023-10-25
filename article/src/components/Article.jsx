import React from 'react'
import './Card.css'
import { useEffect, useState } from 'react';


const Article = () => {

  const [data, setData] = useState([]);

  

    fetch('http://localhost:5000/Articles/getAll')
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div> {data.map((Articles) => (

        <div className="mainpage2">
       
        <div><p className="Articles1">{Articles.title}</p><br/>
        <p>{Articles.author}<br/>{Articles.category}</p></div>
        <div className="container">
            <div className="div1">
                {Articles.body}
            </div>
            <div className="imgscont">
            <div className="pic1"><img src="" className="img1"/>{Articles.image}</div>
            <div className="pic2"><img src="" className="img2"/>{Articles.image}</div>
        </div>
        <div className="div1">
            {Articles.body}
        </div>
    </div>
        
    </div>))}
    </div>
    
  )
}

export default Article