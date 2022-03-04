import React from "react";
import ProfilePageLeftSide from "../components/ProfilePageLeftSide";
import ProfilePageTop from "../components/ProfilePageTop";
import { makeStyles } from "@mui/styles";
import ProfilePageRightSide from "../components/ProfilePageRightSide";


const useStyle = makeStyles({
  container: {
    backgroundColor: "#f0f2f5",
    marginTop: "50px",
  },
  main: {
    display: "flex",
    gap: "40px",
  },
  rightSide: {
    width: "60%",
    marginTop: "15px",
  },
 
  
});

export default function ProfilePage() {
  const style = useStyle();

  return (
    <div className={style.container}>
      <ProfilePageTop />
      <div className={style.main}>
      <ProfilePageLeftSide />
      <ProfilePageRightSide />
      </div>
    </div>
  );
}
