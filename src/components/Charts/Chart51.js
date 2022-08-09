import React from "react";
import { BiDownArrow } from "react-icons/bi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

const Chart51 = () => {
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
      <div style={{ backgroundColor: "#21202e", width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Legend fill="#8884d8" />
            {/* <CartesianGrid strokeDasharray="0 0" /> */}
            <XAxis dataKey="name" />
            <Line
              type={"linear"}
              dataKey="pv"
              stroke="rgba(0, 204, 255, 1)"
              strokeWidth={2}
              strokeLinecap="round"
              activeDot={{ r: 8 }}
            />
            <Tooltip />

            <ReferenceLine
              // stroke="rgba(0, 204, 255, 1)"
              strokeWidth={2}
              stroke="#8884d8"
              segment={[
                { x: "D", y: 0 },
                { x: "D", y: 4000 },
              ]}
            />
            <ReferenceDot
              x="D"
              y={4000}
              r={10}
              fill="rgba(0, 204, 255, 0.59)"
              stroke="rgba(0, 204, 255, 1)"
            />
            <ReferenceDot
              x="D"
              y={4000}
              r={5}
              fill="rgba(0, 204, 255, 0.59)"
              stroke="rgba(0, 204, 255, 0.59)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart51;
