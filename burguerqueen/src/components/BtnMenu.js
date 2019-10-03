import React from 'react';
import food from '../assets/plate.png';
import drinks from '../assets/drink.png';
import desserts from '../assets/icecream.png';

class BtnMenu extends React.Component{
    constructor() {
        super();

        this.state = {
            showFood: false,
            showHamburguer: false,
        }
        this.showFood = this.showFood.bind(this);
        this.showHamburguer = this.showHamburguer.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showFood(event) {
        event.preventDefault();

        this.setState({showFood:true}, () => {
            document.addEventListener('click', this.showHamburguer);
        });
    }

    showHamburguer(event) {
        event.preventDefault();

        this.setState({showHamburguer:true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event){

        if(!this.dropdownMenu.contains(event.target)){
            
            this.setState({ showFood:false}, { showHamburguer:false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }   
    }

    render(){
        return(
            <section>
                <button onClick={this.showFood} className="btn finish-dark og-hover">
                <img src={food} bottom width="87px" height="87px" className={"menu-icon"}/>
                    COMIDA
                </button>
                <button className="btn finish-dark og-hover">
                <img src={drinks} bottom width="87px" height="87px" className={"menu-icon"}/>
                    BEBIDAS
                </button>
                <button className="btn finish-dark og-hover">
                <img src={desserts} bottom width="87px" height="87px" className={"menu-icon"}/>
                    POSTRES
                </button>
                {
                    this.state.showFood
                    ? (
                <div 
                className = "menu"
                ref={(element) => {
                    this.dropdownMenu = element;
                }}
                >
                    <button className="btn finish-dark og-hover" onClick={this.showHamburguer}>HAMBURGUESAS</button>
                    <button className="btn finish-dark og-hover">ENSALADA</button>
                    <button className="btn finish-dark og-hover">HOTDOG</button>
                    <button className="btn finish-dark og-hover">PIZZA</button>
                </div>

                    )
                    :(
                        null
                    )
                }

                {
                    this.state.showHamburguer
                    ? (
                <div 
                className = "menu"
                ref={(element) => {
                    this.dropdownMenu = element;
                }}
                >
                    <button className="btn finish-dark og-hover">MALICIA</button>
                    <button className="btn finish-dark og-hover">SOBERBIA</button>
                    <button className="btn finish-dark og-hover">GULA</button>
                    <button className="btn finish-dark og-hover">ALMA EN PENA</button>
                    <button className="btn finish-dark og-hover">ENCARNACIÓN</button>
                    <button className="btn finish-dark og-hover">BANANA LIMBO</button>
                </div>

                    )
                    :(
                        null
                    )
                }
            </section>
        );
    }
};
export default BtnMenu;