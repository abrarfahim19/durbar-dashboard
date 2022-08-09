import React from "react";
import Sevenbg from "../../media/Sevenbg.png";
import {
  TbPlayerPlay,
  TbPlayerTrackNext,
  TbPlayerTrackPrev,
  TbPlayerSkipForward,
  TbPlayerSkipBack,
} from "react-icons/tb";
import "./Charts.css";

const Chart72 = () => {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#2D2C3C" }}>
      {/* image div  */}
      <div
        className="image-shadow"
        style={{
          backgroundImage: `url(${Sevenbg})`,
          position: "relative",
          height: "90%",
          width: "100%",
        }}
      >
        <span className="top-left" style={{ fontSize: "18px", color: "white" }}>
          EARTH'S ATMOSPHERE
        </span>

        <span
          className="bottom-left"
          style={{ fontSize: "15px", color: "white" }}
        >
          35:19:47:52
        </span>

        <div
          className="bottom-right"
          style={{
            fontWeight: "bolder",
            marginBottom: "10px",
            color: "#56BACA",
          }}
        >
          <TbPlayerSkipBack style={{ paddingRight: "5px" }} />
          <TbPlayerTrackPrev style={{ paddingRight: "5px" }} />
          <TbPlayerPlay style={{ paddingRight: "5px" }} />
          <TbPlayerTrackNext style={{ paddingRight: "5px" }} />
          <TbPlayerSkipForward style={{ paddingRight: "5px" }} />
        </div>
      </div>
      <div
        style={{
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#444444",
        }}
      >
        {[...Array(30)].map((e) => "·")}
        <span style={{ color: "yellow", fontSize: "20px" }}>|</span>
        {[...Array(180)].map((e) => "·")}
      </div>
    </div>
  );
};

export default Chart72;
