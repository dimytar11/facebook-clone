import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Button } from "@mui/material";

const useStyle = makeStyles({
  topWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  coverImage: {
    position: "absolute",
    height: "400px",
    width: "80%",
    objectFit: "cover",
    borderRadius: "0 0 10px 10px",
  },

  editCoverImgBtn: {
    width: "300px",
    height: "40px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "5px",
    borderRadius: "10px",
    border: "none",
    position: "relative",
    top: "348px",
    left: "53%",
    fontFamily: "Segoe UI",
    cursor: "pointer",
  },

  userAvatar: {
    position: "relative",
    width: "160px",
    height: "160px",
    borderRadius: "99px",
    top: "350px",
    left: "-25%",
    border: "3px solid #a0a1a3",
    outline: "3px solid white",
    objectFit: "cover",
  },

  userName: {
    position: "relative",
    height: "30px",
    top: "380px",
    left: "-25%",
    fontFamily: "Segoe UI",
    fontSize: "28px",
  },

  addStoryBtn: {
    height: "40px",
    width: "220px",
    position: "relative",
    top: "420px",
    left: "15%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1876f2",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  editProfileBtn: {
    height: "40px",
    width: "220px",
    position: "relative",
    top: "420px",
    left: "15%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#d2d3d5",
    border: "none",
    cursor: "pointer",
  },

  main: {
    height: "550px",
    display: "flex",
    justifyContent: "center",
  },

  hrWrapper: {
    width: "80%",
    marginLeft: "10%",
  },

  nav: {
    width: "100%",
    display: "flex",
    gap: "30px",
    marginLeft: "11%",
  },

  link: {
    textDecoration: "none",
    color: "#a0a1a3",
    fontFamily: "Segoe UI",
    fontSize: "16px",
    fontWeight: "600",

  },
  cameraAvatarBtn: {
    position: "relative",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "99px",
    top: "85%",
    left: "-29%",
    border: "none",
    backgroundColor: "#c0c1c3",
    cursor: "pointer",
  },
});

export default function ProfilePageTop() {
  const dispatch = useDispatch();
  
  
  let avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  const coverPhoto = useSelector((state) => state.profile.coverPhoto);
  const [openAvatar, setOpenAvatar] = React.useState(false);
  const [openCover, setOpenCover] = React.useState(false);

  const [coverImageURL, setCoverImageURL] = React.useState("");
  const [avatarImageURL, setAvatarImageURL] = React.useState("");

    const handleChangeCover = (ev) => {
    setCoverImageURL(ev.target.value.trim());
  };
  const changeCoverPhoto = () => {
    
    dispatch({
      type: "CHANGECOVER",
      payload: `${coverImageURL}`,
    });
  };

  const handleClickOpenCover = () => {
    setOpenCover(true);
  };
  const handleCloseCover = () => {
    setOpenCover(false);
  };

  // avatar image functions
  const handleChangeAvatar = (ev) => {
    setAvatarImageURL(ev.target.value.trim());

   
  };
  const changeAvatarPhoto = () => {
    dispatch({
      type: "CHANGEAVATAR",
      payload: `${avatarImageURL}`,
    });
  };

  const handleClickOpenAvatar = () => {
    setOpenAvatar(true);
  };
  const handleCloseAvatar = () => {
    setOpenAvatar(false);
  };

const style = useStyle();
 const fullName = useSelector(
   (state) => state.userData.currLogged[0].firstName
 );

  return (
    <>
      <div className={style.main}>
        <div className={style.topWrapper}>
          <img className={style.coverImage} src={coverPhoto} alt="coverImage" />
          <button
            key={4}
            className={style.editCoverImgBtn}
            onClick={() => {
              console.log("clicked");
              handleClickOpenCover();
            }}
          >
            <CameraAltIcon className={style.cameraLogo} />
            Редактиране на снимката на корицата
          </button>
          <Dialog key={5} open={openCover} onClose={handleCloseCover}>
            <DialogContent>
              <TextField
                key={1}
                onChange={handleChangeCover}
                sx={{ width: "400px" }}
                margin="dense"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button sx={{ color: "black" }} onClick={handleCloseCover}>
                Отказ
              </Button>
              <Button
                key={6}
                sx={{ color: "black" }}
                onClick={() => {
                  changeCoverPhoto();
                  handleCloseCover();
                }}
              >
                Запис
              </Button>
            </DialogActions>
          </Dialog>

         <img className={style.userAvatar} src= {avatar} alt="userAvatar" />
          <CameraAltIcon />
          <button
            className={style.cameraAvatarBtn}
            onClick={handleClickOpenAvatar}
          >
            <CameraAltIcon />
          </button>
          <Dialog key={77} open={openAvatar} onClose={handleCloseAvatar}>
            <DialogContent>
              <TextField
                key={123}
                onChange={handleChangeAvatar}
                sx={{ width: "400px" }}
                margin="dense"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button sx={{ color: "black" }} onClick={handleCloseAvatar}>
                Отказ
              </Button>
              <Button
                key={632}
                sx={{ color: "black" }}
                onClick={() => {
                  changeAvatarPhoto();
                  handleCloseAvatar();
                }}
              >
                Запис
              </Button>
            </DialogActions>
          </Dialog>

          <h4 className={style.userName}>{fullName}</h4>
          <div>
            <button className={style.addStoryBtn}>
              <AddCircleIcon />
              Добавяне към историята
            </button>
            <button className={style.editProfileBtn}>
              <EditIcon />
              Редактиране на профила
            </button>
          </div>
        </div>
      </div>

      <div className={style.hrWrapper}>
        <hr />
      </div>

      <nav className={style.nav}>
        <Link className={style.link} to="/">
          Публикации
        </Link>
        <Link className={style.link} to="/">
          Информация
        </Link>
        <Link className={style.link} to="/">
          Приятели
        </Link>
        <Link className={style.link} to="/">
          Снимки
        </Link>
        <Link className={style.link} to="/">
          Видеоклипове
        </Link>
        <Link className={style.link} to="/">
          Регистрации
        </Link>
        <Link className={style.link} to="/">
          Още
        </Link>
      </nav>
    </>
  );
}
