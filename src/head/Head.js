import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./Head.css";

const Head = () => {
  return (
    <>
      <div className="head-container"></div>
      <div className="header">
        <div className="header-text">Today</div>
        <div className="header-text">Hourly</div>
        <div className="header-text">10 Day</div>
        <div className="header-text">Weekend</div>
        <div className="header-text">Monthly</div>
        <div className="header-text">Radar</div>
        <div
          className="header-text"
          style={{ display: "flex", alignItems: "center" }}
        >
          <FontAwesomeIcon icon={faCirclePlay} size="xl" />
          <div style={{ marginLeft: "7px" }}>Video</div>
        </div>
        <div
          className="header-text"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ marginRight: "7px" }}>More Forecasts</div>
          <FontAwesomeIcon icon={faCaretDown} size="xl" />
        </div>
      </div>
    </>
  );
};

export default Head;
