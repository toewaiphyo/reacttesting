import React from "react";
import './App.css';
import classes from './card.module.css';

const Card=(props)=>{
    return(
    <div className={classes.cards}>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>)
}
export default Card