import React from "react";
import "./info1.css";
import file from "../assets/Logos/File.svg"
const Info1 = ({logo, text, info}) => {


  return (
    <div className="box-content">
      <div className="logobox">
        <img src={logo} alt="" />
      </div>
      <div className="text-box">
        <p>{text}</p>
        <h1>{info}</h1>
      </div>
    </div>
  );
};

export default Info1;
