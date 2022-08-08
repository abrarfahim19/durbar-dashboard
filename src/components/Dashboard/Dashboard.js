import React from "react";
import { Transition } from "react-transition-group";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import SectionSix from "../SectionSix/SectionSix";
import SectionSeven from "../SectionSeven/SectionSeven";
import Chart21 from "../Charts/Chart21";
import Chart22 from "../Charts/Chart22";
import Chart31 from "../Charts/Chart31";
import Chart33 from "../Charts/Chart33";
import Chart43 from "../Charts/Chart43";
import Chart51 from "../Charts/Chart51";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="board-conatiner">
      <h1>DASHBOARD</h1>
      <p>HOME-DASHBOARD</p>
      <div class="grid-container">
        <SectionOne />
      </div>
      <div className="grid-container">
        <SectionTwo />
      </div>
      <div className="grid-container">
        <SectionThree />
      </div>
      <div className="grid-container">
        <SectionFour />
      </div>
      <div className="grid-container">
        <SectionFive />
      </div>
      <div className="grid-container">
        <SectionSix />
      </div>
      <div className="grid-container">
        <SectionSeven />
      </div>
      {/* <div class="grid-container section-2">
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
      </div> */}
    </div>
  );
};

export default Dashboard;
