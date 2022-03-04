import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Dialog} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UUidv4 from "../Util.js";
import ViewPostPage from "../../pages/ViewPostPage.js";
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import PostHeader from "./PostHeader.js";
import CommentList from "./CommentList.js";
import CreateComment from "./CreateComment.js";

const useStyles = makeStyles({
  conrainerPost: {
    width: "75%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "5px 5px 5px 5px rgb(169,169,169,0.25)",
    borderRadius: "10px",
    paddingBottom: "20px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5px",
    poddingLeft: "10px",
  },
  textSmall: {
    fontSize: "small",
    margin: "2px 0px 0px 5px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textXsmall: {
    fontSize: "x-small",
    margin: "0px 0px 0px 5px",
    color: "action",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textInput: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "5px 5px",
  },
  border: {
    borderTop: "1px solid #cfd0d1",
    borderBottom: "1px solid #cfd0d1",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-around",
    // padding: "4px",
  },
  addComment: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "10px",
  },
  addedCom: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "0px 3px",
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: " #eff2f5",
  },
  input: {
    borderRadius: "10px",
    width: "60%",
    height: "20px",
    color: "action",
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "3px 10px",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    
  },
  iconContact: {
    opacity: "0.5",
    scale: "0.7",
  },
  like: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2px 0px",
  },
  likeConrainer: {
    height: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0px 5px",
    justifyContent: "space-between",
  },
  textBox: {
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    padding: "20px",
  },

  inputComment: {
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "5px",
    borderRadius: "20px",
    width: "60%",
    height: "20px",
    outlineWidth: "0",
  },
  
  link: {
    textDecoration: "none",
    color: "#2c2d2d",
  },
  imgPost: {
    width: "100%",
    borderTop: "1px solid #cfd0d1",
    borderBottom: "1px solid #cfd0d1",
    cursor: "pointer",
    objectFit:"contain",
  },

  hover: {
    cursor: "pointer",
  },

  colorText: {
    color: "#2e81f4",
  },
});

export default function Post(props) {
  const post = useStyles();
  const fullName = useSelector(
    (state) => state.userData.currLogged[0].firstName
  );
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  const [like, isLike] = useState(false);
  const [liked, viewLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, viewCommentList] = useState(false);
  const [numberComment, setNumbetComment] = useState(false);
  const [viewEmoji, setViewEmoji] = React.useState(false);

  const changeLikeOption = () => {
    if (like === false) {
      isLike(true);
      isLike(like + 1);
    } else {
      isLike(like - 1);
      isLike(false);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleViewLiked = () => {
    liked ? viewLiked(false) : viewLiked(true);
  };
  const handleViewCommentList = () => {
    commentList ? viewCommentList(false) : viewCommentList(true);
  };

  const setHandleComment = (ev) => {
    setComment(ev.target.value);
  };
  const handleViewEmoji=()=>{
    viewEmoji?setViewEmoji(false):setViewEmoji(true)
  }

  const onEmojiClick = (event, emojiObject) => {
    setComment(comment=>comment + emojiObject.emoji);
    setViewEmoji(false);
  };

  const handleNumberComment = () => {
    numberComment ? setNumbetComment(false) : setNumbetComment(true);
  };

  const dispatch = useDispatch();
  const allPostsComment = useSelector((state) => state.actionPost.addedComment);
  const onePostComment = allPostsComment.filter(
    (com) => com.postId === props.id
  );

  const handleCreateComment = () => {
  
    if (comment.trim() !== "" ){
      dispatch({
        type: "CREATECOMMENT",
        payload: {
          comment: comment,
          commentId: UUidv4(),
          postId: props.id,
        },
      });
      setComment("")
    }
  };

  return (
    <>
      <div className={post.conrainerPost}>
         <PostHeader userName={fullName} imgUser={avatar} />
        <div className={post.textInput}>
          <p>{props.text}</p>
        </div>

        <div>
          <img
            onClick={()=>handleClickOpen()}
            className={post.imgPost}
            src={props.storyImg}
            alt="user img"
          ></img>
        </div>
        <Dialog open={open} fullScreen>
            <ViewPostPage 
            postId={props.id}
            img={props.storyImg} 
            avatar={props.img} 
            handleClose={()=>handleClose()} />
        </Dialog>

        <div className={post.likeConrainer}>
          <div className={post.likeConrainer}>
            {liked ? (
              <>
                <RecommendRoundedIcon color="primary" />
                <p className={post.textSmall}>{like}</p>
              </>
            ) : null}
          </div>
          {
            numberComment && 
                <p 
                onChange={handleNumberComment} 
                className={post.textSmall}>
                { onePostComment.length} коментар</p>

            }
        </div>

        <div className={`${post.border} ${post.buttonBox}`}>
          <Button
            onClick={() => {
              changeLikeOption();
              handleViewLiked();
            }}
            sx={{ textTransform: "none" }}
            color="inherit"
            startIcon={<ThumbUpOutlinedIcon color="disabled" />}
          >
            Like
          </Button>
          <Button
            onClick={handleViewCommentList}
            sx={{ textTransform: "none" }}
            color="inherit"
            startIcon={<ModeCommentOutlinedIcon color="action" />}
          >
            Comment
          </Button>
        </div>

        <div>
          <p
            onClick={handleViewCommentList}
            className={`${post.textSmall} ${post.hover}`}
          >
            Преглед на предишните коментари
          </p>

          {commentList
            && onePostComment.map((com) => {
                return (
                  <CommentList 
                  id={props.id}
                  key={com.comment}
                  text={com.comment}/>
                );
              })
          }
        </div>
        <div className={post.row}>
          <div className={`${post.commenrWrite}`}>
            <CreateComment
          comment={comment}
          onChange={(ev)=>setComment(ev.target.value)}
          handleViewEmoji={()=>handleViewEmoji()}
           onClick={()=>handleCreateComment()}
          numberComment={()=>setNumbetComment(true)} 
          viewComment={handleViewCommentList}  
          imgUser={avatar}/>
          </div>
        </div>
        {viewEmoji && <EmojiPicker
            pickerStyle={{width: "650px"}}
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
            />}
      </div>
    </>
  );
}
