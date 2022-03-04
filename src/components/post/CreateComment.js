import * as React from "react";
import BadgeAvatars from "../Avatar";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UUidv4 from "../Util";
import { makeStyles } from "@mui/styles";
import { Button } from "react-rainbow-components";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ButtonPost from "./ButtonPost";
import AddIcon from "@mui/icons-material/Add";

import { Picker } from "@material-ui/pickers";
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },

  row: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent:"flex-end",
    paddingLeft: "5px",
    poddingLeft: "10px",
    
  },
  row1: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    poddingLeft: "10px",
    gap: "5px",
    // justifyContent: "space-between",
  },

  iconContact: {
    opacity: "0.5",
    scale: "0.7",
  },

  inputComment: {
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "5px",
    borderRadius: "50px",
    width: "100%",
    height: "20px",
    outlineWidth: "0",
    marginRight:"50px"
  },
  // commenrWrite: {
  //   display: "flex",
  //   width: "95%",
  //   flexDirection: "row",
  //   // alignItems: "baseline",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   backgroundColor: " #eff2f5",
  //   borderRadius: "20px",
  //   marginLeft: "5px",
  //   "&focus": { border: "none" },
  // },
});

export default function CreateComment(props) {
  const post = useStyles();
  const fullName = useSelector(
    (state) => state.userData.currLogged[0].firstName
  );
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  return (
    <>
      <div className={post.container}>
        <div className={post.row1}>
          <div>
            <BadgeAvatars image={avatar} />
          </div>
          <div className={`${post.commenrWrite}`}>
            <input
              onChange={(ev) => props.onChange(ev)}
              className={post.inputComment}
              type="text"
              placeholder="White a comment"
              value={props.comment}
            ></input>{" "}
          </div>
        </div>

        <div className={post.row}>
          {" "}
          <IconButton
            onClick={(ev) => props.onClick(ev)}
            onViewCommenn={props.viewComment}
            onViewNumberComment={props.numberComment}
            size="small"
          >
            <AddIcon size="small" color="disabled" />
          </IconButton>
          <IconButton size="small">
            <SentimentSatisfiedOutlinedIcon
              onClick={props.handleViewEmoji}
              // onClick={handleViewEmoji}
              className={post.iconContact}
            />
          </IconButton>
          <IconButton size="small">
            <PhotoCameraOutlinedIcon className={post.iconContact} />
          </IconButton>
          <IconButton size="small">
            <StickyNote2OutlinedIcon className={post.iconContact} />
          </IconButton>
        </div>
      </div>
    </>
  );
}
