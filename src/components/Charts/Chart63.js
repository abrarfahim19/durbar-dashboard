import React from "react";
import {
  BsChatRightDots,
  BsPlusLg,
  BsCursor,
  BsFileText,
} from "react-icons/bs";
import "./Charts.css";
import avatar1 from "../../media/avatar1.png";

const Chart63 = () => {
  return (
    <div>
      <div className="widget flex-item">
        <header>
          <p>WIDGET</p>
        </header>
        <div className="widget-body flex-item">
          <div className="message-section flex-item">
            <div className="icon">
              <BsChatRightDots />
            </div>
            <div className="content flex-item">
              <p>
                <span className="name">Jackenn Sturnes</span> added 1 comment on{" "}
                <span class="name">Orion Situation</span>
              </p>
              <p className="text">
                «At vero eos et accusamus et iusto odio dignissimos ducimus.»
              </p>
              <p>1 MIN AGO</p>
            </div>
          </div>
          <div className="recruit-section flex-item">
            <div className="icon">
              <BsPlusLg />
            </div>
            <div className="content flex-item">
              <p>
                <span className="name">Joshua Parker</span> added 3 recruits
              </p>
              <div className="image-boxes">
                <div className="box table-avatar">
                  <img src={avatar1} alt="" />
                </div>
                <div className="box table-avatar">
                  <img src={avatar1} alt="" />
                </div>
                <div className="box table-avatar">
                  <img src={avatar1} alt="" />
                </div>
              </div>
              <p>2 HOURS AGO</p>
            </div>
          </div>
          <div className="rocket-section flex-item">
            <div className="icon">
              <BsCursor />
            </div>
            <div className="content flex-item">
              <p>
                <span className="name">Raymy Walker</span> joined to a{" "}
                <span class="name">Orion</span>
              </p>
              <p>1 DAY AGO</p>
            </div>
          </div>
          <div className="report-section flex-item">
            <div className="icon">
              <BsFileText />
            </div>
            <div className="content flex-item no-border-left">
              <p>
                <span className="name">Peter Gonzal</span> handed report
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart63;
