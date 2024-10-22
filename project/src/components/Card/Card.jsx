import React from "react";
import "./StyleCard.css";

const Card = ({ children, width, title }) => {
  const boxStyle = {
    width: width,
  };
  return (
    <div
      style={boxStyle}
      className="card relative min-h-[450px] h-fit overflow-hidden"
    >
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
