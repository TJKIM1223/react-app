import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import { Redirect } from "react-router-dom";

const MenuStyles = {
  Menubar: {
    width: 240,
    maxWidth: "100%",
    border: "1px solid lightgray",
    backgroundColor: "#fff",
    overflow: "auto",
  },
  Menuz1: {
    marginTop: "46px",
    border: "solid lightgray",
    borderWidth: "1px 0 0 0",
    backgroundColor: "#fff",
  },
};
function Menuline(props) {
  return (
    <ListItem button onClick={(e) => <Redirect to={props.menu.link} />}>
      <ListItemIcon>{props.menu.icon}</ListItemIcon>
      <ListItemText primary={props.menu.name} />
    </ListItem>
  );
}
class Menubar extends Component {
  constructor(props) {
    super(props);

    this.MenuObject1 = [
      {
        id: 1,
        name: "교차로 조회",
        icon: <DesktopWindowsIcon />,
        link: "/editLocal",
      },
      {
        id: 2,
        name: "Menu2",
        icon: <MailRoundedIcon />,
      },
    ];
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Menubar}>
        <Grid className={classes.Menuz1}>
          <div>
            {this.MenuObject1.map((menu) => (
              <Menuline menu={menu} key={menu.id} />
            ))}
          </div>
        </Grid>
      </div>
    );
  }
}
export default withStyles(MenuStyles)(Menubar);
