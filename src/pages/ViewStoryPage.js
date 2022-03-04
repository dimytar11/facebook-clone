import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  container: {
    width: "100%",
    height: "70vh",
    display: "flex",
    flexDirection: "row",
  },
  leftDiv: {
    width: "100%",
    height: "94vh",
    backgroundColor: "rgb(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
  },

  img: {
    width: "75%",
    height: "94vh",
  },
  
  hover: {
    cursor: "pointer",
  },
});

export default function ViewStoryPage(props) {

  const fullName = useSelector(
    (state) => state.userData.currLogged[0].firstName
  );
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);


  const viewPost = useStyle();
 

 

  return (
    <>
      <div className={viewPost.container}>
        <div className={viewPost.leftDiv}>
        
          <img
            className={viewPost.img}
            src={props.img}
            alt="user post"
          ></img>
        </div>
      
      </div>
    </>
  );
}
