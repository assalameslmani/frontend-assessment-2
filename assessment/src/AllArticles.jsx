import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './bootstrap.min.css';
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';

function AllArticles() {
    const navigate=useNavigate();

    const [articleData, setArticleData] = useState([]);
    const [bool, setBool] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/articles/getAll`)
            .then((response) => {
                console.log(response.data.data);
                setArticleData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [bool]);

    return (
        <div>
            <div className='header container-fluid d-flex justify-content-center align-items-center'>
                <p>Blablabla</p>
            </div>

            <div className='container allContainer'>
                <p className='generaltitle'>All Articles</p>

                <div className='allArticles d-flex'>
                        {articleData && articleData.map((item) => (
                            <div key={item._id} className="card">
                                <img src={logo} className="card-img-top" alt="picture" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Category: {item.category}</p>
                                    <p className="readmore" onClick={() => navigate(`/articles/${item._id}`)}>Read more</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default AllArticles;
