import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import iconRd from "../components-css/imgLeftBar/rd.png";
// import CardAd from "./CardAd.js";
import BadgeAvatars from "./Avatar.js";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import users from "../server/users";

import { makeStyles } from "@mui/styles";
import { IFrame } from "./IFrame";
import friends from "../components-css/imgLeftBar/friends.png"
import { useSelector } from "react-redux";
import RequestsCard from "./RequestsCard";

const useStyles = makeStyles({
  conrainerRight: {
    width: "20%",
    background: "#F2F3F5",
    height: "1300vh",
    padding: "20px",
    margin: "0px",
  },
  ad: {
    height: "200px",
    background: "#F2F3F5",

    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  imgUser: {
    width: "200px",
    borderRadius: "50%",
  },
  list: {
    borderRadius: "10px",
    display: "flex",
    gap: "10px",
    height: "40px",
  },

  text: {
    color: " #4d4e4e",
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "5px",
    // fontSize: "small",
    fontFamily: "Helvetica",
    fontSize: "16px",
  },
  textMedium: {
    fontSize: "medium",
  },
  border: {
    borderTop: "1px solid #cfd0d1",
    borderBottom: "1px solid #cfd0d1",
  },
  margin: {
    marginLeft: "8px",
  },
  containerCard: {
    display: "flex",
    flexDirection: "row",
  },

  textAd: {
    color: " #4d4e4e",
    marginLeft: "10px",
  },
  imgAd: {
    width: "80",
    height: "80px",
    borderRadius: "10px",
  },
  iconContact: {
    opacity: "0.5",
    scale: "0.7",
  },
  headerContact: {
    display: "flex",
    justifyContent: "space-between",
  },
  conteinerRequest:{
    display:"flex",
    flexDirection: "column",
    gap: "10px",  
  },
  styleOfText:{
    fontFamily: "Segoe UI",
    fontSize: "16px",
    fontWeight: "500",
  },
  img:{
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
    margin:"10px"
  },
  textFromRequest:{
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
  }
});

export default function RightSideBar(props) {

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  const classes = useStyles();

  const listOfRequests = useSelector((state) => state.userData.currLogged);
  const allUsersReg = useSelector((state) => state.userData.registered);
  const dataOfCurrentUser = allUsersReg.filter(e => e.email === listOfRequests[0].email)
  const isEmpty = dataOfCurrentUser[0].requests.length > 0
  
  

  return (
    <div className={classes.conrainerRight}>
      {isEmpty ? (
        <div className={classes.conteinerRequest}>
          <div className={classes.textFromRequest}>
            <img className={classes.img} src={friends} alt="icon friends"></img>
            <p className={classes.styleOfText}>Предложение за приятелство</p>
          </div>
          <RequestsCard />
        </div>
      ) : (
        <div>
          <h3 className={classes.text}>Спонсорирано</h3>
          <IFrame src="https://www.youtube.com/embed/qyWfWtsR1m8"></IFrame>
        </div>
      )}
      <div>
        <List>
          <div className={classes.headerContact}>
            <h3 className={classes.text}>Contacts</h3>
            <div>
              <IconButton size="small">
                <VideoCallIcon className={classes.iconContact} />
              </IconButton>
              <IconButton size="small">
                <SearchIcon className={classes.iconContact} />
              </IconButton>
              <IconButton size="small">
                <MoreHorizIcon className={classes.iconContact} />
              </IconButton>
            </div>
          </div>

          {users.map((u) => (
            <ListItemButton className={classes.list} key={uuidv4()}>
              <BadgeAvatars image={u.image} key={uuidv4()} />
              <p className={classes.textSmall} key={uuidv4()}>
                {u.name}
              </p>
            </ListItemButton>
          ))}
        </List>
      </div>

      {/* <ListItemButton className={classes.list}>
            <BadgeAvatars />
            <p className={classes.textSmall}>Калоян Игнатов</p>
          </ListItemButton>

          <ListItemButton className={classes.list}>
            <BadgeAvatars />
            <p className={classes.textSmall}>Кирил Страхилов</p>
          </ListItemButton>

          <ListItemButton className={classes.list}>
            <BadgeAvatars src="https://d33wubrfki0l68.cloudfront.net/1fa5d5db38d24786b36e58bf0562f1d821b12ef6/e61d8/static/inviteyourownheader1-878b5db230ca8e78e1451814ba07a834.jpg" />
            <p className={classes.textSmall}>Мадлена Христова</p>
          </ListItemButton>

          <div className={classes.border}>
            <h3 className={classes.text}>Групови разговори</h3>

            <ListItemButton className={classes.list}>
              <BadgeAvatars />
              <p className={classes.textSmall}>Дом и градина</p>
            </ListItemButton>

            <ListItemButton className={classes.list}>
              <BadgeAvatars img="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x" />
              <p className={classes.textSmall}>Всичко за котките</p>
            </ListItemButton> */}

      {/* scroll */}
      {/* <Paper>
          <EmployeeList employees={rows} showAdmin={false} />
        </Paper>
 */}
      {/* scroll */}
    </div>
    // </div>
  );
}
