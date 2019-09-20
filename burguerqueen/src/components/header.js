import React from 'react';
import logo from '../logo.png';

function Header(props) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {props.info}
                {' '}
                {props.dato}
            </p>
        </header>
    );
}

export default Header;
