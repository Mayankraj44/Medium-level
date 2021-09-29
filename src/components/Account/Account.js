import React from 'react'
import { useEffect , useState} from 'react/cjs/react.development'

export const Account = () => {
    // const [amount, setAmount] = useState('')
    let amount;
    useEffect(()=>{
        amount=document.getElementById("amount");
        let saving=localStorage.getItem("saving")
        if(!saving)
        {
            localStorage.setItem("saving",0)
            
            amount.innerText="0"
        }
        else
        {
            amount.innerText=saving
        }
       
        // setAmount(0)
    },[])
    const add=(e)=>{
       let  value=Number(e.target.parentNode.children[0].value);
       console.log(value)
       if(value>0)
       {
        let saving=Number(localStorage.getItem("saving"))
        console.log(typeof(saving))
        value=value+saving
        localStorage.setItem("saving",value)
        amount.innerText=value
        e.target.parentNode.children[0].value=""
       }
       else
       {
           alert("cant add neagtive amount")
       }
    }
    const buy=(e)=>{
        let  value=Number(e.target.parentNode.children[0].value);
        console.log(value)
        if(value>=0){
            let saving=Number(localStorage.getItem("saving"))
        console.log(typeof(saving))
        value=saving-value
        if(value<0)
        alert("Dont have enough money to buy this")
        else{
            localStorage.setItem("saving",value)
            amount.innerText=value
        }
        e.target.parentNode.children[0].value=""
        }
        else
        alert("cant buy in negative amount")

     }
    return (
        <div>
            
           <span>Amount</span> <h1 id="amount">{amount}</h1>
            <div>
            <input type="number" />
            <button onClick={(e)=>add(e)}>ADD</button>
            </div>
            <div>
            <input type="number" />
            <button onClick={e=>buy(e)}> Buy</button>
            </div>
            
        </div>
    )
}
