import React from 'react';
import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"
import { ButtonDropdown, DropdownToggle, CardImg } from 'reactstrap';

import Food from "../imgFED/plate.png"

/* import Dropdown from "../components/Dropdown"

import Drinks from "../imgFED/drink.png"
import Desserts from "../imgFED/icecream.png"
import Hamburguer from "../imgFED/hamburguer.png"
import Salad from "../imgFED/salad.png"
import Hotdog from "../imgFED/hotdog.png"
import Pizza from "../imgFED/pizza.png" */

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
        menu: null,
        img: null,
        prices: null
        };
    }

componentDidMount() {
    fetch('./data/Menu.json')
    .then(response => response.json())
    .then(data => {
      //  console.log(data);        
        this.setState({
            menu: data
        })
    });

    fetch('./data/Img.json')
    .then(response => response.json())
    .then(data => {
      //  console.log(data);        
        this.setState({
            img: data
        })
    });
}

render(){
    if(!this.state.menu){
   console.log(this.state.menu);
    return (
        <p>:c</p>
    )
    } else {
        console.log(this.state.menu.BEBIDAS)
    return (
        <section className={"bg-soft"}>
            <div className={"overlay"}>
            <Nav />    
            <Boxfinish footerText="FINALIZAR"/>  
            {
             this.state.menu ? 
    Object.keys(this.state.menu).map(element => (
      <ButtonDropdown className={"menu-icon"} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>
          <CardImg  bottom width="87px" height="87px" src={Food} alt={element}/>
            <p  data-typefood={element} >{element}</p>
      </DropdownToggle>


      
      </ButtonDropdown>
        )) :
        <div>No hay recomendaciones</div>

            
    }


{/*            <Dropdown icon={Food} text="COMIDA" alt="plato"
            iconMenu={Hamburguer} altMenu="hamburguer"
            iconMenu1={Salad} altMenu1="salad"
            iconMenu2={Hotdog} altMenu2="hotdog"
            iconMenu3={Pizza} altMenu3="pizza"/>

             <Dropdown icon={Drinks} text="BEBIDAS" alt="bebida"/> 
            
             <Dropdown icon={Desserts} text="POSTRES" alt="postre" />   */}
            </div>
        </section>
    );
  }
}
}

export default Menu;

