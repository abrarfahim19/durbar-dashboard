import React from "react";
import "./NavBar.css";
import logo from "../../media/logo.png";
import avatar1 from "../../media/avatar1.png";
import { BiError } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiRocket } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { BiDownArrowCircle } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="" />
        <BiMenu className="icon" />
        <BiError className="icon" />
        <BiPencil className="icon" />
        <p>CREATE</p>
        <p>online</p>
      </div>
      <div className="right">
        <h2>this is right</h2>
        {/* <form action="" onSubmit={() => console.log("text")}>
          <input type="text" placeholder="Search..." />
          <button>
            <BiSearch className="icon" />
          </button>
        </form>
        <BiUser className="icon" />
        <BiRocket className="icon" />
        <CgNotes className="icon" />
        <div className="avatarnav">
          <img src={avatar1} alt="" />
        </div>
        <p>Bradely Cooper</p>
        <BiDownArrowCircle className="icon" /> */}
      </div>
    </nav>
  );
};

export default NavBar;
