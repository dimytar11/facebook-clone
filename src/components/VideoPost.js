import * as React from "react";
import { makeStyles } from "@mui/styles";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { IFrame } from "./IFrame.js";
import { useState } from 'react';
import UserStories from "./UserStories.js";
import PostHeader from "./post/PostHeader.js";
import { useSelector } from "react-redux";
import ButtonPost from "./post/ButtonPost.js";
import CreateComment from "./post/CreateComment.js";

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
  header: {
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    padding: "20px",
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
  },
  addComment: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "10px",
  },
  form: {

    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: " #eff2f5",
  },
  input: {
    borderRadius: "20px",
    width: "60%",
    height: "30px",
    color: "action",
    border: "none",
    backgroundColor: " #eff2f5",
    padding: "10px",
    marginLeft: "5px"
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
    padding: "10px",
    borderRadius: "20px",
    width: "60%",
    height: "30px",

  },
  commenrWrite: {

    display: "flex",
    width: "95%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: " #eff2f5",
    borderRadius: "20px",
    marginLeft: "5px"

  },
  IFrame: {
    width: "100%",

  },
  hover: {
    cursor: "pointer",
  },


});

export default function VideoPost(props) {
  const fullName = useSelector(
    (state) => state.userData.currLogged[0].firstName
  );
  const avatar = useSelector((state) => state.userData.currLogged[0].avatar);
  const video = useStyles();
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


  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  return (
    <>
      {UserStories.slice(0,1).map((user) => {
        return (
          <>
            <div key={uuidv4()} className={video.conrainerPost}>
              <PostHeader userName={fullName} imgUser={avatar} />
              <div>
                <IFrame
                  className={video.IFrame}
                  src="https://www.youtube.com/embed/kbMqWXnpXcA?list=RDkbMqWXnpXcA"
                />
              </div>
              <div className={video.likeConrainer}>
                <div>
                  {liked ? (
                    <div className={video.likeConrainer}>
                      <RecommendRoundedIcon color="primary" />
                      <p className={video.textSmall}>{like}</p>
                    </div>
                  ) : null}
                </div>             
              </div>
              <div className={video.buttonBox}>
                <div
                  onClick={() => {
                    changeLikeOption();
                    handleViewLiked();
                  }}
                >
                  <ButtonPost
                    name="Like"
                    icon={<ThumbUpOutlinedIcon sx={{ mr: 1 }} color="action" />}
                  ></ButtonPost>
                </div>
                <div onClick={handleViewCommentList}>
                  <ButtonPost
                    name="Comment"
                    icon={
                      <ModeCommentOutlinedIcon sx={{ mr: 1 }} color="action" />
                    }
                  ></ButtonPost>
                </div>
              </div>
              <div>
                <p
                  onClick={handleViewCommentList}
                  className={`${video.textSmall} ${video.hover}`}
                >
                  View previouse comments
                </p>
                
                <CreateComment
                  numberComment={() => props.setNumbetComment(true)}
                  viewComment={() => props.handleViewCommentList()}
                  imgUser={avatar}
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
