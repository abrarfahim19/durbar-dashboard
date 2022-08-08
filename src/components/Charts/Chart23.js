import React from "react";
import { BiDownArrow } from "react-icons/bi";
import RadialChart from "./RadialChart";
import "./Charts.css";

const Chart23 = () => {
  const data = [
    { id: 1, name: "Hydrogen", value: "25", color: "#C6A196" },
    { id: 2, name: "Hydrogen", value: "25", color: "#5C60C7" },
    { id: 3, name: "Hydrogen", value: "75", color: "#59AA7A" },
    { id: 4, name: "Hydrogen", value: "75", color: "#B4A948" },
  ];
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="chart-header">
        <h1>GRAPH</h1>
        <div className="">
          <BiDownArrow className="margin-right-25 icon" />
        </div>
      </div>
      {/* <p>Materials</p>
        <p>42,245 AVG</p> */}

      <div className="four-part">
        {data.map((d) => (
          <div className="four-part-item">
            <RadialChart
              key={d.id}
              id={d.id}
              name={d.name}
              value={d.value}
              color={d.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart23;
