import React from 'react';
import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"
import Dropdown from "../components/Dropdown"

import Food from "../imgFED/platePrueba.png"

const Menu = () => {
    return (
        <section className={"burguer"}>
            <div className={"overlay"}>
            <Nav />
            <Boxfinish />
            <Dropdown icon={Food} text="COMIDA" alt="plato" />
            </div>
        </section>
    );
}

export default Menu;

