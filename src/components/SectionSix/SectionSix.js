import React from "react";
import Chart63 from "../Charts/Chart63";
import "./SectionSix.css";

const SectionSix = () => {
  return (
    <div class="grid-container section-6">
      <div class="grid-item" id="grid-item-6-1">
        1
      </div>
      <div class="grid-item" id="grid-item-6-2">
        2
      </div>
      <div class="grid-item" id="grid-item-6-3">
        <Chart63 />
      </div>
    </div>
  );
};

export default SectionSix;
