import React from "react";
import Chart71 from "../Charts/Chart71";
import Chart72 from "../Charts/Chart72";
import "./SectionSeven.css";

const SectionSeven = () => {
  return (
    <div class="grid-container section-7">
      <div class="grid-item" id="grid-item-7-1">
        <Chart71 />
      </div>
      <div class="grid-item" id="grid-item-7-2">
        <Chart72 />
      </div>
    </div>
  );
};

export default SectionSeven;
