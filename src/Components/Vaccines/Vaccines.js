import React, { useEffect, useState } from 'react';
import Vaccine from '../Vaccine/Vaccine';
import './Vaccines.css'
const Vaccines = () => {
    const [vaccines,setVaccines] = useState([])
    // console.log(vaccines);
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
                    >
                    </Vaccine>)
                }
            </div>
            <div className="calculate-vaccine">
            
            </div>
        </div>
    );
};

export default Vaccines;