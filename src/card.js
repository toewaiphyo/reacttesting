import React from "react";
import './App.css';

const Card=(props)=>{
    return(
    <div className='tested'>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>)
}
export default Card