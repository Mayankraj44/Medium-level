import React, { useEffect, useState } from 'react'

export const Robo = () => {
    let [users,setUser]=useState([])
    let [filter,setFilter]=useState([])
    useEffect(() => {
        const getCall = async()=>{
            const data=await fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
            // console.log(data)
            setUser(data)
            setFilter(data)
            

        }
        getCall();
        
    }, [])
    const search =(e)=>{
        // console.log(e.target.value)
        let text=e.target.value.toLowerCase()
        console.log(text)
        const newArray=users.filter(item=>{
            // console.log(item.name.toLowerCase(),item.email.toLowerCase())
            if(item.name.toLowerCase().includes(text)||item.email.toLowerCase().includes(text))
            {
                console.log(item)
                return item
            }
            else
            return false;
        })
        console.log(newArray)
        setFilter(newArray)
    }
    console.log(users)
    return (
        <div>
            <div style={{padding: "10px",
    fontSize: "40px",
    color: "blue",
    fontWeight: 800}}>ROBOFANS</div>
            <div><input type="text" onChange={e=>search(e)} style={{fontSize:"20px"}}/></div>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",margin:"10px"}}>
                {filter.map(item=>(
                    <div key={item.id} className="robots">
                        <img src={`https://robohash.org/${item.id}?200x20`}alt="robo pic" />
                        <div className="text">{item.name}</div>
                        <div className="email">{item.email}</div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
