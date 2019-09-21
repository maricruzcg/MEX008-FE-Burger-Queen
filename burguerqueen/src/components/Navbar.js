import React from 'react';
import Btn from "./Btn";

class Navbar extends React.Component {
    render() {
        return (
            <nav className={"navbar navbar-light bg-light"}>
                <Btn type="button" text="Ir a administración" />
            </nav>
        );
    }
};

export default Navbar;

