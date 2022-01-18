import React from 'react'
import { useState } from 'react';

export default function LikeButton() {

    const [count, setCount] = useState(0)
    const clickHandler = () => {
        setCount(count => count + 1)
    }
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];


    return (
              
        <button onClick={clickHandler}style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            color: 'white',
          }}
        ><h3>{count}Likes</h3></button>
        
    )
}

