import React from 'react'
import visa from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'

export default function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    return (
        <div className="containerCard">
            <div className="CreditCard" style={{ backgroundColor: bgColor, color: color }}>
                <p className="logoCard">{type === "Visa" ? (
                    <img src={visa} alt="Visa" />) : (<img src={masterCard} alt="MasterCard" />)}</p>
                <p className="Number">•••• •••• •••• {number.substr(-4)}</p>
                <div className="textCard">
                    <p>Expires {expirationMonth}/{expirationYear.toString().substr(-2)}   {bank}</p>
                    <p>{owner}</p>
                </div>
            </div>
        </div>
    )
}