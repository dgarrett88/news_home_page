import React from "react";
import "../css/header.css";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav-container">
        <div className="nav-item">
          <p>Home</p>
        </div>
        <div className="nav-item">
          <p>New</p>
        </div>
        <div className="nav-item">
          <p>Popular</p>
        </div>
        <div className="nav-item">
          <p>Trending</p>
        </div>
        <div className="nav-item">
          <p>Categories</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
