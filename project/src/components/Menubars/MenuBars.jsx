import React from "react";
import "./StyleMenuBars.css";
import { useState } from "react";

function MenuBars() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div onClick={handleClick} className="dots">
      <div className={isActive ? "dot1" : "cross1 dot1"}></div>
      <div className={isActive ? "dot2" : "cross2 dot2"}></div>
      <div className={isActive ? "dot3" : "cross3 dot3"}></div>
    </div>
  );
}

export default MenuBars;
