
import React,{Component} from 'react';
import Card from './card.js';
import './App.css';
class App extends Component{
  state={
    showdialog:true
  }
  // const firstname="John";
  // const lastname="Wick";
  // const age=28;
  // const job="React Developer";
  // const getFullName=(firstname,lastname)=>{return `${firstname} ${lastname}`}
  // const hinttext="Enter Your Details";
  // const inputbox=<input placeholder={hinttext} autoComplete/>;
  // const arr=['apple','orange','banana','papaya','coconut'];
  // const obj={
  //   name:"toe wai phyo",
  //   age:28,
  //   hobby:'coding'
  // };
  // const obj2={
  //   title:"React Js",
  //   description:"  React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study"
  // }
  arrh=[
      {
        id:1,
        title:"React Js",
        description:"  React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study"
      },
      {
        id:2,
        title:"React Js2",
        description:"  React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study"
      },
      {
        id:3,
        title:"React Js3",
        description:"  React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study"
      }
  
    ]
    
    card=this.arrh.map((item,pos)=>{
      console.log(item);
      return(
          <Card key={pos} title={item.title} description={item.description} id={item.id}/>
      )
    });
    onhideButtonClick=()=>{
      // let updatestate=!this.state.showdialog;
      // this.setState({
      //   showdialog:updatestate
      // })
      this.setState((prevState,prevProps)=>{
        return{showdialog:!prevState.showdialog}
      })
    }
  

 
  render(){
    return (
      <div className="App">
        <button onClick={this.onhideButtonClick}>{this.state.showdialog ? 'Hide blog':'Show blog'}</button>
        <br></br> 
        {
        this.state.showdialog?this.card:null
        }         
      </div>
    );
  }
  }
      

export default App;
