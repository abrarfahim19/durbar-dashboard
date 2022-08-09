import React from "react";
import Chart61 from "../Charts/Chart61";
import Chart62 from "../Charts/Chart62";
import Chart63 from "../Charts/Chart63";
import "./SectionSix.css";

const SectionSix = () => {
  return (
    <div class="grid-container section-6">
      <div class="grid-item" id="grid-item-6-1">
        <Chart61 />
      </div>
      <div class="grid-item" id="grid-item-6-2">
        <Chart62 />
      </div>
      <div class="grid-item" id="grid-item-6-3">
        <Chart63 />
      </div>
    </div>
  );
};

export default SectionSix;
