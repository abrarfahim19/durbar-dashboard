import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  PolarGrid,
} from "recharts";

const Chart31 = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data1 = [{ name: "Group A", value: 400 }];
  const COLORS = [
    "rgba(62, 163, 65, 0.52)",
    "rgba(189, 188, 61, 0.4)",
    "rgba(242, 53, 0, 0.44)",
    "rgba(255, 0, 0, 0)",
  ];

  return (
    <div style={{ backgroundColor: "black", width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
          <Pie
            strokeOpacity={0.5}
            strokeLinejoin="round"
            stroke="white"
            data={data1}
            cx={120}
            cy={200}
            innerRadius={10}
            outerRadius={40}
            fill="red"
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill="rgba(255, 0, 0, 0);" />
          </Pie>
          <Pie
            data={data}
            strokeOpacity={0}
            cx={120}
            cy={200}
            innerRadius={10}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart31;
