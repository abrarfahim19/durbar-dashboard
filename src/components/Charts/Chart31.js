import React from "react";
import ReactApexChart from "react-apexcharts";
import { BiDownArrow } from "react-icons/bi";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  PolarGrid,
} from "recharts";

const Chart31 = () => {
  const data = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        labels: {
          colors: "#ffffff",
          useSeriesColors: true,
        },
        position: "bottom",
        offsetY: 5,
        height: 15,
      },
    },
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="chart-header">
        <h1>GRAPH</h1>
        <div className="">
          <BiDownArrow className="margin-right-25 icon" />
        </div>
      </div>
      <div style={{ marginBottom: "20px" }} id="chart">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="pie"
          width={380}
        />
      </div>
    </div>
  );
};

export default Chart31;
