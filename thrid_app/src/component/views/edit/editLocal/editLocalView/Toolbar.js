import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  ToolbarFunc: {
    backgroundColor: "#1976D2",
    color: "white",
  },
}));
function ToolbarFunc() {
  const classes = useStyles();
  return (
    <Toolbar variant="dense" className={classes.ToolbarFunc}>
      <Typography>toolbar..</Typography>
    </Toolbar>
  );
}
export default ToolbarFunc;
