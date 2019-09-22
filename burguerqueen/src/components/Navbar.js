import React from 'react';
import Btn from "./Btn";

// import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
    // getNavLinkClass = (path) => {
    //     return this.props.location.pathname === path ? 'active' : '';
    // }
    render() {
        return (<nav className={"navbar navbar-light bg-light"}>
            <Btn type="button" class="large btn btn-dark" text="Ir a administración"/>
        </nav>)
    }
};

// Navbar = withRouter(Navbar);
export default Navbar;