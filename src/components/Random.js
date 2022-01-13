import React from 'react'

// destructer the props with {}
export default function Random({min, max}) {

 let randomNumber = Math.floor(Math.random() * (max - min) + min )

    return (
        <div className='Random'>
            <h1>Random value between {min} and {max} = {randomNumber}</h1>
            
        </div>
    )
}
