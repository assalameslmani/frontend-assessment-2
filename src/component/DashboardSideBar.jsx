import React from "react";
import { Link } from "react-router-dom";
import "../style/dashboard.css"
const DashboardSideBar = () => {
  return (
    <div className="dashborad-side-article">
      <ul>
        <Link to="/dashboard/addArticle">
          <li>Add Article</li>
        </Link>
        <Link to="/dashboard/DeleteArticle">
          <li>Delete Article</li>
        </Link>
        <Link to="/dashboard/UpdateArticle">
          <li>Update Article</li>
        </Link>
      </ul>
    </div>
  );
};

export default DashboardSideBar;
