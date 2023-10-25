import './Card.css';
import React from 'react'
import { useEffect, useState } from 'react';




const Card = () => {

    const [data, setData] = useState([]);

    fetch('http://localhost:5000/Articles/getAll')
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
 

  useEffect(() => {
    fetchData();
  }, []);
  return (
    
    <div>{data.map((Articles) => (
    <div className='card'>
       
    <div className="imgcontainer"> <img src={Articles.image}  className="image"/>
</div>
<p className="Articletitle">{Articles.title}</p>
<button className="view-more">View more</button>
       

</div>
    ))}
</div>
  )
}

export default Card