import React from "react";
import { makeStyles } from "@mui/styles";
import {  Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UUidv4 from "./Util";
import { grey } from "@mui/material/colors";

export default function StoryBox(props) {
  

  const useStyle = makeStyles({
    storyWrapper: {
      width: "112px",
      height: "198px",
      margin: "5px",
      borderRadius: "10px",
      backgroundImage: "",
      display: "flex",
      flexDirection: "column",
      objectFit: "cover",

      justifyContent: "space-between",
      "&:hover": {
        overflow: "hidden",
        transform: "scale(1.03)",
        transition: "0.25s ",
      },
    },

    userAvatar: {
      width: "35px",
      height: "35px",
      borderRadius: "99px",
      position: "relative",
      top: "10px",
      left: "10px",
      border: "5px solid white",
    },

    authorName: {
      color: "white",
      fontFamily: "Segoe UI",
      fontSize: "12px",
      marginBottom: "5px",
      marginLeft: "5px",
    },
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "row",
    
    },
    leftDiv: {
      width: "100%",
      height: "100vh",
      backgroundColor: "rgb(0,0,0,0.85)",
      display: "flex",
      justifyContent: "center",
    },

    img: {
      width: "65%",
      objectFit: "cover",
    },

    hover: {
      cursor: "pointer",
    },
  });
  const style = useStyle();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        key={UUidv4}
        onClick={handleClickOpen}
        className={style.storyWrapper}
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img className={style.userAvatar} src={props.avatar} alt="userAvatar" />

        <h4 className={style.authorName}>{props.name}</h4>
      </div>

      <Dialog open={open} fullScreen  >
      <div  sx={{ position: 'relative' }}>
          <div className={style.container}>
            <div className={style.leftDiv}>
            <CloseIcon  
            onClick={handleClose} 
            sx={{
                    fontSize: 24,
                    color: grey[200],
                    padding: "5px",
                  }}/>
                 
              <img
                className={style.img}
                src={props.story}
                alt="user post"
              ></img>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
