import { faChartColumn, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Navbar() {
    
    return (
        <div className="navbar-container">
            <div className="navbar-flex">
                <h1 className="flaggle-logo">
                    Flaggle
                </h1>
                <div className="button-flex">    
                    <FontAwesomeIcon icon={faChartColumn} size="2x" />    
                    <FontAwesomeIcon icon={faInfo} size="2x"  style={{marginBottom:"5px"}}/>
                </div>
                <div className="hamburger-menu">
                    <span>25x5</span>
                    <span>25x5</span>
                    <span>25x5</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
