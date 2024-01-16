
import './App.css';

function App() {

const firstname ="Dimantha";
const secondname ="Thiranjaya";
const surname ="Weerakoon";
const age =26;
const country="Sri Lanka";

const getfullName =(f,m,s) => {
  return `${f} ${m} ${s}`;
}

const arr= ["Apple","Orange","Graphs"];
const arr1= ["Apple","Orange","Graphs"];

const obj1 ={
  fname:"Nirasha",
  age: 25
}

  return (
    <div className="App">
      <h1>Employee Details</h1>
      <p>Full Name : {firstname}{secondname}{surname}</p>
      <p>Full Name Using Function : {getfullName("Dimantha", "Thiranjaya", "Weerakoon")}</p>
      <p>Age : {age}</p>
      <p>Country : {country}</p>
      <p>{firstname} likes to eat {arr[1]}</p>
      
      <p>His Gf is {obj1.fname} & she is {obj1.age} years old</p> 

    </div>
  );
}

export default App;
