import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faSyringe} />

const VaccineName = (props) => {
    return (
        <div>
            <p>{icon} {props.vaccine}</p>
        </div>
    );
};

export default VaccineName;