import {useState} from 'react'

export const Stopwatch = () => {
  const [sec,setSec]=useState(0)
  const [timerid,setTimerid]=useState();
  var timer;
  // console.log(sec);
  const stopwatch=()=>{
    let newSec=Number(sec);
    newSec+=1;
    console.log("Counter increaseda",newSec)
    // console.log("After",hr,min,sec)
    // console.log("Changed",{hr:hr,min:min,sec:sec})

    // setTime({hr:hr,min:min,sec:sec})

    setSec(Number(newSec))
  }
  
  const start=()=>{
    let startButton=document.getElementById("start")
    if(startButton.innerText==="Start")
    {
     
      startButton.innerText="Stop"
      console.log("Start Timer")
      timer=setInterval(stopwatch,1000)
      console.log("Timer id",timer)
      setTimerid(timer)
    }
    else
    {
      
      startButton.innerText="Start"
      console.log("Stop Timer")
      console.log("Timer id",timerid)
      clearInterval(timerid)

    }
    
  }
  const pause=()=>{
    let pauseButton=document.getElementById("pause")
    if(pauseButton.innerText==="Pause")
    {
      pauseButton.innerText="Resume"
      clearInterval(timerid)
    }
    else
    {
      pauseButton.innerText="Pause"
      timer=setInterval(stopwatch,1000)
      setTimerid(timer)
    }
    
    
  }
  return (
    <div className="Stopwatch">
     <h1>Time</h1>
     <div>{sec}</div>
     <div>
       <button id="start" onClick={start}>Start</button>
       <button id="pause" onClick={pause}>Pause</button>
     </div>
    </div>
  );
}

