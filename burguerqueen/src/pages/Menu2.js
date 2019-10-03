import React from 'react';
import BtnMenu from "../components/BtnMenu";
import Nav from "../components/Navbar";
import Boxfinish from "../components/Boxfinish";

const Menu2 = () => {
    return (
        <section className={"bg-soft"}>
            <Nav />
            <Boxfinish footerText="FINALIZAR"/> 
            <div>
            <BtnMenu />
            </div>    
        </section>
    );
}

export default Menu2;