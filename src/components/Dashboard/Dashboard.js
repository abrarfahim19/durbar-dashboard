import React from "react";
import Chart21 from "../Charts/Chart21";
import Chart22 from "../Charts/Chart22";
import Chart31 from "../Charts/Chart31";
import Chart33 from "../Charts/Chart33";
import Chart43 from "../Charts/Chart43";
import Chart51 from "../Charts/Chart51";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div class="grid-container">
        <div class="grid-container section-1">
          <div class="grid-item" id="grid-item-1-1">
            1
          </div>
          <div class="grid-item" id="grid-item-1-2">
            2
          </div>
          <div class="grid-item" id="grid-item-1-3">
            3
          </div>
          <div class="grid-item" id="grid-item-1-4">
            4
          </div>
        </div>
        <div class="grid-container section-2">
          <div class="grid-item" id="grid-item-2-1">
            <Chart21 />
          </div>
          <div class="grid-item" id="grid-item-2-2">
            <Chart22 />
          </div>
          <div class="grid-item" id="grid-item-2-3">
            3
          </div>
          <div class="grid-item" id="grid-item-2-4">
            <Chart31 />
          </div>
          <div class="grid-item" id="grid-item-2-5">
            5
          </div>
          <div class="grid-item" id="grid-item-2-6">
            <Chart33 />
          </div>
          <div class="grid-item" id="grid-item-2-7">
            7
          </div>
          <div class="grid-item" id="grid-item-2-8">
            8
          </div>
          <div class="grid-item" id="grid-item-2-9">
            <Chart43 />
          </div>
          <div class="grid-item" id="grid-item-2-10">
            <Chart51 />
          </div>
          <div class="grid-item" id="grid-item-2-11">
            11
          </div>
        </div>
        <div class="grid-container section-3">
          <div class="grid-item" id="grid-item-3-1">
            1
          </div>
          <div class="grid-item" id="grid-item-3-2">
            2
          </div>
          <div class="grid-item" id="grid-item-3-3">
            3
          </div>
        </div>
        <div class="grid-container section-4">
          <div class="grid-item" id="grid-item-4-1">
            1
          </div>
          <div class="grid-item" id="grid-item-4-2">
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
