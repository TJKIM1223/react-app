import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import "moment/locale/ko";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  NowTime: {
    textAlign: "right",
    border: "1px solid lightgray",
    height: 30,
    color: "gray",
  },
}));
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    // useEffect에 매개변수로 받은 콜백을 현재 Ref로 선언해준다.
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    // useEffect에 Ref의 current를 setInterval를 delay 시간동안 해준다.
    let id = setInterval(tick, delay);
    // 언마운트되기전 clearInterval을 해준다.
    return () => clearInterval(id);
  }, [delay]);
}
const LiveTimeContainer = () => {
  const classes = useStyles();
  const nowTime = moment().toString("YYYY-MM-DD HH:mm:ss");
  const [seconds, setSeconds] = useState(nowTime);

  // useInterval
  useInterval(() => {
    setSeconds(moment().format("YYYY. M. D A h:mm:ss"));
  }, 1000);

  return <div className={classes.NowTime}>{seconds}</div>;
};
function NowTime() {
  return <LiveTimeContainer />;
}
export default NowTime;
