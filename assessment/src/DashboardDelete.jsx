import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './bootstrap.min.css';
import DashboardHeader from './DashboardHeader';

function DashboardDelete() {

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

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/articles/delete/${id}`)
            .then((response) => {
                setArticleData(articleData.filter(article => article._id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <DashboardHeader />

            <p className="add-article container">DELETE ARTICLES</p>
            <table className="container table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {articleData.map((article) => (
                        <tr key={article._id}>
                            <th scope="row">{article.title}</th>
                            <td>
                                <button className='delete-article' onClick={() => handleDelete(article._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    );
}

export default DashboardDelete;
