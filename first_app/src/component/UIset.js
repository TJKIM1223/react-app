import React from "react";
import ToolbarFunc from "./Toolbar";
import NowTime from "./NowTime";
import Menubar from "./Menubar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./UIset.css";
class UIset extends React.Component {
  state = {
    message: "",
  };
  onMenuClickEvent = (info, param) => {
    console.log("onMenuClickEvent###", info, param);
    this.setState((props) => {
      return { message: "Link to Menu " + param };
    });
  };

  render() {
    return (
      <div className="Wrap">
        <CssBaseline />
        <ToolbarFunc className="ToolbarFunc" />
        <div className="content">
          <Menubar testLabel="Hello" clickEvent={this.onMenuClickEvent} />
          <div className="Mainbox">{this.state.message}</div>
        </div>
        <NowTime className="NowTime" />
      </div>
    );
  }
}

export default UIset;
