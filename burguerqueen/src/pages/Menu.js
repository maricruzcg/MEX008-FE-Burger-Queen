import React from 'react';
import Nav from "../components/Navbar";
import Btn from "../components/Btn";

const Menu = () => {
    return (<div>
        <Nav />
        <Btn href="#" type="submit" className={"btn btn-dark"} text="Comida"/>
       </div>);
}

export default Menu;

