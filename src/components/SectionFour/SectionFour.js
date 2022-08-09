import React from "react";
import Chart41 from "../Charts/Chart41";
import Chart42 from "../Charts/Chart42";
import Chart43 from "../Charts/Chart43";
import "./SectionFour.css";

const SectionFour = () => {
  return (
    <div class="grid-container section-4">
      <div class="grid-item" id="grid-item-4-1">
        <Chart41 />
      </div>
      <div class="grid-item" id="grid-item-4-2">
        <Chart42 />
      </div>
      <div class="grid-item" id="grid-item-4-3">
        <Chart43 />
      </div>
    </div>
  );
};

export default SectionFour;
