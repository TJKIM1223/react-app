import React, { Component } from "react";
import ToolbarFunc from "./editLocalView/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Menubar from "./editLocalView/Menubar";
import ForwardIcon from "@material-ui/icons/Forward";
import NowTime from "./editLocalView/nowTIme";
import LeftGrid from "./leftgrid.js";
import RightGrid from "./rightgrid.js";
import "./index.css";

const useStyles = () => ({
  arrow: {
    fontSize: 50,
    justifyContent: "center",
  },
});

class editLocal extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="editLocal">
        <Menubar className="Menubar" />
        <div className="MainCont">
          <ToolbarFunc className="ToolbarFunc" />
          <div className="contbox">
            <LeftGrid />
            <ForwardIcon className={classes.arrow} />
            <RightGrid />
          </div>
          <NowTime className="NowTime" />
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(editLocal);
