import React, { Component } from "react";
import ToolbarFunc from "./editLocalView/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Menubar from "./editLocalView/Menubar";
import ForwardIcon from "@material-ui/icons/Forward";
import NowTime from "./editLocalView/nowTIme";
import LeftGrid from "./leftgrid.js";
import RightGrid from "./rightgrid.js";
import { connect } from "react-redux";
import axios from "axios";
import "./index.css";
import { readdata, deletedata, copydata } from "../../../../action";
const baseURL1 = "http://10.1.1.152:5000/";
const useStyles = () => ({
  arrow: {
    fontSize: 50,
    color: "#3f51b5",
    display: "table",
    margin: "auto",
  },
});

class editLocal extends Component {
  componentDidMount() {
    let param = {};
    param.url = "/local";
    param.method = "get";
    param.data = {};
    this.httpRequest(param);
  }
  httpRequest(param) {
    let rst = {};
    axios.defaults.baseURL = baseURL1;
    let promise = axios({
      method: param.method,
      url: param.url,
      data: param.data,
    });
    promise.then((response) => {
      console.log("Success! ");
      rst = response.data;
      console.log("data_fromserver", rst.data);
      this.props.updatedata(rst.data);
    });
    promise.catch((response) => {
      console.log("Error! ", response);
    });
  }
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
let mapStateToProps = (state) => {
  console.log("state.left1: ", state.LocaleditLeft);
  return {
    Leftdata: state.LocaleditLeft.data,
  };
};

let mapDispatchtoProps = (dispatch) => ({
  updatedata: (data) => dispatch(readdata(data)),
  deleteSelectData: () => dispatch(deletedata()),
  copySelectedData: () => dispatch(copydata()),
});

editLocal = connect(mapStateToProps, mapDispatchtoProps)(editLocal);

export default withStyles(useStyles)(editLocal);
