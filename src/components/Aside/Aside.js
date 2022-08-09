import React from "react";
import "./Aside.css";
import Location from "../Location/Location";
import Profile from "../Profile/Profile";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { BiDownArrow, BiHeart } from "react-icons/bi";

const Aside = () => {
  return (
    <div className="sidebar">
      <Profile />
      <Location />
    </div>
  );
};

export default Aside;
