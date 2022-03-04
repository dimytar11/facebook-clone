import React from "react";
import CreateStory from "./CreateStory";
import StoryBox from "./StoryBox";
import { makeStyles } from "@mui/styles";
import  UserStories from "./UserStories"

const useStyle = makeStyles({
  storyContainer: {
    width: "130%",
    display: "flex",
    justifyContent: "center",
  },
});

export default function StoryContainer() {
  let start = Math.ceil(Math.random() * 12);
  
  const style = useStyle();
  return (
    <div className={style.storyContainer}>
      <CreateStory />
    
      {UserStories.slice(start, start + 4).map((u) => {
        return (
          <StoryBox
            key={u.name}
            img={u.story}
            avatar={u.avatar}
            name={u.name}
            story={u.story}
          />
        );
      })}
    </div>
  );
}
