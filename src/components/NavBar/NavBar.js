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
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Text");
  };
  return (
    <nav>
      <div className="left">
        <img className="logo margin-left-25" src={logo} alt="" />
        <BiMenu className="icon margin-left-25" />
        <BiError className="icon margin-left-25" />
        <div className="create-field margin-left-25">
          <div className="thin-border">
            <BiPencil className="icon" />
          </div>
          <p className="">CREATE</p>
        </div>
        <div className="status margin-left-25">
          <p>online</p>
        </div>
      </div>
      <div className="right">
        <div className="serch-field">
          <form action="" onSubmit={handleSearch}>
            <div className="alignable">
              <input type="text" placeholder="Search..." />
              <button>
                <BiSearch className="icon margin-left-25" />
              </button>
            </div>
          </form>
        </div>
        <BiUser className="icon margin-left-25" />
        <BiRocket className="icon margin-left-25" />
        <CgNotes className="icon margin-left-25" />
        <div className="avatarnav icon margin-left-25">
          <img src={avatar1} alt="" />
        </div>
        <p>BRADELY COOPER</p>
        <BiDownArrowCircle className="icon margin-right-25 " />
      </div>
    </nav>
  );
};

export default NavBar;
