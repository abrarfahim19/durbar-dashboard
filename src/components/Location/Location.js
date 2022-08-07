import React from "react";
import "./Location.css";
import locationBg from "../../media/totalLocationBg.png";

const Location = () => {
  return (
    <div>
      <p>LOCATION</p>
      <div className="location">
        <div className="bg-image">
          <img src={locationBg} alt="" />
        </div>
        <div className="location-details">
          <h3>KAHIR MORHAN</h3>
          <p>GALLI PRIME 7123</p>
        </div>
        <div className="location-about">
          <p>
            Gant planet located about 65 light years away. It is the brightest
            planet in the zodiac constellation of Taurus.
          </p>
        </div>
        <div className="location-button">
          <a href="#">MORE</a>
        </div>
      </div>
    </div>
  );
};

export default Location;
