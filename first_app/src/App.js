import React, { Component, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import useInterval from "./useInterval";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoveToInboxRoundedIcon from "@material-ui/icons/MoveToInboxRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const LiveTimeContainer = () => {
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const [seconds, setSeconds] = useState(nowTime);

  // useInterval
  useInterval(() => {
    setSeconds(moment().format("YYYY. M. D A h:mm:ss"));
  }, 1000);

  return <div className="NowTime">{seconds}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    height: "100vh",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid whitesmoke",
  },
  toolbar: {
    left: 200,
    backgroundColor: "gray",
  },
  Menuz1: {
    border: "solid whitesmoke",
    borderWidth: "1px 0 1px 0",
  },
  Menuz2: {
    border: "solid whitesmoke",
    borderWidth: "1px 0 1px 0",
  },
}));
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function App(props) {
  const classes = useStyles();
  const handleListItemClick = (event, index) => {
    console.log(index);
    console.log("The link was clicked.");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.toolbar}>
          <Toolbar variant="dense">
            <Typography>toolbar..</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.root}>
        <Toolbar variant="dense" />
        <List component="nav" aria-label="Menuz1" className={classes.Menuz1}>
          <ListItem button onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemIcon>
              <MoveToInboxRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu1" />
          </ListItem>
          <ListItem button onClick={(event) => handleListItemClick(event, 1)}>
            <ListItemIcon>
              <MailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu2" />
          </ListItem>
          <ListItem button onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemIcon>
              <MoveToInboxRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu3" />
          </ListItem>
          <ListItem button onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon>
              <MailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu4" />
          </ListItem>
        </List>
        <List component="nav" aria-label="Menuz2" className={classes.Menuz2}>
          <ListItem button onClick={(event) => handleListItemClick(event, 4)}>
            <ListItemIcon>
              <MoveToInboxRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu5" />
          </ListItem>
          <ListItem button onClick={(event) => handleListItemClick(event, 5)}>
            <ListItemIcon>
              <MailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu6" />
          </ListItem>
          <ListItem button onClick={(event) => handleListItemClick(event, 6)}>
            <ListItemIcon>
              <MoveToInboxRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu7" />
          </ListItem>
          <ListItem button onClick={(event) => handleListItemClick(event, 7)}>
            <ListItemIcon>
              <MailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Menu8" />
          </ListItem>
        </List>
      </div>
      <LiveTimeContainer />
    </React.Fragment>
  );
}

export default App;
