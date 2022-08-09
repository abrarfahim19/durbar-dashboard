import React from "react";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import SectionSix from "../SectionSix/SectionSix";
import SectionSeven from "../SectionSeven/SectionSeven";
import "./Dashboard.css";
import { BsCalendar2MonthFill, BsGraphUp } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";

import { AnimatePresence, motion } from "framer-motion";

const Dashboard = () => {
  return (
    <AnimatePresence>
      <div>
        <div
          style={{
            margin: "5px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="dashboard-top"
        >
          <div className="path">
            <h1 style={{ color: "white", margin: "5px", fontWeight: "300" }}>
              DASHBOARD
            </h1>
            <p
              style={{
                color: "#56BACA",
                margin: "5px",
                fontWeight: "300",
                fontSize: "15px",
              }}
            >
              HOME--DASHBOARD
            </p>
          </div>
          <div className="path-icon">
            <BsCalendar2MonthFill className="icon margin-left-25" />
            <CgMenuGridO className="icon margin-left-25" />
            <BsGraphUp className="icon margin-left-25 margin-right-25" />
          </div>
        </div>
        <div className="board-conatiner">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            class="grid-container"
          >
            <SectionOne />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid-container"
          >
            <SectionTwo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid-container"
          >
            <SectionThree />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid-container"
          >
            <SectionFour />
          </motion.div>
          <motion.div className="grid-container">
            <SectionFive />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid-container"
          >
            <SectionSix />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid-container"
          >
            <SectionSeven />
          </motion.div>
        </div>
        <h3
          style={{ fontWeight: "200", margin: "0px 10px" }}
          className="margin-left-25"
        >
          ⓒ Made By Durbar Technology
        </h3>
      </div>
    </AnimatePresence>
  );
};

export default Dashboard;
