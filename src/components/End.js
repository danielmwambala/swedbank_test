import React from "react";
import "../sass/components/_landing.scss";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const End = () => {
  return (
    <div className="section">
      <img src={logo} alt="" />
      <div className="landing__container">
        <h1>Thank you for your Submission 🙂 </h1>
        <div>
          <Link to="/">
            <button className="btn btn__active">Go to homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default End;
