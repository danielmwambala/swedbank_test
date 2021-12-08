import React, { Component } from "react";
import "../sass/components/_landing.scss";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    return (
      <div className="section">
        <img src={logo} alt="" />
        <div className="landing__container">
          <h1>Thank you for visiting our website</h1>
          <p className="description">Would you like to take a short survey?</p>
          <p className="description query">We promise, it won't take long 😇</p>
          <div>
            <Link to="/stepOne">
              <button className="btn btn__active">Yes, take me there!</button>
            </Link>
            <Link to="/end">
              <button className="btn btn__primary">No, Thank you</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
