import React from 'react';
import {useState} from 'react';


 export default function App() {


  const[counter,setCounter]=useState(0)
  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
    setCounter(counter-1)
  }
 

  return (
    <div >
      <h1>coounter:{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
