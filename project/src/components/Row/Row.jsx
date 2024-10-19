import React from "react";
import "./StyleRow.css";

function Row({ children }) {
  return (
    <div className="flex flex-wrap justify-around w-full h-fit">{children}</div>
  );
}

export default Row;
