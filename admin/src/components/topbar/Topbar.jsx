import React, { useEffect, useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "@material-ui/core";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../images/a-letter-logo-png-4.png";

export default function Topbar() {
  const location = useLocation();
//   const userId= location.pathname.split("/")[2];
//   const user = useSelector((state) =>
//   state.user.users.find((user) => user._id === userId)
// );

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <a style={{textDecoration:"none",textTransform:"uppercase",display:'flex',justifyContent:"center",alignItems:"center"}} href="/" >
            <img src={logo} alt="logo" style={{width:"35px", marginRight:"10px",height:"auto"}} />
            <span className="logo">Ans-Boutique</span>
          </a>
          
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={
                // user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              } alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
