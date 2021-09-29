import React, { useEffect, useState } from 'react'

export const Table = () => {
    const [user,setUser]=useState([])
    const names=["id","name","username","email","address","phone","website","company"]
    useEffect(()=>{
        const apiCall=async ()=>{
            const data=await fetch("https://jsonplaceholder.typicode.com/users").then(r=>r.json())
            console.log(data)
            setUser(data);
        }
        apiCall();
        

    },[])
    

    return (
        <div>
            {/* <button id="load-data" onClick={apiCall}>Load Data</button> */}
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        user && user.map(x=>(
                            <tr key={x.name}>{names.map(y=>{
                                if(y==="company")  
                                    return  <td>{x.company.name}</td>
                                else if(y==="address")
                                    return  <td>{x.address.city}</td>
                                else
                                    return <td>{x[y]}</td>
                                })}</tr>
                        ))
                    }

                </tbody>
            </table>
            
        </div>
    )
}
