import React from "react";
import "./head.css";
import notification from "../assets/Logos/Notification.svg";
import setting from "../assets/Logos/Setting.svg";
import profilelogo from "../assets/Logos/profilelogo.svg";
import magnifire from "../assets/Logos/magnifier.svg";
const Header = () => {
  return (
    <div className="headnav">

      <div className="title">Dashboard</div>

      <div className="profile-section">
        <div className="searchbox">
          <img src={magnifire} alt="" />
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="icons">
          <img src={notification} alt="" />
          <img src={setting} alt="" />
          <img src={profilelogo} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
