import React from 'react'
import "./sidebar.css"
import {useState} from "react";
import {SidebarContents} from "../assets/Content";

const Sidebar = () => {
    let [content, setcontent] = useState(SidebarContents);
  console.log(content);
  return (
    <>
      <div className="logo">Company LOGO</div>
          <div className="sidebar-content">
            {content &&
              content?.map((el) => (
                <div className="contentbox">
                  <div className="inner-content">
                    <img src={el.Logo} alt="" />
                    <p>{el.name}</p>
                  </div>
                </div>
              ))}
          </div>
    </>
  )
}

export default Sidebar