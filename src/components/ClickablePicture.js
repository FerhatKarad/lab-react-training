import React from 'react'
import { useState } from 'react';
import image from '../assets/images/maxence.png';
import imgClicked from '../assets/images/maxence-glasses.png';


export default function ClickablePicture(props) {

    const [img, setImg] = useState(true,false)

     const imgHandler = () => {
        setImg(!img)
     }
    return (
          <>
        { 
            img ?
           <img onClick={imgHandler}style={{height: '300px' }} src={image}/> : 
           <img onClick={imgHandler}style={{height: '300px'}} src={imgClicked} />
        }
        
    </>
    )}
