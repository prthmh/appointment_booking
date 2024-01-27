import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { GrShare } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <input type="checkbox" id="check" />
      <h2>Appointo</h2>
      <div className="header_options">
        <div className="menu">
          <label htmlFor="check" className="close_btn">
            <FaTimes />
          </label>
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

      <label htmlFor="check" className="menu_btn">
        <FaBars />
      </label>
    </div>
  );
};

export default Header;
