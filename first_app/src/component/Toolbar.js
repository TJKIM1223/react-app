import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Toolbar: {
    position: "fixed",
    top: 0,
    left: 240,
    backgroundColor: "gray",
  },
}));
function ToolbarFunc() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar className={classes.Toolbar}>
        <Toolbar variant="dense">
          <Typography>toolbar..</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default ToolbarFunc;
