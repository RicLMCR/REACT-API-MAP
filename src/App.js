import './App.css';
import {useEffect, useState} from 'react';

const App = ()=>{
const [myAnimals, setMyAnimals]=useState([])

// Call on the API and return an array of object data
useEffect(()=>{
const fetchAnimals = async()=>{
  const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/5');
  const data = await response.json();
  setMyAnimals(data);
};
fetchAnimals()
},[]);


// Use 'maps' to create an entry for each iteration that's been returned through the API
const listObject = myAnimals.map((animal,index)=>{
  console.log({animal})
     return(
       <div>
         <div className="box">
       <h1 key={index}>{animal.name}</h1>
       </div>
       </div>
     )
   }
   )

return(
<div>

{listObject}

  </div>
)

} //End App
export default App;
///////////////////////////////////////////////////////////////////////////////
