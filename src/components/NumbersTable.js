import React from 'react'

export default function NumbersTable(props) {
 
    const numbers = [...Array(props.limit).keys()]

    return (
        <div>

            {numbers.map(n => {
                return (
                    <div 
                        key={n}
                        style={{backgroundColor: n % 2 === 0 ? 'white' : 'red'}}>
                        <p>{n + 1}</p>
                    </div>
                )
            })}
            
        </div>
    )
}
