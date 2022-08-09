import React from "react";
import "./SectionFive.css";
import Chart51 from "../Charts/Chart51";
import Chart52 from "../Charts/Chart52";

const SectionFive = () => {
  return (
    <div class="grid-container section-5">
      <div class="grid-item" id="grid-item-5-1">
        <Chart51 />
      </div>
      <div class="grid-item" id="grid-item-5-2">
        <Chart52 />
      </div>
    </div>
  );
};

export default SectionFive;
