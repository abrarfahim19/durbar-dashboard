import React from "react";
import ReactApexChart from "react-apexcharts";
import { BiDownArrow } from "react-icons/bi";

const Chart32 = () => {
  const data = {
    series: [
      {
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
      },
    ],
    options: {
      xAxis: {
        labels: {
          show: "false",
          style: {
            colors: "white",
          },
        },
      },
      chart: {
        type: "line",
        height: 350,
      },
      stroke: {
        curve: "stepline",
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Orion Chart",
        align: "bottom",
        style: {
          color: "#4FACA1",
        },
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      legend: {
        labels: {
          colors: "#ffffff",
          useSeriesColors: true,
        },
        position: "top",
        offsetY: 0,
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
      <div id="chart">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart32;
