import React from 'react';
import Btn from "./Btn";

class Navbar extends React.Component {
    render() {
        return (<nav className={"navbar nav-dark"}>
            <Btn type="button" class="btn btn-dark double" text="IR A ADMINISTRACIÓN"/>
        </nav>)
    }
};

export default Navbar;

