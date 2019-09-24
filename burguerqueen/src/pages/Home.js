import React from 'react';
import Nav from "../components/Navbar";
import Tips from "../components/Tips";
import ModalUI from "../components/Modal";

//import Username from "../components/Username";

//Se importan los componentes: 1) Boxtip 2)Boxmenu 3)Btn 4) tips 
const Home = () => {
    return (
        <section className={"bg-soft"}>
            <div className={"overlay"}>

            <Nav />
            {/* <ModalUI class="btn-lg btn-block" buttonLabel="AGREGAR ORDEN" title="¿A QUÉ NOMBRE VA A QUEDAR LA ORDEN?"/> */}
            <Tips  footerText="ABRIR ORDEN"/>
            </div>
    
        </section>
    );
}

export default Home;


