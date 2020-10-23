import React, { Component } from "react";
import axios from "axios";
import ToolbarFunc from "./editLocalView/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Menubar from "./editLocalView/Menubar";
import ForwardIcon from "@material-ui/icons/Forward";
import NowTime from "./editLocalView/nowTIme";
import LeftGrid from "./leftgrid.js";
import RightGrid from "./rightgrid.js";
import { connect } from "react-redux";
import { readdata } from "../../../../action";
import "./index.css";

const baseURL1 = "http://10.1.1.153:5000/";
const useStyles = () => ({
  arrow: {
    fontSize: 50,
    color: "#3f51b5",
    display: "table",
    margin: "auto",
  },
});
class editLocal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copydata: [],
    };
  }
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
      this.props.updatedata(rst.data);
    });
    promise.catch((response) => {
      console.log("Error! ", response);
    });
  }

  onCopyClick = (data) => {
    this.setState({
      copydata: data,
    });
  };
  onDeleteClick = () => {
    this.setState({
      copydata: "",
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="editLocal">
        <Menubar className="Menubar" />
        <div className="MainCont">
          <ToolbarFunc className="ToolbarFunc" />
          <div className="contbox">
            <LeftGrid copying={this.onCopyClick} />
            <ForwardIcon className={classes.arrow} />
            <RightGrid
              copystate={this.state.copydata}
              deletestate={this.onDeleteClick}
            />
          </div>
          <NowTime className="NowTime" />
        </div>
      </div>
    );
  }
}

let mapDispatchtoProps = (dispatch) => ({
  updatedata: (data) => dispatch(readdata(data)),
});

editLocal = connect(null, mapDispatchtoProps)(editLocal);
export default withStyles(useStyles)(editLocal);
