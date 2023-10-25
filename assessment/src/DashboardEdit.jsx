import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './bootstrap.min.css';
import DashboardHeader from './DashboardHeader';

function DashboardEdit() {
    const [articleData, setArticleData] = useState([]);
    const [editedData, setEditedData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/articles/getAll')
            .then((response) => {
                setArticleData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleEdit = (article) => {
        setEditedData(article);
    };

    const handleUpdate = (article) => {
        axios.put(`http://localhost:5000/articles/updateArticleById/${article._id}`, article)
            .then((response) => {
                console.log('Article updated:', response.data);
                // Clear the edited data
                setEditedData(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <DashboardHeader />

            <div className="container">
                <p className="add-article">EDIT ARTICLES</p>

                {articleData.map((article) => (
                    <div key={article._id}>
                        <button onClick={() => handleEdit(article)} className='start-edit'>Click here to start editing the below article </button>
                        <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className="h-input"
                                    name="title"
                                    value={(editedData && editedData._id === article._id) ? editedData.title : article.title}
                                    onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    type="text"
                                    className="h-input"
                                    name="category"
                                    value={(editedData && editedData._id === article._id) ? editedData.category : article.category}
                                    onChange={(e) => setEditedData({ ...editedData, category: e.target.value })}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Author</label>
                                <input
                                    type="text"
                                    className="h-input"
                                    name="author"
                                    value={(editedData && editedData._id === article._id) ? editedData.author : article.author}
                                    onChange={(e) => setEditedData({ ...editedData, author: e.target.value })}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="body">Body</label>
                                <textarea
                                    className="h-input input-body"
                                    name="body"
                                    rows="4"
                                    value={(editedData && editedData._id === article._id) ? editedData.body : article.body}
                                    onChange={(e) => setEditedData({ ...editedData, body: e.target.value })}
                                />
                            </div>
                            <br />
                            {/* <div className="form-group">
                        <label>Image</label>
                        <input
                    type="file"
                    onClick={(e) => handlePictureChange(article._id, '', e.target.)}
                    accept="image/*"
                  />
                </div> */}
                            <br />
                            <button type="button" className="form-submit add-article-btn" onClick={() => handleUpdate(editedData || article)}>
                                SAVE CHANGES
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardEdit;
