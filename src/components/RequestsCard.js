import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    image:{
    width: "60px",
      height:"60px",
    borderRadius: "33.33px",
      objectFit: "cover"
    },
    text:{
    color: "Black",
    fontFamily: "Arial",
    fontSize: "14px",
    marginLeft: "5px",
    
    },
    container:{
      display:"flex",
      gap:"10px",
      width:"100%",
      height:"100px",
      backgroundColor:"white",
      borderRadius:"15px",
      justifyContent:"center",

    },
    addButton:{
      backgroundColor:"#2e81f4",
      border:"none",
      borderRadius: "5px",
      width:"100%",
      height:"33%",
      color:"white",
      marginTop:"-8px"
      
    },
    clearButton:{
      backgroundColor:"grey",
      border:"none",
      borderRadius: "5px",
      width:"100%",
      height:"33%",
      color:"black"
      
    },
    containerButton:{
      display:"flex",
      flexDirection: "column",
      width:"65%",
      gap:"5px",
      height:"100%",
      marginTop:"-8px"
    },
    containerImage:{
      marginTop:"17px"
    }
    

  });

function RequestsCard() {
    const classes = useStyles();
    const currentUser = useSelector((state) => state.userData.currLogged);
    const allUsers = useSelector((state) => state.userData.registered);
    const dataOfCurrentUser = allUsers.filter(e => e.email === currentUser[0].email)
    const dispatch = useDispatch();

    const addFriends = (ev) =>{
    dispatch({type:"ADD", payload : ev.target.value});
   
  }

  const deleteFriends = (ev) =>{
    dispatch({type:"DELЕТЕ", payload : ev.target.value});
   
  }

    return (
        <>
            {
                dataOfCurrentUser[0].requests.map(e => {
                    console.log(e.firstName)
                    return (
                   
                        <div className={classes.container}>
                            <div className={classes.containerImage}>
                            
                            <img className={classes.image} src={e.avatar} />
                            
                            
                            </div>

                            <div className={classes.containerButton}>
                              
                            <p className={classes.text}>{e.firstName}</p>
                            
                            <button className={classes.addButton} onClick={addFriends} value={e.email}>Потвърждаване</button>
                            <button className={classes.clearButton} onClick={deleteFriends} value={e.email}>Премахване</button>
                            </div>

                        </div>
                    )

                })
            }
        </>
    )
}

export default RequestsCard