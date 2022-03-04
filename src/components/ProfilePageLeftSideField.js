import React from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  field: {
    width: "90%",
    height: "33px",
    fontSize: "12px",
    backgroundColor: "#e4e6eb",
    marginBottom: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
});

export default function ProfilePageLeftSideField(props) {
  const style = useStyle();

  return (
    <div className={style.field} onClick={() => console.log("click")}>
      {props.name}
    </div>
  );
}
