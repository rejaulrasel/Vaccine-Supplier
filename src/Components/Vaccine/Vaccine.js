import React from 'react';
import './Vaccine.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faSyringe} />

const Vaccine = (props) => {
    //destructuring the every single data
    const {name, producer, produced, img, efficiency, quantity, price} = props.vaccine;

    return (
        <div className='vaccine-section'>
            
            <div className="vaccine-image">
            <img src={img} alt="" />
            </div>
            <div className="vaccine-info">
            <h3>{name}</h3>
            <p>Producer: {producer}</p>
            <p>Produced: {produced}</p>
            <p>Efficiency: {efficiency}</p>
            <p>Quantity: {quantity} pcs</p>
            <p>Price: ${price}</p>
            </div>
            <button onClick={() => props.handleAddToVaccineCart(props.vaccine)}>{icon} <span style={{marginLeft:'5px'}}>Order-Vaccine</span></button>
        </div>
    );
};

export default Vaccine;