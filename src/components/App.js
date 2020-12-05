import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
const [counter, setCounter] = useState(0);
const [clock, setClock] = useState(true)
  const keyDownfunction = (keypress)=>{
    setCounter(0);
    setClock(false);
    let inputvalue = Math.floor(keypress.target.value);
    if(isNaN(inputvalue)){
      setCounter(0);
    }else if(keypress.keyCode === 13){
      setCounter(inputvalue); 
      setClock(true);  
    }
  } 
 React.useEffect(()=>{
   if(counter > 0 && clock){
    setTimeout(()=>{
      setCounter(counter-1);
    },1000)
   }
  // const intervalId = setInterval(counterfn, 1000);
  // function counterfn(){
  //   if(counter == 0){
  //     clearInterval(intervalId);
  //   }
  //   else{
  //     setCounter(counter - 1);
  //   }
  // }
 });
  
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={keyDownfunction} /> sec.
        </h1>
      </div>
      <div id="current-time">{counter}</div>
    </div>
  )
}


export default App;
