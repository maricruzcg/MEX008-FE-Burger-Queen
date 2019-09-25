import React from 'react';
import Nav from "../components/Navbar";
import Tips from "../components/Tips";

const Home = () => {
    return (
        <section className={"bg-soft"}>
            <div className={"overlay"}>

            <Nav />
            <Tips  footerText="ABRIR ORDEN"/>
            </div>
    
        </section>
    );
}

export default Home;


