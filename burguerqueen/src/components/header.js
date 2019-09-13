import React from 'react';
import logo from '../logo.svg';

function Header(props) {
    // console.log(props);
    return (

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                 Edit <code>src/App.js</code>
                 {props.info}
            </p>
            <p>
                 {props.dato}
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
        </header>
    );
}

export default Header;
