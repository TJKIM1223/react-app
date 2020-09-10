import React from "react";
import ToolbarFunc from "./Toolbar";
import NowTime from "./NowTime";
import Menubar from "./Menubar";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  Menubar: {
    position: "fixed",
    left: 0,
    top: 0,
    width: 240,
    height: "100vh",
    maxWidth: "100%",
    border: "1px solid lightgray",
    backgroundColor: theme.palette.background.paper,
  },
  ToolbarFunc: {
    position: "fixed",
  },
  NowTime: {
    position: "fixed",
  },
}));
function UIset() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ToolbarFunc className={classes.ToolbarFunc} />
      <NowTime className={classes.NowTime} />
      <div className={classes.Menubar}>
        <Toolbar />
        <Menubar />
      </div>
    </React.Fragment>
  );
}

export default UIset;
