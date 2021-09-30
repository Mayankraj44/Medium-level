import React, { useRef, useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)
    let timer = useRef(null) //we are using ref to store timer id instead we can use state also to store the id
    
    function start(e){
        console.log(timer)
        if(e.target.innerHTML==="Start")
        {
            e.target.innerHTML="Stop"
            timer.current=setInterval(()=>setCount(prev=>prev+1),1000)
           
        }
        else
        {
            e.target.innerHTML="Start"
            clearInterval(timer.current)

        }

        

    }
    function reset(){
        document.getElementById("start").innerHTML="Start0"
        clearInterval(timer.current)
        setCount(0)
    }
    return (
        <div>
            <div>Count</div>
            <div>{count}</div>
            <button id="start" onClick={e=>start(e)}>Start</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}
