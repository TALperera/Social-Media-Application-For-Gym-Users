import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.png";

import profileImage from "../../images/profile-1.jpg";
export default function Header() {
  return (
    <nav>
      <div className="container">
      <Link to="/">
            <img src={logo1} alt="logo" className='logo1'/>
      </Link>
        <div className="search-bar">
          <i className="uil uil-search" />
          <input
            type="search"
            placeholder="search for Creators, Inspirations and Projects"
          />
        </div>
        <div className="create">
          
          <div className="profile-photo">
          <Link to="/profile"> <img src={profileImage} alt="profile1" /></Link>
          </div>
          <li>
            <a onClick="">
              logout
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}
