import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import MoveToInboxRoundedIcon from "@material-ui/icons/MoveToInboxRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";

const MenuStyles = {
  Menubar: {
    width: 240,
    maxWidth: "100%",
    border: "1px solid lightgray",
    backgroundColor: "#fff",
    overflow: "auto",
  },
  Menuz1: {
    border: "solid lightgray",
    borderWidth: "1px 0 0 0",
    backgroundColor: "#fff",
  },
  Menuz2: {
    border: "solid lightgray",
    borderWidth: "1px 0 0 0",
    backgroundColor: "#fff",
  },
};
function Menuline(props) {
  return (
    <ListItem
      button
      onClick={(event) => props.onMenuEvent(event, props.menu.id)}
    >
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
        name: "Menu1",
        icon: <MoveToInboxRoundedIcon />,
      },
      {
        id: 2,
        name: "Menu2",
        icon: <MailRoundedIcon />,
      },
      {
        id: 3,
        name: "Menu3",
        icon: <MoveToInboxRoundedIcon />,
      },
      {
        id: 4,
        name: "Menu4",
        icon: <MailRoundedIcon />,
      },
    ];
    this.MenuObject2 = [
      {
        id: 5,
        name: "Menu5",
        icon: <MoveToInboxRoundedIcon />,
      },
      {
        id: 6,
        name: "Menu6",
        icon: <MailRoundedIcon />,
      },
      {
        id: 7,
        name: "Menu7",
        icon: <MoveToInboxRoundedIcon />,
      },
      {
        id: 8,
        name: "Menu8",
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
              <Menuline
                menu={menu}
                key={menu.id}
                onMenuEvent={this.props.clickEvent}
              />
            ))}
          </div>
        </Grid>
        <Grid className={classes.Menuz2}>
          <div>
            {this.MenuObject2.map((menu) => (
              <Menuline
                menu={menu}
                key={menu.id}
                onMenuEvent={this.props.clickEvent}
              />
            ))}
          </div>
        </Grid>
      </div>
    );
  }
}
export default withStyles(MenuStyles)(Menubar);
