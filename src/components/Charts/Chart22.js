import React from "react";
import ReactApexChart from "react-apexcharts";
import { BiDownArrow } from "react-icons/bi";
import "apexcharts";
class Chart22 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 33],
      options: {
        theme: {
          // monochrome: {
          //   enabled: true,
          //   color: "#255aee",
          //   shadeTo: "light",
          //   shadeIntensity: 0.65,
          // },
          palette: "palette3",
        },
        // markers: {
        //   colors: ["white", "white", "white"],
        // },
        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
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
  }

  appendData() {
    var arr = this.state.series.slice();
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

    this.setState({
      series: arr,
    });
  }

  removeData() {
    if (this.state.series.length === 1) return;

    var arr = this.state.series.slice();
    arr.pop();

    this.setState({
      series: arr,
    });
  }

  randomize() {
    this.setState({
      series: this.state.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      }),
    });
  }

  reset() {
    this.setState({
      series: [44, 55, 13, 33],
    });
  }

  render() {
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
        <div>
          <div class="chart-wrap">
            <div style={{ marginTop: "0px" }} id="chart">
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width={380}
              />
            </div>
          </div>
        </div>

        <div style={{ margin: "auto" }} class="actions">
          <button
            style={{ padding: "5px 10px", backgroundColor: "gray" }}
            onClick={() => this.appendData()}
          >
            + ADD
          </button>
          &nbsp;
          <button
            style={{ padding: "5px 10px", backgroundColor: "gray" }}
            onClick={() => this.removeData()}
          >
            - REMOVE
          </button>
          &nbsp;
          <button
            style={{ padding: "5px 10px", backgroundColor: "gray" }}
            onClick={() => this.randomize()}
          >
            RANDOMIZE
          </button>
          &nbsp;
          <button
            style={{ padding: "5px 10px", backgroundColor: "gray" }}
            onClick={() => this.reset()}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
}

// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Sector,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// const Chart22 = () => {
//   const data = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 },
//   ];
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   return (
//     <div style={{ backgroundColor: "#21202e", width: "100%", height: "100%" }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={800} height={400}>
//           <Pie
//             data={data}
//             cx={120}
//             cy={200}
//             innerRadius={60}
//             outerRadius={80}
//             fill="#8884d8"
//             paddingAngle={5}
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

export default Chart22;
