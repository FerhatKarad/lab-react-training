import React from 'react'

export default function IdCard(props) {

    return (
        <div className='IdCard'>
            <img src={props.picture} />
            <p className='IdCardB'> <strong>First Name: {props.firstName}</strong>
                <strong>Last Name: {props.lastName}</strong>
                <strong>Gender: {props.gender}</strong>
                <strong>Height: {props.height}</strong>
                <strong>Birth: {props.birth.toDateString()}</strong></p>

        </div>
    )
}
