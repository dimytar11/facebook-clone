import React from "react";
import { makeStyles } from "@mui/styles";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideocamIcon from '@mui/icons-material/Videocam';
import MovieIcon from '@mui/icons-material/Movie';
import { Avatar, Link, ListItemButton } from "@mui/material";
import VideoPost from "../components/VideoPost";
import { grey } from "@mui/material/colors";
import { blue } from "@material-ui/core/colors";

const useStyle = makeStyles({
    page: {
        marginTop:"50px",
        width: "100%",
        height: "100px",
        display: "flex",
        
     
      },
      leftSideBar: {
        width: "25%",
        height: "100vh",
        background: "white",
        marginLeft: "-30px",
        paddingLeft:"20px"
      },
    
      conatinerVideo: {
        width: "75%",
        height: "150vh",
        background: "#F2F3F5",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        padding:"20px",
        
    
      },
      text: {
        fontSize: "medium",
        fontFamily: "Segoe UI Historic, Helvetica, Arial",
        paddingLeft:"10px",
        textDecoration: "none",
        color:"black",
        
      },

});


export default function Video() {
    const style = useStyle();
    return (
        <>
       <div className={style.page}>
        <div className={style.leftSideBar}>

        <Link  to="/">
          <ListItemButton >
            <Avatar sx={{ bgcolor: blue[600] }}>
              <OndemandVideoIcon />
            </Avatar>
           <p className={style.text}> Начало</p>
          </ListItemButton>
          </Link>
          
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <VideocamIcon color="action" />
            </Avatar>
            <p className={style.text}> На живо</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <MovieIcon color="action" />
             
            </Avatar>
            <p className={style.text}>Шоута</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <MovieIcon color="action" />
            </Avatar>
            <p className={style.text}>Група 1</p>
          </ListItemButton>
         
        </div>
            <div className={style.conatinerVideo}>
            <VideoPost/>
            </div>
        </div>
        </>
    )
}
