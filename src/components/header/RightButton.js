import React from "react";
import { makeStyles } from "@mui/styles";
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import {  grey, red } from "@mui/material/colors";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PopUpUserMenu from "../PopUpUserMenu";

const useStyles = makeStyles({
  iconCentrum: {
    scale: "0.9", // small icon header -Mariela
    borderBottom: "4px solid white",
  },
  iconRight: {
    scale: "0.1", // small icon header -Mariela
  },
  centrum: {
    display: "flex",
    gap: "60px",
    "&:hover": {
      bgcolor: red[900]
    },
  },

  left_header_img: {
    height: "40px",
  },
  header: {
    height: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    backgroundColor: "white",
    zIndex: "2",
    top: "0",
    left: "0",

    boxShadow: "0px 5px 8px -9px rgb(0,0,0,0.75)",
    // alignItems: "baseline",
    alignItems: "center",
  },
  left_header: {
    display: "flex",
    justifyContent: "space-evenly",
    marginLeft: "1%",
    marginTop: "6px",
  },
  header_input: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#eff2f5",
    padding: "10px",
    marginLeft: "10px",
    borderRadius: "33px",
    marginBottom: "10px",
    width: "250px",
  },
  header_input_value: {
    border: "none",
    backgroundColor: "#eff2f5",
    outlineWidth: "0",
  },
  profile_image: {
    height: "35px",
    borderRadius: "33px",
  },
  right_header: {
    display: "flex",
    width: "345px",
    alignItems: "center",
  },
  homeIcon: {
    color: "action",
  },
  user: {
    display: "flex",
    flexDirection: "row",
    // gap: "5px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Segoe UI",
    fontSize: "16px",
    fontWeight: "500",
  },
  rightSideIcons: {
    display: "flex",
    width: "300px",
    justifyContent: "center",
    alignItems:"center"
    
  },
})

export default function RightButton(){

    const classes = useStyles();

    return (    
          <div className={classes.rightSideIcons}>
            <Link to="/">
              <IconButton>
                <Avatar sx={{ bgcolor: grey[200] }}>
                  <AppsRoundedIcon color="action" />
                </Avatar>
              </IconButton>
            </Link>
            <Link to="/">  
              <IconButton>
                <Avatar sx={{ bgcolor: grey[200] }}>
                  <MessageRoundedIcon color="action" />
                </Avatar>
              </IconButton>
            </Link>

            <Link to="/">
        
              <IconButton>
                <Avatar sx={{ bgcolor: grey[200] }}>
                  <NotificationsRoundedIcon color="action"  />
                </Avatar>
              </IconButton>
            </Link>

            <Link to="/">
          
              <PopUpUserMenu />
            </Link>
          
          </div>

       
      //   </div>
      // </div>
    );
}

