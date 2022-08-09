import React from "react";
import man from "../../media/man.png";
import bg from "../../media/manbg.png";
import "./Charts.css";
import { AiOutlineStar } from "react-icons/ai";
import { BsGlobe, BsPeople } from "react-icons/bs";
import { FaTelegramPlane, FaRegAddressCard } from "react-icons/fa";
import { BiTargetLock, BiPlanet, BiRocket } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const Chart61 = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "215px",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "80px",
              width: "80px",
              backgroundColor: "#295860",
              filter: "hue-rotate(240deg) invert(30%)",
            }}
            src={man}
            alt="images"
          />
          <p style={{ fontSize: "25px", margin: "1px 0" }}>BRENCE BERNELS</p>
          <p
            style={{
              margin: "0",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#00CFB7",
            }}
          >
            {" "}
            {[...Array(3)].map((e) => (
              <AiOutlineStar />
            ))}{" "}
            jhone smith{" "}
            {[...Array(3)].map((e) => (
              <AiOutlineStar />
            ))}
          </p>
        </div>
      </div>
      <div
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 0",
          borderTop: "1px solid #5D858D",
          borderBottom: "1px solid #5D858D",
        }}
      >
        <BsGlobe
          className="rounded-icon"
          style={{
            backgroundColor: "#20655D",
            color: "#00CFB7",
          }}
        />
        <FaTelegramPlane
          className="rounded-icon"
          style={{
            backgroundColor: "#7B8F38",
            color: "#C4FF00",
          }}
        />
        <BiPlanet
          className="rounded-icon"
          style={{
            backgroundColor: "#A0371D",
            color: "#FF3300",
          }}
        />
        <BiTargetLock
          className="rounded-icon"
          style={{
            backgroundColor: "#3B395E",
            color: "#6D69AC",
          }}
        />
        <MdLocationOn
          className="rounded-icon"
          style={{
            backgroundColor: "#295860",
            color: "#00A2BE",
          }}
        />
      </div>
      <div
        style={{
          fontSize: "20px",
          height: "215px",
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            marginLeft: "2px",
          }}
        >
          <MdLocationOn style={{ padding: "5px", color: "#5D858D" }} />
          <span
            style={{
              alignSelf: "center",
              margin: "0",
              color: "#5D858D",
              padding: "0",
            }}
          >
            New york
          </span>
        </div>
        <div
          style={{ display: "flex", justifyContent: "left", marginLeft: "2px" }}
        >
          <BiRocket style={{ padding: "5px", color: "#5D858D" }} />
          <span
            style={{
              alignSelf: "center",
              margin: "0",
              color: "#5D858D",
              padding: "0",
            }}
          >
            New york
          </span>
        </div>
        <div
          style={{ display: "flex", justifyContent: "left", marginLeft: "2px" }}
        >
          <BsPeople style={{ padding: "5px", color: "#5D858D" }} />
          <span
            style={{
              alignSelf: "center",
              margin: "0",
              color: "#5D858D",
              padding: "0",
            }}
          >
            New york
          </span>
        </div>
        <div
          style={{ display: "flex", justifyContent: "left", marginLeft: "2px" }}
        >
          <FaRegAddressCard style={{ padding: "5px", color: "#5D858D" }} />
          <span
            style={{
              alignSelf: "center",
              margin: "0",
              color: "#5D858D",
              padding: "0",
            }}
          >
            New york
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chart61;
