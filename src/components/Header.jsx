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
          <a a href="">Home</a>
        </div>
        <div className="nav-item">
          <a href="">New</a>
        </div>
        <div className="nav-item">
          <a href="">Popular</a>
        </div>
        <div className="nav-item">
          <a href="">Trending</a>
        </div>
        <div className="nav-item">
          <a href="">Categories</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
