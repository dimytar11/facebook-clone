import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Button, ButtonGroup } from "react-rainbow-components";
import RightButton from "../components/header/RightButton";
import ButtonPost from "../components/post/ButtonPost";
import PostHeader from "../components/post/PostHeader";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { grey } from "@mui/material/colors";
import CommentList from "../components/post/CommentList";
import { useDispatch, useSelector } from "react-redux";
import CreateComment from "../components/post/CreateComment";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UUidv4 from "../components/Util";
import EmojiPicker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

const useStyle = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    // padding: "46px 0px 0px 0px",
  },
  leftDiv: {
    width: "70%",
    // height: "100vh",
    backgroundColor: "rgb(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
  },
  rightDiv: {
    width: "30%",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  img: {
    width: "75%",
    objectFit:"contain"
  },
  right: {
    display: "flex",
    justifyContent: "right",
    borderBottom: "1px solid #cfd0d1",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "1px solid #cfd0d1",
    borderTop: "1px solid #cfd0d1",
  },
  iconButton: {
    color: "action",
    marginLeft: "2px",
  },

  likeConrainer: {
    height: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0px 5px",
    justifyContent: "space-between",
  },
  hover: {
    cursor: "pointer",
  },
});

export default function ViewPostPage(props) {
  const fullName = useSelector(
    (state) => state.userData.currLogged[0].firstName
  );
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);

  const viewPost = useStyle();
  const [like, isLike] = useState(false);
  const [liked, viewLiked] = useState(false);

  const changeLikeOption = () => {
    if (like === false) {
      isLike(true);
      isLike(like + 1);
    } else {
      isLike(like - 1);
      isLike(false);
    }
  };
  
  const allPosts = useSelector((state) => state.actionPost.addedPosts);
  const userLogPost = allPosts.filter((u) => u.userName === fullName);
  const allComments = useSelector((state) => state.actionPost.addedComment.filter(com=>com.postId === props.postId));

  console.log(allComments);


 


  const [numberComment, setNumbetComment] = useState(false);
  const handleViewLiked = (props) => {
   
    liked ? viewLiked(false) : viewLiked(true);
  };
  const [commentList, viewCommentList] = useState(true);
  const handleViewCommentList = () => {
    commentList ? viewCommentList(false) : viewCommentList(true);
  };
  const handleNumberComment = () => {
    numberComment ? setNumbetComment(false) : setNumbetComment(true);
  };
  
  const [comment, setComment] = useState("");

  const setHandleComment = (ev) => {
    setComment(ev.target.value);
  };
  const [viewEmoji, setViewEmoji] = React.useState(null);
  const handleViewEmoji=()=>{
    viewEmoji?setViewEmoji(false):setViewEmoji(true)
  }

  const onEmojiClick = (ev, emojiObject) => {
    setComment(comment=>comment + emojiObject.emoji);
    setViewEmoji(false);
    console.log(comment + emojiObject.emoji);
  };
  const dispatch = useDispatch();

  const handleCreateComment = () => {
    console.log(comment);
    if (comment.length !== 0) {
      dispatch({
        type: "CREATECOMMENT",
        payload: {
          comment: comment,
          commentId: UUidv4(),
          postId: props.postId,
        },
      });
      setComment("");
    }
  };





  return (
    <>
      <div className={viewPost.container}>
        <div className={viewPost.leftDiv}>
            <CloseIcon
            onClick={props.handleClose}
            sx={{
              fontSize: 24,
              color: grey[200],
              margin: "5px 10px",
            }}
          />
          <img className={viewPost.img} src={props.img} alt="user post"></img>
        </div>
        <div className={viewPost.rightDiv}>
          <div className={viewPost.right}>
            <RightButton />
          </div>
          <PostHeader userName={fullName} imgUser={avatar} />
          <div className={viewPost.likeConrainer}>
            <div>
              {liked && 
                <div className={viewPost.likeConrainer}>
                  <RecommendRoundedIcon color="primary" />
                  <p className={viewPost.textSmall}>{like}</p>
                </div>
              }
            </div>
            {
              numberComment &&
              <p 
              onChange={handleNumberComment} 
              className={viewPost.textSmall}>{ allComments.length} коментар</p>
            }
           
          </div>
          <div className={viewPost.buttonBox}>
            <div
              
            >
              <ButtonPost
              onClick={() => {
                changeLikeOption();
                handleViewLiked();
              }}
                name="Like"
                icon={<ThumbUpOutlinedIcon sx={{ mr: 1 }} color="action" />}
              ></ButtonPost>
            </div>
            <div
            onClick={handleViewCommentList}>
              <ButtonPost
                name="Comment"
                icon={<ModeCommentOutlinedIcon sx={{ mr: 1 }} color="action" />}
              ></ButtonPost>
            </div>
          </div>

          <div>
            <p 
            onClick={handleViewCommentList}
            className={`${viewPost.textSmall} ${viewPost.hover}`}>
              View previouse comments
            </p>
          {
            commentList &&
            allComments.map(com=>{
              return(
                <CommentList
                key={com.comment}
                text={com.comment}/> )})    
          }
      
          <CreateComment
          comment={comment}
          onChange={(ev)=>setComment(ev.target.value)}
          handleViewEmoji={()=>handleViewEmoji()}
          // handleCreateComment={handleCreateComment}
           onClick={(ev)=>handleCreateComment(ev)}
          numberComment={()=>setNumbetComment(true)} 
          viewComment={()=>viewCommentList(true)}  
          imgUser={avatar}/>
          </div>
          {viewEmoji && <EmojiPicker
            pickerStyle={{width: "450px"}}
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
            />}
         
        </div>
      </div>
    </>
  );
}
