import React from "react";
import "./Page.css";
import Aside from "../Aside/Aside";
import Dashboard from "../Dashboard/Dashboard";

const Page = () => {
  return (
    <div className="page">
      <div className="flexbox-item1">
        <Aside />
      </div>
      <div className="flexbox-item2">
        <Dashboard />
      </div>
    </div>
  );
};

export default Page;
