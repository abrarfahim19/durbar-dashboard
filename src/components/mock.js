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

.grid-item {
  background-color: lightgray;
}
.grid-container {
  display: grid;
  gap: 40px;
}
.section-1 {
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
}
.section-1 .grid-item {
  height: 166px;
  background-color: cornsilk;
}
.section-2 {
  grid-template-columns: repeat(4, 1fr);
}
.section-2 .grid-item {
  height: 419px;
  background-color: powderblue;
}
.section-2 #grid-item-2-1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
.section-2 #grid-item-2-5 {
  grid-column-start: 2;
  grid-column-end: 4;
}
.section-2 #grid-item-2-9 {
  grid-column-start: 3;
  grid-column-end: 5;
}
.section-2 #grid-item-2-10 {
  grid-column-start: 1;
  grid-column-end: 3;
}
.section-2 #grid-item-2-11 {
  grid-column-start: 3;
  grid-column-end: 5;
}

.section-3 {
  grid-template-columns: repeat(4, 1fr);
}
.section-3 .grid-item {
  height: 535px;
  background-color: thistle;
}
.section-3 #grid-item-3-2 {
  grid-column-start: 2;
  grid-column-end: 4;
}
.section-4 {
  grid-template-columns: repeat(2, 1fr);
}
.section-4 .grid-item {
  height: 422px;
  background-color: blanchedalmond;
}
