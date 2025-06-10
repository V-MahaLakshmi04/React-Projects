import React, {useState} from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const App = () => {

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if(isRunning) return;
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
     setTimer((prev) => prev + 1); 
    },1000)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    setIsRunning(false);
  }

  useEffect(() =>{
    return () => clearInterval(intervalRef.current)
  },[])

  return (
    <div className='whole'>
    <div className='container'>
      <h1>Time:{timer}s</h1>
      <button id='Start' onClick={startTimer}>Start</button>    
      <button id='Stop' onClick={stopTimer}>Stop</button>    
      <button id='Reset' onClick={resetTimer}>Reset</button>    
    </div>
    </div>
  )
}

export default App