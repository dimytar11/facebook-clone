import React from "react";
import { makeStyles } from "@mui/styles";
import CreatePost from "./post/CreatePost";
import Post from "./post/Post";
import PrintUserPosts from "./PrintUserPosts";

const useStyle = makeStyles({
  mainRight: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginTop: "-19px",
    gap: "5px",
  },
});

export default function ProfilePageRightSide() {
  const style = useStyle();

  return (
    <div className={style.mainRight}>
      <CreatePost />
      <PrintUserPosts />
      <Post storyImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      <Post storyImg="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
      <Post storyImg="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Post storyImg="https://media.istockphoto.com/photos/alexander-nevsky-cathedral-in-sofia-bulgaria-taken-in-may-2019-taken-picture-id1182393363?k=20&m=1182393363&s=612x612&w=0&h=1tVDnEAxLygwPdod5B9ijIBnscyLy-mMNxPI2Mw2RjU=" />
    </div>
  );
}
