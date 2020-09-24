import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import DvrTwoToneIcon from "@material-ui/icons/DvrTwoTone";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import Avatar from "@material-ui/core/Avatar";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  toolBar: {
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    color: "black",
    textShadow: "1px 1px 0 black",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuItems: {
    display: "flex",
    flexGrow: 2,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    fontSize: "10px",
    fontWeight: "medium",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function AppBarComponent(props) {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Toolbar className={classes.toolBar}>
          <div style={{ display: "flex", flexGrow: 1 }}>
            <div className={classes.icon}>
              <center>Z</center>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <div className={classes.menuItems}>
            <NavLink to="/tech-posts/feed">
              <div className={classes.items}>
                <DvrTwoToneIcon fontSize="medium" color="black" />
                Feed
              </div>
            </NavLink>
            <NavLink to="/tech-posts/jobs">
              <div className={classes.items}>
                <DynamicFeedIcon fontSize="medium" />
                Jobs
              </div>
            </NavLink>
            <NavLink to="/tech-posts/jobs">
              <div className={classes.items}>
                <WorkOutlineOutlinedIcon fontSize="medium" />
                Bazar
              </div>
            </NavLink>
            <NavLink to="/tech-posts/jobs">
              <div className={classes.items}>
                <NotificationsNoneIcon fontSize="medium" />
                Notifications
              </div>
            </NavLink>
            <div className={classes.items}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.small}
              />
              My Profile
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
