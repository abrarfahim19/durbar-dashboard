import React from "react";
import Chart21 from "../Charts/Chart21";
import Chart22 from "../Charts/Chart22";
import Chart23 from "../Charts/Chart23";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <div class="grid-container section-2">
      <div class="grid-item" id="grid-item-2-1">
        <Chart21 />
      </div>
      <div class="grid-item" id="grid-item-2-2">
        <Chart22 />
      </div>
      <div class="grid-item" id="grid-item-2-3">
        <Chart23 />
      </div>
    </div>
  );
};

export default SectionTwo;
