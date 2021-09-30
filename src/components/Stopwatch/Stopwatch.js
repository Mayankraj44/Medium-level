import {useEffect, useState} from 'react'
import './index.css'

export const Stopwatch = () => {
  const [time,setTime]=useState(0);
  const [isActive,setIsActive]=useState(false);
  const [isPause,setIsPause]=useState(false)


  useEffect(() => {
    let timer=null;
    if(isActive && !isPause)
    {
      timer = setInterval(() =>{
      setTime(prev => prev+1)
    },10)
    }
    else{
      clearInterval(timer)
    }
    
    return (() => {
      clearInterval(timer)
    })

  },[isPause,isActive])
  


  const start = () =>{
    setIsActive(true)
  }
  const reset = () =>{
    setIsActive(false)
    setIsPause(false)
    setTime(0);
  }
  const pauseResume = () =>{
  setIsPause(prev => !prev)
  }
  console.log(isActive,isPause)
  return (
    <div className="stopwatch">
      {/* <div>Time</div>
      <div>{time}</div> */}
      <div class="digits">{Math.floor(time/360000)}:{("0"+Math.floor(time/6000)%60).slice(-2)}:{("0"+Math.floor(time/100)%60).slice(-2)}:<span class="millisecond">{("0"+time).slice(-2)}</span></div>
     <div class="controls">
     {!isActive ? 
     <button onClick={start}>Start</button>
     :
     <>
     <button onClick={reset}>Reset</button>
     <button onClick={pauseResume}>{isPause ? "Resume" : "Pause" }</button>
     </>
     }
     </div>
    </div>
  );
}

