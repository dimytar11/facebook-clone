import React from "react";


import { makeStyles } from "@mui/styles";
import NewsFeed from "./NewsFeed.js";
import LeftSideBar from "./LeftSideBar.js";
import RightSideBar from "./RightSideBar.js";


const useStyles = makeStyles({
  container: {
    width: "100%",
    background: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <LeftSideBar />
      <NewsFeed/>
      <RightSideBar />
    </div>
  );
}
