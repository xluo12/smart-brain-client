import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div style={{marginLeft: '50px'}}>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner"><img src={brain} alt='logo' style={{paddingTop: '25px'}}/></div>
            </Tilt>
        </div>
    )
}

export default Logo;