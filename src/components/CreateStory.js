import React from "react";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from 'react-redux';

const useStyle = makeStyles({
  createStoryBox: {
    width: "112px",
    height: "198px",
    margin: "5px",
    borderRadius: "10px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      overflow: "hidden",
      transform: "scale(1.03)",
      transition: "0.25s ",
    },
  },
  addIcon: {
    backgroundColor: "#1877f2",
    borderRadius: "99px",
    color: "white",
    position: "relative",
    top: "-10px",
    left: "40px",
    border: "5px solid white",
  },
  name: {
    color: "black",
    position: "relative",
    // top: "120px",
    left: "2px",
  },
  imgWrapper: {
      width: "112px",
      height:"100%"
  },
});

export default function CreateStory() {
   
   const avatar = useSelector((state) => state.userData.currLogged[0].avatar);

  const style = useStyle();
  return (
    <>
      <div className={style.createStoryBox}>
        <div
          className={style.imgWrapper}
          style={{
            //   
            backgroundImage: `url(${avatar})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px 10px 0 0",
          }}
        ></div>
        <AddIcon className={style.addIcon} />
        <p className={style.name}>Добави история</p>
      </div>
    </>
  );
}
