import React from "react";
import AboutAppIcon from "../assets/about_app.png";
import "../main.css";

const AboutApp = () => (
  <div className="page-container">
    <h1 className="heading">About the App</h1>
    <img className="page-icon" src={AboutAppIcon} alt="about-app" />
  </div>
);

export default AboutApp;
