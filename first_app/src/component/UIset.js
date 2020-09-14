import React from "react";
import ToolbarFunc from "./Toolbar";
import NowTime from "./NowTime";
import Menubar from "./Menubar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./UIset.css";
function UIset() {
  return (
    <div className="Wrap">
      <CssBaseline />
      <ToolbarFunc className="ToolbarFunc" />
      <div className="content">
        <Menubar className="Menubar" />
        <div className="Mainbox">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <NowTime className="NowTime" />
    </div>
  );
}

export default UIset;
