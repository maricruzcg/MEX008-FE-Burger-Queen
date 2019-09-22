import React from 'react';
import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"
import Btn from "../components/Btn"

import Food from "../imgFED/plate.png"

const Menu = () => {
    return (
        <div>
            <Nav />
            <Btn type="submit" class="menu-icon plate" text="Comida" />
            <Btn type="submit" class="menu-icon" text="Bebidas" />
            <Btn type="submit" class="menu-icon" text="Postres" />
            <Boxfinish />
        </div>
    );
}

export default Menu;

