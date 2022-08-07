import React from "react";
import "./Aside.css";
import Location from "../Location/Location";
import Profile from "../Profile/Profile";
import SideLinks from "../SideLinks/SideLinks";

const Aside = () => {
  return (
    <div className="sidebar">
      <Profile />
      <SideLinks />
      <Location />
    </div>
  );
};

export default Aside;
