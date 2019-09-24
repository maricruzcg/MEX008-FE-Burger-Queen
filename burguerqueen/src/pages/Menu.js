import React from 'react';
import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"
import Dropdown from "../components/Dropdown"

import Food from "../imgFED/plate.png"
import Drinks from "../imgFED/drink.png"
import Desserts from "../imgFED/icecream.png"
import Hamburguer from "../imgFED/hamburguer.png"
import Salad from "../imgFED/salad.png"
import Hotdog from "../imgFED/hotdog.png"
import Pizza from "../imgFED/pizza.png"
import { tsConstructorType } from '@babel/types';


class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
        menu: {},
        prices: {}
        };
    }

componentDidMount() {
    fetch('')
    .then(Response => Response.json)
    .then(data => this.setState({data}))
}

render(){

    return (
        <section className={"bg-soft"}>
            <div className={"overlay"}>
            <Nav />

    
            <Boxfinish footerText="FINALIZAR"/>
    
    
             <Dropdown icon={Food} text="COMIDA" alt="plato"
            iconMenu={Hamburguer} altMenu="hamburguer"
            iconMenu1={Salad} altMenu1="salad"
            iconMenu2={Hotdog} altMenu2="hotdog"
            iconMenu3={Pizza} altMenu3="pizza"/>
            <Dropdown icon={Drinks} text="BEBIDAS" alt="bebida"/> 
            
             <Dropdown icon={Desserts} text="POSTRES" alt="postre" /> 
            </div>
        </section>
    );

}

}

export default Menu;

