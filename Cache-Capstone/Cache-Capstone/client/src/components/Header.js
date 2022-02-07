import React from "react";
import { Link } from "react-router-dom";
import "./Styling/nav.css"


const Header = () => {
  return (
    <nav className="navbar-styling navbar-expand ">
      <Link to="/" className="navbar-brand">
        Cache
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-items">
          <Link to="/" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/videoform" className="nav-link">
            New Video
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/taglist" className="nav-link">
            Tags
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Header;