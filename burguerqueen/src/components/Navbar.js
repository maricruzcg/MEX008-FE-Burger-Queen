import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (<nav className={"navbar navbar-light bg-light"}>
            <a className={"navbar-brand"} href="#">
                <button type="button" className={"btn btn-dark"}>Ir a administración</button>
            </a>
        </nav>)
    }
};

Navbar = withRouter(Navbar);
export default Navbar;