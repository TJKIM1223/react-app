import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoveToInboxRoundedIcon from "@material-ui/icons/MoveToInboxRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";

const handleListItemClick = (event, index) => {
  console.log(index);
  console.log("The link was clicked.");
};
const MenuObject1 = [
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
const MenuObject2 = [
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
const useStyles = makeStyles((theme) => ({
  Menuz1: {
    border: "solid lightgray",
    borderWidth: "1px 0 0 0",
  },
  Menuz2: {
    border: "solid lightgray",
    borderWidth: "1px 0 0 0",
  },
}));
function Menuline({ menu }) {
  return (
    <ListItem button onClick={(event) => handleListItemClick(event, menu.id)}>
      <ListItemIcon>{menu.icon}</ListItemIcon>
      <ListItemText primary={menu.name} />
    </ListItem>
  );
}
function Menubar() {
  const classes = useStyles();
  return (
    <div>
      <List component="nav" aria-label="Menuz1" className={classes.Menuz1}>
        <div>
          {MenuObject1.map((menu) => (
            <Menuline menu={menu} key={menu.id} />
          ))}
        </div>
      </List>
      <List component="nav" aria-label="Menuz2" className={classes.Menuz2}>
        <div>
          {MenuObject2.map((menu) => (
            <Menuline menu={menu} key={menu.id} />
          ))}
        </div>
      </List>
    </div>
  );
}
export default Menubar;
