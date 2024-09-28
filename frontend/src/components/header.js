import React from "react";
import "./header.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerFill">
          <Link to="/">
            <img src={logo1} alt="logo" className='logo1'/>
            <img src={logo2} alt="logo" className='logo2'/>
          </Link>
          <Link to="/profile" className='loginButton'>
            <img src={logo3} alt="logo" className='logo3'/>
          </Link>
    </div>
  );
}

export default Header;