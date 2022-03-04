import * as React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  oneFriend: {
    width: "105px",
    height: "150px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    boxShadow: "0px 2px 2px 2px rgb(0,0,0,0.15)",
    borderRadius: "5px",
    justifyContent: "space-between",
  },
  text: {
    fontSize: "14px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "2px 10px 10px 10px",
    fontWeight: "bold",
      textAlign: "center",
    alignContent: "center"
     
    
  },
  conrainerBtn: {
    width: "90%",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    fontWeight: "bold",
    borderRadius: "5px",
    margin: "0% 5% 5% 5%",
  },
  imgUser: {
    width: "105px",
    height: "105px",
    borderRadius: "10px 10px 0px 0px",
  },
  palette: {
    neutral: {
      main: "#fff",
      contrastText: "#64748B",
    },
  },
  textbtn: {
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    textDecoration: "none",
    color: "black",
    margin: "0px 10px",
  },
});

export default function FriendsCard(img, name) {
  const friends = useStyles();

  const currentUser = useSelector((state) => state.userData.currLogged);
    const allUsers = useSelector((state) => state.userData.registered);
    const dataOfCurrentUser = allUsers.filter(e => e.email === currentUser[0].email)

  return (
      <>
      {dataOfCurrentUser[0].friends.map((u) => {
        return (
          <>
            <div className={friends.oneFriend}>
              <img
                className={friends.imgUser}
                src={u.avatar}
                alt="user img"
              ></img>
              <p className={friends.text}>{u.firstName}</p>
            
            </div>
          </>
        );
      })}
    </>
  );
}
