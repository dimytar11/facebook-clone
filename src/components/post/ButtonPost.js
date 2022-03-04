import * as React from "react";
import { Button } from "@mui/material";

export default function ButtonPost(props) {
  
  return ( 
    <Button 
    color="inherit"
    sx={{ textTransform: "none" }}
     >{props.icon}{props.name}</Button>          
  );
}
