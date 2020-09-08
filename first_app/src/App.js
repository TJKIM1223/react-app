import React, { Component, useState, useReducer } from "react";
import moment from "moment";
import "moment/locale/ko";
import useInterval from "./useInterval";
import "./App.css";
import { FaEnvelope } from "react-icons/fa";
import { ImDownload2 } from "react-icons/im";
const LiveTimeContainer = () => {
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const [seconds, setSeconds] = useState(nowTime);

  // useInterval
  useInterval(() => {
    setSeconds(moment().format("YYYY. M. D A h:mm:ss"));
  }, 1000);

  return <div className="NowTime">{seconds}</div>;
};

function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}
function App() {
  const Menus = [
    {
      id: 1,
      desc: "Menu1",
      icon: <ImDownload2 />,
    },
    {
      id: 2,
      desc: "Menu2",
      icon: <FaEnvelope />,
    },
    {
      id: 3,
      desc: "Menu3",
      icon: <ImDownload2 />,
    },
    {
      id: 4,
      desc: "Menu4",
      icon: <FaEnvelope />,
    },
    {
      id: 5,
      desc: "Menu5",
      icon: <ImDownload2 />,
    },
    {
      id: 6,
      desc: "Menu6",
      icon: <FaEnvelope />,
    },
    {
      id: 7,
      desc: "Menu7",
      icon: <ImDownload2 />,
    },
    {
      id: 8,
      desc: "Menu8",
      icon: <FaEnvelope />,
    },
  ];
  return (
    <>
      <div className="toolbar">toolbar..</div>
      <div className="menubar">
        <div className="menuz1">
          <div className="menu menu1" onClick={handleClick}>
            <ImDownload2 className="icon" />
            Menu1
          </div>
          <div className="menu menu2" onClick={handleClick}>
            <FaEnvelope className="icon" />
            Menu2
          </div>
          <div className="menu menu3" onClick={handleClick}>
            <ImDownload2 className="icon" />
            Menu3
          </div>
          <div className="menu menu4" onClick={handleClick}>
            <FaEnvelope className="icon" />
            Menu4
          </div>
        </div>
        <div className="menuz2">
          <div className="menu menu5" onClick={handleClick}>
            <ImDownload2 className="icon" />
            Menu5
          </div>
          <div className="menu menu6" onClick={handleClick}>
            <FaEnvelope className="icon" />
            Menu6
          </div>
          <div className="menu menu7" onClick={handleClick}>
            <ImDownload2 className="icon" />
            Menu7
          </div>
          <div className="menu menu8" onClick={handleClick}>
            <FaEnvelope className="icon" />
            Menu8
          </div>
        </div>
      </div>
      <LiveTimeContainer />
    </>
  );
}

export default App;
