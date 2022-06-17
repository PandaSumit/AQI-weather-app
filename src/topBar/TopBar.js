import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faSlash,
  faCaretDown,
  faYinYang,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";

import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topBar-container">
      <div className="container">
        <div className="container-first">
          <div className="business">
            <div className="logo">Logo</div>
            <div style={{ padding: "0 12px" }}>An IBM Business</div>
            <div style={{ fontSize: "30px" }}>I</div>
            <div className="times-of">THE TIMES OF INDIA</div>
          </div>
          <div className="search">
            <div className="search-bar">
              <input type="search" placeholder="Search City or Postcode" />
              <FontAwesomeIcon icon={faMagnifyingGlass} color="#ffffff" />
            </div>
          </div>
        </div>
        <div className="container-second">
          <div className="map">
            <FontAwesomeIcon icon={faEarthEurope} size="xl" />
            <div style={{ margin: "0 12px" }}>IN</div>
            <div style={{ fontSize: "24px", fontWeight: "300" }}>I</div>
            <div style={{ margin: "0 10px" }}>C</div>
            <FontAwesomeIcon
              icon={faCaretDown}
              size="xl"
              style={{ margin: "0 20px 0 7px" }}
            />
          </div>
          <div className="menu">
            <FontAwesomeIcon icon={faBars} size="xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
