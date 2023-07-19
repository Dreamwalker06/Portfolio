import React, { useState } from "react";
import "./collapse.scss";
import click from "../../assets/images/click_logo.png"

const Collapse = ({ title, text, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse_container">
      <button  onClick={handleToggleCollapse} >
        {title} 
        <span 
          className={`collapse-arrow ${isCollapsed ? "" : "rotated"}`}
          onClick={handleToggleCollapse}
        >
          <img className="logo_click" src={click} /> 
        </span>
      </button>
      <div
        className={`collapse-content ${isCollapsed ? "closed" : "expanded"}`}
      >
        {" "}
        <div className="collapse-title ">{text}</div>
        {children}
      </div>
    
    </div>
  );
};

export default Collapse;
