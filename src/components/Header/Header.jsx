import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <header className="header">
            <h1 className='header-text'>
                Weather <span className='bold-header-text' >Forecast</span>
            </h1>
        </header>
    );
}

export default Header;