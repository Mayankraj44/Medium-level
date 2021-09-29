import React, { useState } from 'react'

export const Likes = () => {
    const [like, setLike] = useState(0)
    return (
        <div>
            <div>No of Likes</div>
            <div>{like}</div>
            <button onClick={e=>setLike(prev=>prev+1)}>Add</button>
            <button onClick={e=>setLike(prev=>prev-1)}>Sub</button>
            
        </div>
    )
}
