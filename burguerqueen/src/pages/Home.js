import React from 'react';
import Nav from "../components/Navbar";
import Boxtip from "../components/Boxtip"

const Home = () => {
    return (
        <section className={"vb"}>
            <div className={"overlay"}>
            <Nav />
            <Boxtip footerText="ABRIR ORDEN"/>
            </div>    
        </section>
    );
}

export default Home;


