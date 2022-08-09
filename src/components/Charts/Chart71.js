import React from "react";
import { BiDownArrow } from "react-icons/bi";
import "./Charts.css";
import avatar1 from "../../media/avatar1.png";
import graph1 from "../../media/graph1.png";
import graph2 from "../../media/graph2.png";
import graph3 from "../../media/graph3.png";
import graph4 from "../../media/graph4.png";
import up1 from "../../media/up1.png";
import up3 from "../../media/up3.png";
import down from "../../media/down.png";
import down2 from "../../media/down2.png";

const Chart71 = () => {
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
        <h1>TABLE</h1>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ border: "1px solid gray", padding: "5px 20px" }}>DAY</p>
          <p style={{ border: "1px solid gray", padding: "5px 20px" }}>MONTH</p>
          <p style={{ border: "1px solid gray", padding: "5px 20px" }}>YEAR</p>
        </div>
        <div className="">
          <BiDownArrow className="margin-right-25 icon" />
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>USERS</th>
              <th>NUMBERS</th>
              <th>STATS</th>
              <th>STATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div className="table-avatar">
                    <img src={avatar1} alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <h4 style={{ margin: "0px 5px" }}>Abrar Fahim</h4>
                    <p style={{ margin: "0px 5px" }}>General</p>
                  </div>
                </div>
              </td>
              <td>12,535</td>
              <td>
                <img src={graph1} alt="" />
              </td>
              <td>
                <img className="margin-left-25" src={up1} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div className="table-avatar">
                    <img src={avatar1} alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <h4 style={{ margin: "0px 5px" }}>Abrar Fahim</h4>
                    <p style={{ margin: "0px 5px" }}>General</p>
                  </div>
                </div>
              </td>
              <td>12,535</td>
              <td>
                <img src={graph2} alt="" />
              </td>
              <td>
                <img className="margin-left-25" src={up3} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div className="table-avatar">
                    <img src={avatar1} alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <h4 style={{ margin: "0px 5px" }}>Abrar Fahim</h4>
                    <p style={{ margin: "0px 5px" }}>General</p>
                  </div>
                </div>
              </td>
              <td>12,535</td>
              <td>
                <img src={graph3} alt="" />
              </td>
              <td>
                <img className="margin-left-25" src={down2} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div className="table-avatar">
                    <img src={avatar1} alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <h4 style={{ margin: "0px 5px" }}>Abrar Fahim</h4>
                    <p style={{ margin: "0px 5px" }}>General</p>
                  </div>
                </div>
              </td>
              <td>12,535</td>
              <td>
                <img src={graph4} alt="" />
              </td>
              <td>
                <img className="margin-left-25" src={up1} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Chart71;
