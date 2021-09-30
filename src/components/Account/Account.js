import React from 'react'
import { useEffect , useState} from 'react/cjs/react.development'

export const Account = () => {
    const [amount, setAmount] = useState('')
    const [add,setAdd]=useState('');
    const [buy,setBuy]=useState('');
    useEffect(()=>{
        
        let saving=localStorage.getItem("saving")
        if(!saving)
        {
            localStorage.setItem("saving",0)
            
            setAmount(0);
        }
        else
        {
            setAmount(saving);
        }
       
        // setAmount(0)
    },[])
    const Add=()=>{
       if(add>0)
       {
        let saving=Number(localStorage.getItem("saving"))
        // console.log(typeof(saving))
        let value=Number(add)+saving
        localStorage.setItem("saving",value)
        setAmount(value);
        
       }
       else
       {
           alert("cant add neagtive amount")
       }
       setAdd('')
    }
    const Buy=()=>{
        
        if(buy>=0){
            let saving=Number(localStorage.getItem("saving"))
        // console.log(typeof(saving))
        let value=saving-Number(buy)
        if(value<0)
        alert("Dont have enough money to buy this")
        else{
            localStorage.setItem("saving",value)
            setAmount(value)
        }
        
        }
        else
        alert("cant buy in negative amount")
        setBuy('')
     }
    return (
        <div>
            
           <span>Amount</span> <h1 id="amount">{amount}</h1>
            <div>
            <input type="number" onChange={(e) =>setAdd(e.target.value)} value={add}/>
            <button onClick={Add}>ADD</button>
            </div>
            <div>
            <input type="number" onChange={(e) =>setBuy(e.target.value)} value={buy}/>
            <button onClick={Buy}> Buy</button>
            </div>
            
        </div>
    )
}
