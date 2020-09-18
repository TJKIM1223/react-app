import React from "react";
import ToolbarFunc from "./Toolbar";
import NowTime from "./NowTime";
import Menubar from "./Menubar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./UIset.css";
class UIset extends React.Component {
  state = {
    message: "", //message를 초기화.
  };
  onMenuClickEvent = (info, param) => {
    console.log("onMenuClickEvent###", info, param);
    this.setState({
      message: "Link to Menu " + param, //setState를 사용하여 message의 내용을 변경.
    });
  };

  render() {
    return (
      <div className="Wrap">
        <CssBaseline />
        <ToolbarFunc className="ToolbarFunc" />
        <div className="content">
          <Menubar testLabel="Hello" clickEvent={this.onMenuClickEvent} />
          <div className="Mainbox">
            <div className="Maincont1">{this.state.message}</div>
            <div className="Maincont2">{this.state.message}</div>
            <div></div>
          </div>
        </div>
        <NowTime className="NowTime" />
      </div>
    );
  }
}

export default UIset;
