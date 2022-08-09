import React from "react";
import { BiBriefcase, BiPlanet } from "react-icons/bi";
import { BsChatRightDots, BsGlobe } from "react-icons/bs";
import { FaGem, FaHeart, FaRocket } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Location from "../Location/Location";
import Profile from "../Profile/Profile";

const Side = () => {
  return (
    <div style={{ position: "sticky" }}>
      <ProSidebar>
        <SidebarHeader>
          <Profile />
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              icon={<BsGlobe style={{ fontSize: "30px", color: "#ECFABD" }} />}
            >
              <span style={{ color: "#ECFABD" }}>DASHBOARD</span>
            </MenuItem>
            <SubMenu
              style={{ color: "#56BACA" }}
              title="PLANETS"
              icon={<BiPlanet style={{ fontSize: "30px", color: "#56BACA" }} />}
            >
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
            <SubMenu
              title="SPACESHIPS"
              icon={<FaRocket style={{ fontSize: "30px", color: "white" }} />}
            >
              <ul style={{ listStyleType: "circle", color: "blue" }}>
                <li>
                  <MenuItem style={{ color: "#227B89" }}>
                    Paragon 3,000
                  </MenuItem>
                </li>
                <li>
                  <MenuItem style={{ color: "#56BACA" }}>
                    Astral Explorer
                  </MenuItem>
                </li>
                <li>
                  <MenuItem style={{ color: "#227B89" }}>Solar Spirit</MenuItem>
                </li>
              </ul>
            </SubMenu>
            <MenuItem
              icon={
                <BsChatRightDots
                  style={{
                    fontSize: "30px",
                    color: "#56BACA",
                  }}
                />
              }
            >
              <span style={{ color: "#56BACA" }}>MESSAGES</span>
            </MenuItem>
            <MenuItem
              icon={
                <BiBriefcase style={{ fontSize: "30px", color: "#56BACA" }} />
              }
            >
              <span style={{ color: "#56BACA" }}>PROFILE</span>
            </MenuItem>
            <MenuItem
              icon={
                <FiSettings style={{ fontSize: "30px", color: "#56BACA" }} />
              }
            >
              <span style={{ color: "#56BACA" }}>SETTINGS</span>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Location />
        </SidebarFooter>
      </ProSidebar>
      ;
    </div>
  );
};

export default Side;
