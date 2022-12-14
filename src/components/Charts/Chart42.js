import React from "react";
import { BiDownArrow } from "react-icons/bi";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  AreaChart,
  Area,
  ReferenceDot,
  ResponsiveContainer,
} from "recharts";
import "./Charts.css";

const Chart42 = () => {
  const data = [
    {
      name: "A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
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
      <div
        style={{
          height: "200px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
        className=""
      >
        <div
          style={{
            flex: "1",
            border: "1px solid gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          className=""
        >
          <h2>7,656</h2>
          <p>Explored</p>
        </div>
        <div
          style={{
            flex: "1",
            border: "1px solid gray",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=""
        >
          <h3
            style={{
              backgroundImage: "linear-gradient(to right, #343346, #2d3c41)",
              padding: "10px 20px",
            }}
          >
            +73%
          </h3>
        </div>
      </div>

      <div
        style={{
          marginLeft: "auto",
          backgroundColor: "#21202e",
          width: "92%",
          height: 250,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C6A196" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#C6A196" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* <CartesianGrid /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            {/* <Legend verticalAlign="middle" align="right" height={36} /> */}
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorAmt)"
            />
            <ReferenceLine
              strokeWidth={2}
              x="C"
              stroke="white"
              label={{ value: "OA", position: "right", fill: "white" }}
            />
            <ReferenceDot x="C" y={2000} r={5} fill="#56BACA" stroke="none" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart42;
