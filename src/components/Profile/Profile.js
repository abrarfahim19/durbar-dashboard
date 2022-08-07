import React from "react";
import "./Profile.css";
import avatar1 from "../../media/avatar1.png";
import { GoLocation } from "react-icons/go";

const Profile = () => {
  return (
    <div className="profile">
      <div className="pravatar">
        <img src={avatar1} alt="" />
      </div>
      <h4>BRADELY COOPER</h4>
      <p>
        <GoLocation />
        New York, Earth
      </p>
      <div className="score">
        <div className="single-score">
          <h3>250</h3>
          <p>Planets</p>
        </div>
        <div className="single-score">
          <h3>1,250</h3>
          <p>Planets</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
