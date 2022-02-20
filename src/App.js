import logo from './logo.svg';
import './App.css';

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
  const design={
    margin:'16px',
    borderRadius:'5px',
    boxShadow:'0 2px 5px #ccc',
    backgroundColor: '#888888',
    fontSize:'18px',
    alignContent:'flex-start',
    padding:'5px'
  }

 
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
      <div style={design}>
        <h3>{obj2.title}</h3>
        <p>{obj2.description}</p>
      </div>
      <div style={design}>
        <h3>{obj2.title}</h3>
        <p>{obj2.description}</p>
      </div>
      <hr></hr>
      <div style={design}>
        <h3>{obj2.title}</h3>
        <p>{obj2.description}</p>
      </div>
      <hr></hr>
      
    

      
    </div>
  );
}

export default App;
