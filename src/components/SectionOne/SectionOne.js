import React from "react";
import Chart11 from "../Charts/Chart11";
import Chart12 from "../Charts/Chart12";
import Chart13 from "../Charts/Chart13";
import Chart14 from "../Charts/Chart14";
import "./SectionOne.css";

const SectionOne = () => {
  return (
    <div class="grid-container section-1">
      <div class="grid-item" id="grid-item-1-1">
        <Chart11 />
      </div>
      <div class="grid-item" id="grid-item-1-2">
        <Chart12 />
      </div>
      <div class="grid-item" id="grid-item-1-3">
        <Chart13 />
      </div>
      <div class="grid-item" id="grid-item-1-4">
        <Chart14 />
      </div>
    </div>
  );
};

export default SectionOne;
