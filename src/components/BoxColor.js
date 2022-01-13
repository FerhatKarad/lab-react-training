import React from 'react'

export default function BoxColor(props) {
    return (
        <div style={{
            borderStyle: 'solid', margin: 10, height:50, display:'flex', alignItems:'center', justifyContent:'center',
            backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
            rgb({props.r},{props.g},{props.b})
        </div>
    )
}
