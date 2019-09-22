import React from 'react';
import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"

const Menu = () => {
    return (
        <section className={"burguer"}>
            <div className={"overlay"}>
            <Nav />
            <Boxfinish />
            </div>
        </section>
    );
}

export default Menu;

