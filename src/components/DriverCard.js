import React from 'react'

export default function DriverCard(props) {

    let rating = Math.round(props.rating);

    return (
        <div className='DriverCard'>

            <div className='Driver-info'>
                
                <img className='Driver-img' src={props.img} />
                <h1>{props.name}</h1>
                <div className="Rating">
                    {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                </div>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>


        </div>
    )
}
