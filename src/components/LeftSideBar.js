import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Collapse from "@mui/material/Collapse";
import { makeStyles } from "@mui/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import memories from "../components-css/imgLeftBar/memoirs.png";
import friends from "../components-css/imgLeftBar/friends.png"
import save from "../components-css/imgLeftBar/reserved.png";
import grups from "../components-css/imgLeftBar/grups.png";
import publicity from "../components-css/imgLeftBar/publicity.png";
import pages from "../components-css/imgLeftBar/pages.png";
import clima from '../components-css/imgLeftBar/clima.png'
import adMasanger from "../components-css/imgLeftBar/dispatcher.png";
import comminity from "../components-css/imgLeftBar/helpAll.png";
import covid from "../components-css/imgLeftBar/covid.png";
import health from "../components-css/imgLeftBar/helper.png";
import events from "../components-css/imgLeftBar/events.png";
import pay from "../components-css/imgLeftBar/pay.png";
import favorites from "../components-css/imgLeftBar/like.png";
import fundraisers from "../components-css/imgLeftBar/company fundraising.png";
import video from "../components-css/imgLeftBar/video.png";
import liveVideo from "../components-css/imgLeftBar/liveVideo.png";
import marketPlace from "../components-css/imgLeftBar/marketPlace.png";
import masanger from "../components-css/imgLeftBar/masanger.png";
import recent from "../components-css/imgLeftBar/recent.png";
import game from "../components-css/imgLeftBar/game.png";
import recentAd from "../components-css/imgLeftBar/recentAd.png";
import translate from "../components-css/imgLeftBar/translation.png";
import watch from "../components-css/imgLeftBar/watch.png";
import wather from "../components-css/imgLeftBar/wather.png";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  container: {
    width: "28%",
    background: "#F2F3F5",
    padding: "20px",
    marginLeft: "-30px",
  },
  img: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
    // marginRight:"-15px"
  },

  text: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft: "10px",
    textDecoration: "none",
    color: "#2c2d2d",
    height: "50px",
  },
  list: {
    borderBottom: "1px solid #cfd0d1",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft: "10px",
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    fontWeight: "600",
    width: "100%",
  },
  shortcuts: {
    width: "30px",
    height: "30px",
    borderRadius: "5px",
    marginRight: "0px",
  },
  link: {
    textDecoration: "none",
    color: "#2c2d2d",
  },
  gamesWrapper: {
    marginTop: "-10px",
  },

  games: {
    height: "60px",
    display: "flex",
    alignItems: "base-line",
  },
  textGames: {
    fontFamily: "Segoe UI Historic",
    marginLeft: "15px",
    fontWeight: "600",
    fontSize: "16px",
  },
  textShortcuts: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft: "10px",
    textDecoration: "none",
    color: "#2c2d2d",
    fontWeight: "600",
  },
});

export default function LeftSidebar() {

 const fullName = useSelector(
   (state) => state.userData.currLogged[0].firstName
 );
 const avatar = useSelector((state) => state.userData.currLogged[0].avatar);

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };

  let text = "";

  return (
    <div className={classes.container}>
      <List className={classes.list}>
        <Link className={classes.link} to="/user">
          <ListItemButton className={classes.text}>
            <ListItemIcon>
              <img
                className={classes.img}
                src={avatar}
                alt="avatar"
              ></img>
            </ListItemIcon>
            <p className={classes.link}> {fullName} </p>
          </ListItemButton>
        </Link>
        <Link className={classes.link} to="/friends">
          <ListItemButton className={classes.text}>
            <ListItemIcon>
              <img
                className={classes.img}
                src={friends}
                alt="icon friends"
              ></img>
            </ListItemIcon>
            <p className={classes.link}>Приятели</p>
          </ListItemButton>
        </Link>

        <Link className={classes.link} to="/grup">
          <ListItemButton className={classes.text}>
            <ListItemIcon>
              <img width="30px" src={grups} alt="icon grups"></img>
            </ListItemIcon>
            <p className={classes.link}>Групи</p>
          </ListItemButton>
        </Link>

        <Link className={classes.link} to="/video">
          <ListItemButton className={classes.text}>
            <ListItemIcon>
              <img width="30px" src={watch} alt="icon watch"></img>
            </ListItemIcon>
            <p className={classes.link}>Watch</p>
          </ListItemButton>
        </Link>

        <ListItemButton className={classes.text}>
          <ListItemIcon>
            <img width="30px" src={memories} alt="icon memories"></img>
          </ListItemIcon>
          <p className={classes.link}>Спомени</p>
        </ListItemButton>

        <ListItemButton className={classes.text}>
          <ListItemIcon>
            <img width="30px" src={save} alt="icon save"></img>
          </ListItemIcon>
          <p className={classes.link}>Записано</p>
        </ListItemButton>

        <ListItemButton className={classes.text}>
          <ListItemIcon>
            <img width="30px" src={pages} alt="icon pages"></img>
          </ListItemIcon>
          <p className={classes.link}>Страници</p>
        </ListItemButton>

        <ListItemButton className={classes.text} onClick={handleClick}>
          <ListItemIcon>
            <ArrowDropDownIcon />
          </ListItemIcon>
          <p className={classes.link}>{text}</p>
          {open ?  (< ExpandLess />, {text} = "Вижте по-малко") : (<ExpandMore/> , {text} = "Вижте повече")}
        </ListItemButton>

        <Collapse in={open}>
          <List>
            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={publicity} alt="icon public"></img>
              </ListItemIcon>
              <p className={classes.link}>Рекламен център</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img
                  width="30px"
                  src={adMasanger}
                  alt="icon ads masanger"
                ></img>
              </ListItemIcon>
              <p className={classes.link}>Диспечер на реклами</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={clima} alt="icon clima centre"></img>
              </ListItemIcon>
              <p className={classes.link}>Център за климатичната наука</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img
                  width="30px"
                  src={comminity}
                  alt="icon community help"
                ></img>
              </ListItemIcon>
              <p className={classes.link}>Кампании за набиране нна средства</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={covid} alt="icon COVID-19 "></img>
              </ListItemIcon>
              <p className={classes.link}>COVID-19 Информационнен център</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={health} alt="icon health"></img>
              </ListItemIcon>
              <p className={classes.link}>Емоционално здраве</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={events} alt="icon events"></img>
              </ListItemIcon>
              <p className={classes.link}>Събития</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={pay} alt="icon pay"></img>
              </ListItemIcon>
              <p className={classes.link}>Facebook Pay</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={favorites} alt="icon favorites"></img>
              </ListItemIcon>
              <p className={classes.link}>Любими</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img
                  width="30px"
                  src={fundraisers}
                  alt="icon fundraisers"
                ></img>
              </ListItemIcon>
              <p className={classes.link}>Фондации</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={video} alt="icon video"></img>
              </ListItemIcon>
              <p className={classes.link}>Играене на игри</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={liveVideo} alt="icon live video"></img>
              </ListItemIcon>
              <p className={classes.link}>Видео на живо</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img
                  width="30px"
                  src={marketPlace}
                  alt="icon market place"
                ></img>
              </ListItemIcon>
              <p className={classes.link}>Marketplace</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={masanger} alt="icon masanger"></img>
              </ListItemIcon>
              <p className={classes.link}>Messenger</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={recent} alt="icon recent"></img>
              </ListItemIcon>
              <p className={classes.link}>Най-скорошни</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={game} alt="icon game"></img>
              </ListItemIcon>
              <p className={classes.link}>Игри</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={recentAd} alt="icon ad activity"></img>
              </ListItemIcon>
              <p className={classes.link}>Скорошни реклами</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={translate} alt="icon translate"></img>
              </ListItemIcon>
              <p className={classes.link}>Преведи Facebook</p>
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px" src={wather} alt="icon for wather"></img>
              </ListItemIcon>
              <p className={classes.link}>Wether</p>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <div className={classes.gamesWrapper}>
        <p className={classes.textShortcuts}>Вашите преки пътища</p>
        <ListItemButton className={classes.games}>
          <img
            className={classes.shortcuts}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsuxNXRSr9m_ouPhbTMRbcgyRU6hYab_5JKforfCRNIgwFf2S6ge8WygysNQz9SOZak8&usqp=CAU"
            alt="kozi"
          ></img>
          <p className={classes.textGames}>Candy Crush </p>
        </ListItemButton>

        <ListItemButton sx={{ height: "20px" }} className={classes.games}>
          <img
            className={classes.shortcuts}
            src="https://cdn.vox-cdn.com/thumbor/Q8BXCKDV7Elwz8AlVBI6KX5IR4g=/0x0:1870x818/1400x933/filters:focal(786x260:1084x558):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67480796/farmville.0.jpg"
            alt="kozi"
          ></img>
          <p className={classes.textGames}> Farm Ville</p>
        </ListItemButton>
        <ListItemButton className={classes.games}>
          <img
            className={classes.shortcuts}
            src="https://sociable.co/wp-content/uploads/2011/12/castleville-zynga.jpg"
            alt="kozi"
          ></img>
          <p className={classes.textGames}>Castle Ville</p>
        </ListItemButton>
        <ListItemButton className={classes.games} sx={{ height: "20px" }}>
          <img
            className={classes.shortcuts}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnEQrbwUq-tdGDrXskavB7o02zjnPgQGZgQcx5EjYDJAAgRR7o9lspHQO0i6YIWe6kOM&usqp=CAU"
            alt="kozi"
          ></img>
          <p className={classes.textGames}> Army Attack</p>
        </ListItemButton>
        <ListItemButton className={classes.games}>
          <img
            className={classes.shortcuts}
            src="https://eu-images.contentstack.com/v3/assets/blt95b381df7c12c15d/blt7d86932750bd05d9/61d8885cb744cd76dd91ba9b/angrybirdsloadingscreenfeatured.jpg?quality=80&format=jpg&width=828"
            alt="kozi"
          ></img>
          <p className={classes.textGames}> Angry Birds</p>
        </ListItemButton>
      </div>
    </div>
  );
}
