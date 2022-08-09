import React from "react";
import "./Aside.css";
import Side from "../Side/Side";

const Aside = () => {
  return (
    <div
      style={{
        height: "3246px",
        backgroundColor: "#1D1D1D",
      }}
      className="sidebar"
    >
      <Side />
    </div>
  );
};

export default Aside;
