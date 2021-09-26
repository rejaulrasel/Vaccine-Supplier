import React from 'react';
import VaccineName from '../VaccineName/VaccineName';
import './VaccineCart.css'

const VaccineCart = (props) => {
    const vaccines = props.vaccinesCart;
    let total = 0;

    // using loop for sum all vaccines cost
    for (const item of props.vaccinesCart) {
        total = total + item.price;
    }
    
    return (
        <div className='vaccine-cart'>
            <div className="vaccine-cost-info">
                <h2><span className='title-design'>Vaccine Cart</span> </h2>
                <h3>Total types Of Vaccine: {vaccines.length}</h3>
                <h3>Total-cost: ${total} </h3>
            </div>
            <div className="vaccine-name">
                <h3><span className='title-design'>Vaccine-List</span> </h3>
                {
                    props.vaccinesCart.map(vaccine => <VaccineName
                        key={vaccine.id}
                        vaccine={vaccine.name}></VaccineName>
                    )
                }
            </div>
        </div>
    );
};

export default VaccineCart;