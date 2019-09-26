import React from 'react';
import Nav from "../components/Navbar";
//import Tips from "../components/Tips";
import Boxtip from "../components/Boxtip"
const Home = () => {
    return (
        <section className={"bg-soft"}>
            <div className={"overlay"}>
            <Nav />
            <Boxtip footerText="FINALIZAR"/>
             {/* <Tips  footerText="ABRIR ORDEN"/> */}
            </div>    
        </section>
    );
}

export default Home;


