import React, { useEffect, useState } from 'react';
import Vaccine from '../Vaccine/Vaccine';
import VaccineCart from '../VaccineCart/VaccineCart';
import './Vaccines.css'
const Vaccines = () => {
    // all vaccines state
    const [vaccines,setVaccines] = useState([])

    // create vaccine cart state
    const[vaccinesCart, setVaccinesCart]= useState([]);

    //add to Vaccine cart event handler
    const handleAddToVaccineCart = (vaccine) => {
        const newVaccineCart = [...vaccinesCart,vaccine];
        setVaccinesCart(newVaccineCart);
    }

    //load the vaccines.JSON data
    useEffect(() => {
        fetch('./vaccines.JSON')
        .then(res => res.json())
        .then(data => setVaccines(data))
    },[])
    return (
        <div className='vaccines-section'>
            <div className="all-vaccines">
                { 
                    vaccines.map(vaccine => <Vaccine
                    key={vaccine.id}
                    vaccine={vaccine}
                    handleAddToVaccineCart={handleAddToVaccineCart}
                    >
                    </Vaccine>)
                }
            </div>
            <div className="calculate-vaccine">
                <VaccineCart vaccinesCart={vaccinesCart}></VaccineCart>
            </div>
        </div>
    );
};

export default Vaccines;