import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faPeopleArrows} />

const Header = () => {
    return (
        <div className='header'>
            <h1>COVID-19-VACCINES</h1>
            <h1>Say No To covid-19 {icon} Order your Vaccines</h1>
            <p>Toward the goal of ending the pandemic, what does the evidence show about boosting immunity for those already vaccinated versus prioritizing vaccine access worldwide</p>
            <h1>Total Budget: Upto 150 Million USD</h1>
        </div>
    );
};

export default Header;