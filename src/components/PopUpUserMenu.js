import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { grey } from "@mui/material/colors";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import HelpIcon from '@mui/icons-material/Help';
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';


export default function AccountMenu() {
const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
const fullName = useSelector((state) => state.userData.currLogged[0].firstName);
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("bye");
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("loginData");
    

  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles({
    link: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Segoe UI",
      fontSize: "16px",
      fontWeight: "500",
    },
    container: {
      display: "flex",
      width: "100%",

    },
    avatar: {
      width:"100%"
    }
  });

  const style = useStyles();

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="medium"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ bgcolor: grey[200] }}>
              <ArrowDropDownIcon sx={{ color: "black" }} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 2,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link to="/user" className={style.link}>
            <div className={style.container}>
              <Avatar src={avatar} className={style.avatar} />
              <span>{fullName}</span>
            </div>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <AnnouncementIcon />
          </ListItemIcon>
          Изпращане на обратна връзка
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Настройки за поверителност
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
          </ListItemIcon>
          Помощ и поддръжка
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BedtimeIcon fontSize="small" />
          </ListItemIcon>
          Дисплей и достъпност
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleLogout();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Изход
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
