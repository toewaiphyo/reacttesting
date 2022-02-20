
import './App.css';
import Card from './card';

function App() {
  const firstname="John";
  const lastname="Wick";
  const age=28;
  const job="React Developer";
  const getFullName=(firstname,lastname)=>{return `${firstname} ${lastname}`}
  const hinttext="Enter Your Details";
  const inputbox=<input placeholder={hinttext} autoComplete/>;
  const arr=['apple','orange','banana','papaya','coconut'];
  const obj={
    name:"toe wai phyo",
    age:28,
    hobby:'coding'
  };
  const obj2={
    title:"React Js",
    description:"  React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study React Js is a good one to study and i am also love to study"
  }
  const arrh=[
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
    const card=arrh.map((item,pos)=>{
      console.log(item);
      return(
          <Card key={pos} title={item.title} description={item.description} id={item.id}/>
      )
    });
  

 
  return (
    <div className="App">
      <h3>Full Name:{firstname+" "+lastname}</h3>
      <p>My name is:{getFullName(firstname,lastname)}</p>
      <p>Job: {job}</p>
      <p>Age : {age}</p>
      {inputbox}<br></br>
      {arr.length}<br/>
      {arr.splice(2,1)}<br/>
      {arr.push('banana')}<br/>
      {arr}<br></br>
      {obj.name}<br/>
      {obj.age}<br/>
      {obj.hobby}<br/>
      {/* <div className='tested'>
        <h3>{obj2.title}</h3>
        <p>{obj2.description}</p>
      </div>
      <div className='tested'>
        <h3>{obj2.title}</h3>
        <p>{obj2.description}</p>
      </div>
      <div className='tested'>
        <h3>{obj2.title}</h3>
        <p>{obj2.description}</p>
      </div> */}
      {card}
      
    

      
    </div>
  );
}

export default App;
