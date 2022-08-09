import React from "react";
import FIvebg from "../../media/FIvebg.png";
import { BsSearch } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";

import {
  BsCloudSun,
  BsCloudRain,
  BsCloudLightningRain,
  BsCloudLightning,
} from "react-icons/bs";

const Chart52 = () => {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#2D2C3C" }}>
      {/* image div  */}
      <div
        className="image-shadow"
        style={{
          backgroundImage: `url(${FIvebg})`,
          position: "relative",
          height: "70%",
          width: "100%",
        }}
      >
        <span className="top-left" style={{ fontSize: "25px", color: "white" }}>
          ATHENA V
        </span>
        <BsSearch
          className="top-right"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
            color: "#56BACA",
            display: "block",
            backgroundColor: "rgba(68,68,68,0.5)",
          }}
        />

        <div
          className="bottom-right"
          style={{ fontWeight: "bolder", marginBottom: "10px" }}
        >
          <p style={{ margin: "0", fontWeight: "bolder", padding: "0" }}>
            NEW CERES, DAGON
          </p>
          <p style={{ margin: "0", fontWeight: "bolder", padding: "0" }}>
            20:15 PM
          </p>
        </div>
      </div>

      {/* weather div */}
      <div
        style={{
          height: "30%",
          display: "grid",
          gridTemplateColumns: "repeat(8,1fr)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <span
            style={{ fontWeight: "bolder", fontSize: "35px", color: "#56BACA" }}
          >
            73&deg;
          </span>
          <span
            style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
          >
            MONDAY27th
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            color: "#56BACA",
          }}
        >
          <MdOutlineLightMode
            style={{ fontSize: "35px", paddingBottom: "10px" }}
          />
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>4mph/42</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            color: "#56BACA",
            borderLeft: "1px solid #444444",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
              paddingBottom: "10px",
            }}
          >
            TUE
          </span>
          <BsCloudSun style={{ fontSize: "25px", paddingBottom: "10px" }} />
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>72&deg;</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            color: "#56BACA",
            borderLeft: "1px solid #444444",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
              paddingBottom: "10px",
            }}
          >
            WED
          </span>
          <BsCloudRain style={{ fontSize: "25px", paddingBottom: "10px" }} />
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>60&deg;</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            color: "#56BACA",
            borderLeft: "1px solid #444444",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
              paddingBottom: "10px",
            }}
          >
            THU
          </span>
          <BsCloudLightningRain
            style={{ fontSize: "25px", paddingBottom: "10px" }}
          />
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>63&deg;</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            color: "#56BACA",
            borderLeft: "1px solid #444444",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
              paddingBottom: "10px",
            }}
          >
            FRI
          </span>
          <BsCloudLightning
            style={{ fontSize: "25px", paddingBottom: "10px" }}
          />
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>65&deg;</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            color: "#56BACA",
            borderLeft: "1px solid #444444",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
              paddingBottom: "10px",
            }}
          >
            SAT
          </span>
          <BsCloudRain style={{ fontSize: "25px", paddingBottom: "10px" }} />
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>18&deg;</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            color: "#56BACA",
            borderLeft: "1px solid #444444",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
              paddingBottom: "10px",
            }}
          >
            SUN
          </span>
          <BsCloudSun style={{ fontSize: "25px", paddingBottom: "10px" }} />
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>69&deg;</span>
        </div>
      </div>
    </div>
  );
};

export default Chart52;
