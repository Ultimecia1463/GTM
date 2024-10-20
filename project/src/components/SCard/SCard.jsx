import React from "react";
import "./StyleSCard.css";

const SCard = ({ bgColor, title, value }) => {
  const Sstyle = {
    background: bgColor,
  };
  return (
    <div style={Sstyle} className="scard">
      <div className="scard-header">
        <h1 className="text-lg">{title}</h1>
      </div>
      <div className="scard-body text-2xl font-bold text-slate-800">
        {value}
        <div className="increment text-slate-800"></div>
      </div>
    </div>
  );
};

export default SCard;
