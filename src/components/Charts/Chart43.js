import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

const Chart43 = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div style={{ backgroundColor: "black", width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop
                offset="5%"
                stopColor="rgba(7, 0, 7, 0.59)"
                stopOpacity={1}
              />
              <stop
                offset="95%"
                stopColor="rgba(7, 254, 7, 1)"
                stopOpacity={1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            horizontal={true}
            vertical={false}
            opacity={0.7}
            strokeWidth={1}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="url(#colorUv)"
          />
          <ReferenceDot
            x="Page D"
            y={2780}
            r={5}
            fill="rgba(0, 204, 255, 1)"
            stroke="rgba(0, 204, 255, 1)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart43;
