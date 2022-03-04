import * as React from "react";
import { makeStyles } from "@mui/styles";
import ListItemButton from "@mui/material/ListItemButton";
import { Button,Link } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import Avatar from "@mui/material/Avatar";
import { blue, grey } from "@mui/material/colors";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import DomainDisabledRoundedIcon from "@mui/icons-material/DomainDisabledRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import Post from "../components/post/Post";

const useStyles = makeStyles({
  page: {
    marginTop: "50px",
    width: "100%",
    height: "100px",
    display: "flex",
  },
  leftSideBar: {
    width: "25%",
    height: "100vh",
    background: "white",
    marginLeft: "-30px",
    paddingLeft: "20px",
    paddingRight: "10px",
  },

  conatinerGrup: {
    width: "50%",
    height: "150vh",
    background: "#F2F3F5",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
    justifyContent: "center",
  },
  text: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft: "10px",
    textDecoration: "none",
    color: "black",
  },
  textbtn: {
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    color: "dark blue",
    margin: "0px 20px",
    fontWeight: "600",
    textTransform: "none",
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: " #eff2f5",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    borderRadius: "10px",
    width: "340px",
    height: "35px",
    margin: "10px",
    backgroundColor: " #eff2f5",
    paddingLeft: "10px",
  },
  input: {
    width: "200px",
    height: "30px",
    border: "none",
    backgroundColor: " #eff2f5",
  },
  textH1: {
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft: "10px",
    fontWeight: "bold",
  },
  setting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
});

export default function Grups() {
  const groupPage = useStyles();
  return (
    <>
      <div className={groupPage.page}>
        <div className={groupPage.leftSideBar}>
          <div className={groupPage.setting}>
            <h2 className={groupPage.textH1}>Group</h2>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <SettingsIcon  color="action" />
            </Avatar>
          </div>
          <div>
            <form>
              <div className={groupPage.inputDiv}>
                <SearchIcon color="action" />
                <input
                  className={groupPage.input}
                  type="text"
                  placeholder="Search group"
                ></input>
              </div>
            </form>
          </div>

          <Link to="/">
            <ListItemButton>
              <Avatar sx={{ bgcolor: blue[600] }}>
                <FeedRoundedIcon />
              </Avatar>
              <p className={groupPage.text}> Your feed</p>
            </ListItemButton>
          </Link>

          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <DomainDisabledRoundedIcon color="action" />
            </Avatar>
            <p className={groupPage.text}>Discover</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <PeopleIcon color="action" />
            </Avatar>
            <p className={groupPage.text}>Suggestion</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <NotificationsRoundedIcon color="action" />
            </Avatar>
            <p className={groupPage.text}>Your notification</p>
          </ListItemButton>
          <ListItemButton>
            <Button sx={{ width: "100%", bgcolor: blue[100], opacity: ".5" }}>
              <h3 className={groupPage.textbtn}>+ Create New Grup</h3>
            </Button>
          </ListItemButton>
        </div>
        <div className={groupPage.conatinerGrup}>
          <Post />
        </div>
      </div>
    </>
  );
}
