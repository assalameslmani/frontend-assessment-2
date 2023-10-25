import React from 'react';
import './App.css';
import './bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function DashboardHeader() {

    const navigate = useNavigate();

    return (
        <div>

            <div className='header container-fluid d-flex justify-content-center align-items-center'>
                <p>Blablabla</p>
            </div>

            <div className='container allContainer'>
                <p className='generaltitle'>MANAGE</p>

                <ul className="nav">
                    <li className="nav-item">
                        <p className="nav-link navhover" onClick={() => navigate(`/dashboard/edit`)}>
                            Edit articles
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link navhover" onClick={() => navigate(`/dashboard/add`)}>
                            Add an article
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link navhover" onClick={() => navigate(`/dashboard/delete`)}>
                            Delete articles
                        </p>
                    </li>
                </ul>
            </div>

            

        </div >
    );
}

export default DashboardHeader;
