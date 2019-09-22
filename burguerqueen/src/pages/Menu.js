import React from 'react';
import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"
import Dropdown from "../components/Dropdown"

import Food from "../imgFED/plate.png"

const Menu = () => {
    return (
        <section className={"burguer"}>
            <div className={"overlay"}>
            <Nav />
            <Boxfinish />
            <Dropdown className={"card-img-bottom"} icon={Food} />
            </div>
        </section>
    );
}

export default Menu;

