import * as React from "react";
// import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import ListItemIcon from "@mui/material/ListItemIcon";
// import myProfil from "../components-css/imgLeftBar/guest.png";
import { makeStyles } from "@mui/styles";
// import { borderRadius, display, height } from "@mui/system";
// import VideocamIcon from "@mui/icons-material/Videocam";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { blue, green, grey, red, yellow } from "@mui/material/colors";
// import BadgeAvatars from "./Avatar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import colorImg from "./color.png"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
// import Picker from "emoji-picker-react";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import { useDispatch, useSelector } from "react-redux";
import UUidv4 from "../Util";
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

const cssStyle = makeStyles({
  topComment: {
    display: "flex",
    height: "50%",
    borderBottom: "1px solid #eff2f5",
    paddingBottom: "15px",
    padding: "15px",
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "33px",
    objectFit: "cover",
  },
  conteiner: {
    width: "75%",
    height: "150px",
    display: "flex",
    marginTop: "20px",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0px 5px 7px -7px rgba(0,0,0,0.75)",
  },
  bottomComment: {
    display: "flex",
    padding: " 0px 20px 0px 20px",
    alignItems: "center",
    margin: "5px",
    height: "50%",
    justifyContent: "space-around",
    minWidth: "463px",
  },
  camera: {
    color: "#f3425f",
  },
  photo: {
    color: "#45bd62",
  },
  emoji: {
    color: "#f7b928",
  },
  textInfo: {
    color: "grey",
    fontFamily: "Arial",
    fontSize: "14px",
    marginLeft: "5px",
  },
  conteiner_option: {
    display: "flex",
    // textAlign:"center", // да сложа *hover
    // padding:" 0px 20px 0px 20px",
    alignItems: "center",
    margin: "5px",
    cursor: "pointer",
    minWidth: "160px",
  },
  divInput: {
    width: "600px",
    height: "40px",
    borderRadius: "20px",
    background: "#F2F3F5",
    cursor: "pointer",
    display: "flex",
    flexDirection: "left",
    alignItems: "center",
    paddingLeft: "20px",
    color: "grey",
  },
  p: {
    fontFamily: "Helvetica, Arial, sans-serif;",
    fontSize: "16px",
    color: "#8A8D91",
    paddingLeft: "10px",
  },
  containerPost: {
    width: "500px",
    backgroundColor: "whate",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: "2px",
    borderBottom: "1px solid #cfd0d1",
    alignItems: "center",
  },
  text: {
    margin: "0px 110px",
    color: "action",
  },
  textSmall: {
    fontSize: "small",
    margin: "2px 0px 0px 5px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textXsmall: {
    fontSize: "x-small",
    margin: "0px",
    color: "action",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textInput: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "0px 0px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0px 10px",
    gap: "5px",
  },
  friend: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "5px",
    gap: "2px",
    backgroundColor: "#CCCCCC",
    justifyContent: "center",
  },
  postAdd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
    margin: "10px 10px",
  },
  input: {
    width: "480px",
    border: "none",
    color: "#8A8D91",
    margin: "10px 10px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    fontSize: "large",
    outlineWidth: "0",
  },
  footer: {
    border: "1px solid #cfd0d1",
    borderRadius: "10px",
    height: "50px",
    padding: "0px 10px",
    margin: "0px 10px",
  },
  buttonPost: {
    width: "480px",
    height: "30px",
    borderRadius: "30px",
    margin: "10px 10px",
  },
  inputTextPost: {
    width: "450px",
    height: "80px",
    outlineWidth: "0",
  },
  type: {
    border: "none",
    display: "none",
  },
  emojiConatinerView: {
    width: "480px",
    display: "flex",
    justifyContent: "center",
  },
});

export default function CreatePost(props) {
  const fullName = useSelector(
    (state) => state.userData.currLogged[0].firstName
  );
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  const logUserEmail = useSelector(
    (state) => state.userData.currLogged[0].logIdUse
  );
  const fileInput = React.useRef(null);
  const style = cssStyle();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [viewEmoji, setViewEmoji] = React.useState(false);
  const [viewPhotoPost, setviewPhotoPost] = React.useState(false);

  const handleviewPhotoPost = () => {
    viewPhotoPost ? setviewPhotoPost(false) : setviewPhotoPost(true);
  };
  const handleViewEmoji = () => {
    viewEmoji ? setViewEmoji(false) : setViewEmoji(true);
  };

  const onEmojiClick = (event, emojiObject) => {
    setInputText((inputText) => inputText + emojiObject.emoji);
    setViewEmoji(false);
    console.log(inputText + emojiObject.emoji);
  };

  const [fileImg, setFileImg] = React.useState("");

  const setHandleFildUploud = (ev) => {
    const { files } = ev.target;
    const localImgUrl = URL.createObjectURL(files[0]);
    setFileImg(localImgUrl);
  };

  const [inputText, setInputText] = React.useState("");

  // const setHandleInputPost = (ev) => {
  //   setpInputText(ev.target.value.trim());
  // };

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.actionPost.addedPosts);

  const handleCreatePost = () => {
    if (inputText.length > 0 || fileImg.length > 0) {
      dispatch({
        type: "CREATEPOST",
        payload: {
          userName: fullName,
          descripion: inputText,
          img: avatar,
          story: fileImg,
          postId: UUidv4(),
        },
      });
      dispatch({
        type: "MYPOSTS",
        payload: {
          userName: fullName,
          descripion: inputText,
          img: avatar,
          story: fileImg,
          postId: UUidv4(),
        },
      });
      setInputText("");
      setFileImg("");
    }
  };

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.topComment}>
          <ListItemIcon>
            <img className={style.img} src={avatar} alt="avatar"></img>
          </ListItemIcon>

          <div onClick={handleClickOpen} className={style.divInput}>
            <p className={style.p}>Какво мислите, {fullName}?</p>
          </div>
        </div>
        <div className={style.bottomComment}>
          <div onClick={handleClickOpen} className={style.conteiner_option}>
            <VideoCameraFrontIcon className={style.camera} fontSize="large" />
            <h3 className={style.textInfo}>Видео на живо</h3>
          </div>

          <div onClick={handleClickOpen} className={style.conteiner_option}>
            <InsertPhotoIcon className={style.photo} fontSize="large" />
            <h3 className={style.textInfo}>Снимка/видеоклип</h3>
          </div>
          <div onClick={handleClickOpen} className={style.conteiner_option}>
            <EmojiEmotionsIcon className={style.emoji} fontSize="large" />
            <h3 className={style.textInfo}>Чувство/Дейност</h3>
          </div>
        </div>
      </div>
      <Dialog open={open}>
        <div className={style.containerPost} onClose={handleClose}>
          <div className={style.header}>
            <h3 className={style.text}>Създаване на публикация</h3>

            <IconButton sx={{ bgcolor: grey[200] }}>
              <AddIcon onClick={handleClose} color="action" />
            </IconButton>
          </div>
          <div className={style.row}>
            <Avatar
              alt="user img"
              src={avatar}
              sx={{ width: 36, height: 36 }}
            />
            <div height="8px">
              <p className={style.textInput}>
                <strong>{fullName} </strong>
              </p>
              <div className={style.friend}>
                <PeopleAltIcon
                  sx={{
                    fontSize: 16,
                    color: grey[900],
                    marginLeft: "2px",
                  }}
                />
                <p className={style.textSmall}>Приятели</p>
                <ArrowDropDownIcon sx={{ width: 24, height: 24 }} />
              </div>
            </div>
          </div>
          <div className={style.inputTextPost}>
            <input
              onChange={(e) => setInputText(e.target.value)}
              className={style.input}
              placeholder={`Какво мислите, ${fullName}?`}
              value={inputText}
            ></input>
          </div>
          <div className={style.emojiConatinerView}>
            {viewPhotoPost ? (
              <img width="200px" src={fileImg} alt="addPhotoStory"></img>
            ) : null}
          </div>
          {viewEmoji && (
            <EmojiPicker
              pickerStyle={{ width: "480px" }}
              onEmojiClick={onEmojiClick}
              disableAutoFocus={true}
              skinTone={SKIN_TONE_MEDIUM_DARK}
              groupNames={{ smileys_people: "PEOPLE" }}
              native
            />
          )}

          <div className={style.postAdd}>
            {/* <img src={colorImg} alt="imgColor"></img> */}
            <SentimentSatisfiedAltIcon
              onClick={handleViewEmoji}
              color="action"
            />
          </div>

          <div className={`${style.postAdd} ${style.footer}`}>
            <p className={style.p}>Добавете към публикацията си</p>

            <div>
              <label>
                <input
                  type="file"
                  name="image"
                  ref={fileInput}
                  style={{ display: "none" }}
                  onChange={setHandleFildUploud}
                  // value={}
                ></input>
              </label>
              <IconButton size="small">
                <PhotoLibraryOutlinedIcon
                  onClick={() => {
                    fileInput.current.click();
                    handleviewPhotoPost();
                  }}
                  sx={{ color: green[700] }}
                />
              </IconButton>
              <IconButton size="small">
                <PersonAddAltRoundedIcon sx={{ color: blue[700] }} />
              </IconButton>
              <IconButton size="small">
                <MoodRoundedIcon
                  onClick={handleViewEmoji}
                  sx={{ color: yellow[700] }}
                />
              </IconButton>
              <IconButton size="small">
                <FmdGoodRoundedIcon sx={{ color: red[700] }} />
              </IconButton>
              <IconButton size="small">
                <MoreHorizIcon color="disabled" />
              </IconButton>
            </div>
          </div>
        </div>

        <DialogActions>
          <Button
            className={style.buttonPost}
            variant="contained"
            // disabled

            onClick={() => {
              // ev.preventDefault()
              handleCreatePost();
              handleClose();
              setViewEmoji();
              setviewPhotoPost();
            }}
          >
            Публикация
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
