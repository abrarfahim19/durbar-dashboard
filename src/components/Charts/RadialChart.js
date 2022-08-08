import React from "react";

const RadialChart = (props) => {
  const { id, name, value, color } = props;
  const toRotate = (value * 360) / 100;
  console.log(`.parent${id}`);
  console.log(`.circle${id}`);
  // document.documentElement.style.setProperty("--percentage-toshow", "180deg");
  return (
    <>
      <style>
        {`#parent${id} {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
}

.radial-chart{
  margin-top:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center
}
.radial-chart-name${id} {
  color: ${color}
}
.txt${id} {
  color: ${color};
  font-size: 30px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: auto;
}

#circle${id} {
  width: 10px;
  height: 10px;
  background: ${color};
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: auto;
  animation: circle${id} 2s linear forwards;
}

@keyframes circle${id} {
  0% {
    transform: rotate(0deg) translate(0, -50px) rotate(0deg);
  }
  100% {
    transform: rotate(${toRotate}deg) translate(0, -50px)
      rotate(-${toRotate}deg);
  }
}
`}
      </style>
      <div className="radial-chart">
        <div id={`parent${id}`}>
          <h3 class={`txt${id}`}>{value}%</h3>
          <div id={`circle${id}`}></div>
        </div>
        <h4 className={`radial-chart-name${id}`}>{name}</h4>
      </div>
    </>
  );
};

export default RadialChart;
