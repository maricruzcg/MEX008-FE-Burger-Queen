import React from 'react';
import Nav from "../components/Navbar";
import Tips from "../components/Tips";
import Username from "../components/Username";
//Se importan los componentes: 1) Boxtip 2)Boxmenu 3)Btn 4) tips 
const Home = () => {
    return (
        <section className={"burguer"}>
            <div className={"overlay"}>
            <Nav />
            <Username />
            <Tips />
            </div>
        </section>
    );
}

export default Home;


