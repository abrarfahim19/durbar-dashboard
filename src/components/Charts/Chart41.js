import React from "react";
import { BiDownArrow } from "react-icons/bi";
import LiquidChart from "react-liquidchart";

const Chart41 = () => {
  const data = { value: 35.5 };
  return (
    <>
      <div className="chart-header">
        <h1>Water</h1>
        <div className="">
          <BiDownArrow className="margin-right-25 icon" />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "300px",
        }}
      >
        <LiquidChart
          responsive
          legend="Water Available"
          value={data.value}
          showDecimal
          amplitude={4}
          frequency={2}
          animationTime={2000}
          outerStyle={{ fill: "rgb(23,139,202)" }}
          dryStyle={{ fill: "rgb(219, 219, 230)" }}
          animationWavesTime={2250}
          gradient={{
            type: 1,
            x1: 2,
            x2: 0,
            y1: 100,
            y2: 0,
          }}
          postfix="%"
          legendFontSize={0.1}
        />
      </div>
    </>
  );
};

export default Chart41;
