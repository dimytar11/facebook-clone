import * as React from "react";
import BadgeAvatars from "../Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import UUidv4 from "../Util";

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5px",
    poddingLeft: "10px",
  },
  textSmall: {
    fontSize: "small",
    margin: "2px 0px 0px 5px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },

  border: {
    borderTop: "1px solid #cfd0d1",
    borderBottom: "1px solid #cfd0d1",
  },

  addedComment: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "0px 3px",
  },

  input: {
    borderRadius: "10px",
    width: "60%",
    height: "20px",
    color: "action",
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "3px 10px",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
    color: "#2c2d2d",
  },
});

export default function CommentList(props) {
  const post = useStyles();
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  return (
    <>
      <div>
        <div key={UUidv4} className={post.row}>
          <div>
            <BadgeAvatars image={avatar} />
          </div>
          <div className={post.input}>
            <p className={post.addedComment}>{props.text}</p>
          </div>
          <IconButton size="small">
            <MoreHorizIcon color="disabled" />
          </IconButton>
        </div>
      </div>
    </>
  );
}
