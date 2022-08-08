import React from "react";
import "./Aside.css";
import Location from "../Location/Location";
import Profile from "../Profile/Profile";
import Sidebar from "../SideLinks/Sidebar";

const Aside = () => {
  return (
    <div className="sidebar">
      <Profile />
      {/* <Sidebar /> */}
      <Location />
    </div>
  );
};

export default Aside;
