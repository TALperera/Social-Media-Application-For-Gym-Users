import React from "react";
import "./Left.css";
import profilepic from "../../images/profile-1.jpg";
import { Link } from "react-router-dom";


export default function Left() {
  return (
    <div className="left">
      <a href="/profile" className="profile">
        <div className="profile-photo">
          <img src={profilepic} alt="profile-picture" />
        </div>
        <div className="handle">
          <h4>James Hunt</h4>
          <p className="text-muted">@James</p>
        </div>
      </a>
      <div className="sidebar">
        <a className="menu-item active">
          <span>
            <i className="uil uil-home" />{" "}
          </span>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-compass" />{" "}
          </span>
          <Link to="/workoutplan">
            <h3>Workout Plan</h3>
          </Link>
        </a>
        <a className="menu-item" id="notifications">
          <span>
            <i className="uil uil-bell">
              <small className="notification-count">9+</small>
            </i>{" "}
          </span>
          <Link to="/workoutstatus">
            <h3>Workout Staus</h3>
          </Link>
        </a>
        <a className="menu-item" id="notifications">
          <span>
            <i className="uil uil-bell">
              <small className="notification-count">9+</small>
            </i>{" "}
          </span>
          <Link to="/mealPlan">
            <h3>Meal plan</h3>
          </Link>
        </a>
      </div>
    </div>
  );
}
