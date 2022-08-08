import React from "react";
import Chart31 from "../Charts/Chart31";
import Chart32 from "../Charts/Chart32";
import Chart33 from "../Charts/Chart33";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <div class="grid-container section-3">
      <div class="grid-item" id="grid-item-3-1">
        <Chart31 />
      </div>
      <div class="grid-item" id="grid-item-3-2">
        <Chart32 />
      </div>
      <div class="grid-item" id="grid-item-3-3">
        <Chart33 />
      </div>
    </div>
  );
};

export default SectionThree;
