import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { GrShare } from "react-icons/gr";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Appointo</h2>
      <div className="header_option">
        <div className="menu">
          <span>Menu</span>
          <span className="down_icon">
            <IoChevronDown />
          </span>{" "}
        </div>
        <div>Contact us</div>
        <div className="share">
          <span className="share_icon">
            <GrShare />
          </span>
          <span id="share_text">Share Link</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
