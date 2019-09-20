import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (<nav className={"navbar navbar-light bg-light"}>
                <a className={"navbar-brand"} href="#">
                    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="pandemonium"/>
                </a>    
            </nav>)
            }
        };
        
        Navbar = withRouter(Navbar);
        export default Navbar;