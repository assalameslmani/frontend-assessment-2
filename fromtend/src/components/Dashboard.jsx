import React from "react";
import Display from "../components/Display";
import Add from "../components/Add";
//import Delete from "../components/Delete";
//import Update from "../components/Update";
import { useState } from "react";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="side-menu">
        <p className="dash-title">Dashboard</p>
        <ul className="dash-menu">
          <li className="dash-menu-item">
            <a href="#display">Display All Articles</a>
          </li>
          <li className="dash-menu-item">
            <a href="#add">Add Articles</a>
          </li>
          <li className="dash-menu-item">
            <a href="#delete">Delete Articles</a>
          </li>
          <li className="dash-menu-item">
            <a href="#update">Update Articles</a>
          </li>
        </ul>
      </div>
      <div className="section">
        <Display />
        <Add />
      </div>
    </div>
  );
}

export default Dashboard;
