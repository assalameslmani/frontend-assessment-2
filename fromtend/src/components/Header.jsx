import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="Logo">
        <h1 className="logo">Articles</h1>
      </div>
      <div className="div_search">
        <input type="text" className="input-search" />
        <input type="button" value="Search" className="search" />
      </div>
      <div className="Menu">
        <h3 className="menu">Dashboard</h3>
      </div>
    </div>
  );
};

export default Header;
