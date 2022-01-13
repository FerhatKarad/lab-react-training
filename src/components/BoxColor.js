import React from 'react'

export default function BoxColor(props) {
    return (
        <div style={{
            borderStyle: 'solid', margin: 10, fontSize:40, height:200, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column',
            backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
            rgb({props.r},{props.g},{props.b})
            
            #({props.hex})
        </div>
    )
}
