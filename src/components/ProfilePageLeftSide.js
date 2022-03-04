import React from "react";
import { makeStyles } from "@mui/styles";
import ProfilePageLeftSideField from "./ProfilePageLeftSideField";
import ProfilePageLeftSideFormDialog from "./ProfilePageLeftSideFormDialog";
import { useSelector } from "react-redux";
import FriendsCardsSmall from "./FriendsCardsSmall"

const useStyle = makeStyles({
  mainWrapper: {
    boxShadow: "5px 5px 5px 5px rgb(169,169,169,0.25)",
    fontSize: "12px",
    marginTop: "16px",
    marginLeft: "10%",
    height: "1180px",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    fontFamily: "Segoe UI",
    textTransform: "uppercase",
  },
  container: {
    width: "100%",
    boxShadow: "5px 5px 5px px rgb(169,169,169,0.25)",
    fontSize: "12px",
    height: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px 10px 0 0",
    fontFamily: "Segoe UI",
    textTransform: "uppercase",
  },
  mainText: {
    marginLeft: "-61%",
    fontSize: "22px",
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: "12px                          ",
  },
  biography: {
    marginTop: "-15px",
    width: "400px",
    textAlign: "center",
    fontFamilies: "Helvetica",
  height: "15px",
  },
  friendsContainer: {
    borderRadius: "5px",
    marginTop: "15px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",

  }
});

export default function ProfilePageLeftSide() {
  const style = useStyle();
  const biography = useSelector((state) => state.profile.biography);
 

  return (
    <div className={style.mainWrapper}>
      <div className={style.container}>
        <p className={style.mainText}>Въведение</p>
        <p className={style.biography}> {biography}</p>
        <ProfilePageLeftSideFormDialog />
        <ProfilePageLeftSideField
          className={style.secondaryText}
          key="2"
          name="Редактиране на подробностите"
        />
        <ProfilePageLeftSideField
          className={style.secondaryText}
          key="3"
          name="Добавяне на хобита"
        />
        <ProfilePageLeftSideField
          className={style.secondaryText}
          key="4"
          name="Добавяне на препоръчано съдържание"
        />
      </div>
      <div className={style.friendsContainer}>
      <FriendsCardsSmall/>

      </div>
      
    </div>
  );
}
