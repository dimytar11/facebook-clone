import * as React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey} from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { ListItemIcon } from "@mui/material";

import IconButton from "@mui/material/IconButton";

import PeopleIcon from "@mui/icons-material/People";

const useStyles = makeStyles({
  conrainerPost: {
    width: "75%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "5px 5px 5px 5px rgb(169,169,169,0.25)",
    borderRadius: "10px",
    paddingBottom: "20px",
  },
 
  header: {
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    padding: "20px",
  },
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
  textXsmall: {
    fontSize: "x-small",
    margin: "0px 0px 0px 5px",
    color: "action",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textInput: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "5px 5px",
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "33px",
    objectFit:"cover"
  },
});

export default function PostHeader(props) {
  const post = useStyles();

 
  return (
    <>
        <div className={post.header}>
          <div className={post.row}>
            <ListItemIcon>
              <img
                className={post.img}
                src={props.imgUser} //props
                alt="icon my profil"
              ></img>
            </ListItemIcon>
            <div height="8px">
              <p className={post.textInput}>
                <strong>{props.userName} </strong>
                 {/* is width */}
                {/* <strong>{"{friend}"}</strong> at
                <strong>{"{Hotel}"}</strong> */}
              </p>
              <p className={post.textXsmall}>
                15h *
                <PeopleIcon
                  sx={{
                    fontSize: 12,
                    color: grey[600],
                    marginLeft: "2px",
                  }}
                />
              </p>
            </div>
          </div>
          <div>
            <IconButton size="small">
              <MoreHorizIcon color="disabled" />
            </IconButton>
          </div>
        </div>
    </>
  );
}
