import React from 'react';

import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"
import { ButtonDropdown, DropdownToggle, CardImg} from 'reactstrap';
import ItemDropdown from "../components/ItemDropdown"

import { UserProvider } from '../UserContext'


//import Img from "../assets"
/* 
import ImgCOMIDA from "../assets/plate.png"
import ImgBEBIDAS from "../assets/drink.png"
import ImgPOSTRES from "../assets/icecream.png" */

/* import Dropdown from "../components/Dropdown"

import Desserts from "../imgFED/icecream.png"
import Hamburguer from "../imgFED/hamburguer.png"
import Salad from "../imgFED/salad.png"
import Hotdog from "../imgFED/hotdog.png"
import Pizza from "../imgFED/pizza.png" */

class Menu extends React.Component {
    constructor(props) {
        super(props);
    this.toggle = this.toggle.bind(this);

        this.state = {
        menu: '',
        img: '',
        prices: '',
        client: {
            name: '',
        },

      dropdownOpen: false,

      typeFood: 'COMIDA'

        };
    }


     toggle(e) {
     //   console.log(e.target.dataset.typefood);
        const typeData= e.target.dataset.typefood;
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
          typeFood: typeData
        });   
       // console.log(this.state.typeFood);
          
      }   

/*      setTypeFood(e) {
        this.setState({
          typeFood: e.target.dataset.typeFood
        });     
      }   */ 

componentDidMount() {
    fetch('./data/Menu.json')
    .then(response => response.json())
    .then(data => {
        this.setState({
            menu: data.MENU,
            img: data.IMG,
            prices: data.PRICES
        })
     //   console.log(data.MENU);        
    });

    this.setState({
        client: {
        name: localStorage.getItem('myData').toUpperCase(),
        }
    })
}



render() {
  const {name} = this.state.client;
  const order = { name: {name}}


     if(!this.state.menu.BEBIDAS){
    return (
        <p>Loading...</p>
    )
    } else { 
   //console.log(this.state.img.COMIDA);
   //const {COMIDA, BEBIDAS, POSTRES} = this.state.img;
     
    return (
      <UserProvider>
        <section className={"bg-soft"}>
            <div className={"overlay"}>
            <Nav />    
            <Boxfinish clientName={this.state.client.name} footerText="FINALIZAR"/>  
            {
      //       this.state.menu ? 
    Object.keys(this.state.menu).map((element, i) => (
      <ButtonDropdown key={i} data-typefood={element} className={"menu-icon"} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>
          <CardImg  data-typefood={element} bottom width="87px" height="87px" src={require('../assets/plate.png')} alt={element}/>
            <p  data-typefood={element} /* onClick={() => setTypeFood(element)} */ >{element}</p>
      </DropdownToggle>

<ItemDropdown key={i}  typefood={element} menu={this.state.menu} prices={this.state.prices} /* isOpen={this.state.dropdownOpen} */ /* toggle={this.toggle} */ /* typefood={this.state.typeFood} *//>
</ButtonDropdown>

        )) 

        
                /*         :
        <div>Fallo al cargar data</div> */       
    }

            </div>
        </section>
        </UserProvider>
    );
  }
}
}

export default Menu;

