import React from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { blue, grey, red } from "@mui/material/colors";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PopUpUserMenu from "../PopUpUserMenu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useSelector, useDispatch } from "react-redux";

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
      bgcolor: red[900],
    },
    marginLeft: "80%",
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
    height: "25px",
    width: "25px",
    borderRadius: "33px",
    marginRight: "5px",
    objectFit: "cover",
  },
  right_header: {
    display: "flex",
    width: "345px",
    alignItems: "center",
    marginLeft: "26%",
    marginRight:"3%"
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
    alignItems: "center",
    marginLeft: "15px",
  },
});



export default function Header() {

  const dispatch = useDispatch();
  const clearCurrLoggedUser = () => {
    dispatch({
      type: "LOGOUT",
      // payload: null,
      logged: false,
    });
  };

  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  const fullName = useSelector((state) => state.userData.currLogged[0].firstName);
  
  // console.log(avatar);
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.left_header}>
        <Link to="/">
          <img
            className={classes.left_header_img}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
            alt="logo_of_Facebook"
          />
        </Link>

        <div className={classes.header_input}>
          <SearchIcon />

          <input
            className={classes.header_input_value}
            type="text"
            placeholder="Search Facebook"
          ></input>
        </div>
      </div>

      {/* central part */}
      <div className={useStyles.centralHeader}>
        <div className={classes.centrum}>
          <div className="options">
            <Link to="/">
              {" "}
              {/*  added link and buttum color gre Mariela*/}
              <Button className={useStyles.centralBtns}>
                <HomeOutlinedIcon 
                  color="action"
                  className={classes.iconCentrum}
                  fontSize="large"
                />
              </Button>
            </Link>
          </div>
          {/* <div className="options">
              <Button className={useStyles.centralBtns}>
                <StorefrontOutlinedIcon
                  color="action"
                  className={classes.iconCentrum}
                  fontSize="large"
                />
              </Button>
            </div> */}
          <div className="options">
            <Link to="/friends">
              {" "}
              {/*  added link Mariela */}
              <Button className={useStyles.centralBtns}>
                <PeopleAltOutlinedIcon
                  color="action"
                  className={classes.iconCentrum}
                  fontSize="large"
                />
              </Button>
            </Link>
          </div>
          <div className="options">
            <Link to="/video">
              {" "}
              {/*  added link Mariela */}
              <Button className={useStyles.centralBtns}>
                <SmartDisplayOutlinedIcon
                  color="action"
                  className={classes.iconCentrum}
                  fontSize="large"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side header */}
      <div className={classes.right_header}>
        <ListItemIcon>
          <Link className={classes.link} to="/user">
            <div className={classes.user}>
              <img
                className={classes.profile_image}
                src={avatar}
                alt="avatar"
              />
              <p>{fullName}</p>
            </div>
          </Link>
        </ListItemIcon>

        <div className={classes.rightSideIcons}>
          <Link to="/">
            {/* /*  added new style btn Mariela */}

            <IconButton>
              <Avatar
                sx={{
                  bgcolor: grey[200],
                  color: "black",
                  marginRight: "-10px",
                }}
              >
                <AppsRoundedIcon />
              </Avatar>
            </IconButton>
          </Link>

          <Link to="/">
            {/*  added new style btn Mariela */}
            <IconButton>
              <Avatar
                sx={{
                  bgcolor: grey[200],
                  color: "black",
                  marginRight: "-10px",
                }}
              >
                <MessageRoundedIcon />
              </Avatar>
            </IconButton>
          </Link>

          <Link to="/">
            {/*  added new style btn Mariela */}
            <IconButton>
              <Avatar
                sx={{
                  bgcolor: grey[200],
                  color: "black",
                  marginRight: "-10px",
                }}
              >
                <NotificationsRoundedIcon />
              </Avatar>
            </IconButton>
          </Link>

          <PopUpUserMenu onClick={clearCurrLoggedUser} sx={{ color: "black" }} />
        </div>

        {/* 
          <IconButton>
            <CircleNotificationsOutlinedIcon
              className={classes.iconRight}
              fontSize="large"
            />
          </IconButton>
          <IconButton>
            <ArrowDropDownCircleOutlinedIcon
              className={classes.iconRight}
              fontSize="large"
            />
          </IconButton> */}
      </div>
    </div>
  );
}
