import React from "react";
import Middle from "../middle/Middle";
import Left from "../left/Left";
import Right from "../right/Right";
import Header from "../header/Header";
import "./MainPage.css";
import { ToastContainer } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import '@iconscout/unicons/css/line.css';

export default function MainPage() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Left />
          <Middle />
          <Right />
          <ToastContainer />
        </div>
      </main>
    </div>
  );
}
import React from "react";
import Middle from "../middle/Middle";
import Left from "../left/Left";
import Right from "../right/Right";
import Header from "../header/Header";
import "./MainPage.css";
export default function MainPage() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Left />
          <Middle />
          <Right />
        </div>
      </main>
    </div>
  );
}
