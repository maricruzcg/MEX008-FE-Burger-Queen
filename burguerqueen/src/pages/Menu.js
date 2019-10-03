import React from 'react';

import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"
import { ButtonDropdown, DropdownToggle, CardImg} from 'reactstrap';
import ItemDropdown from "../components/ItemDropdown"

import { ClientProvider } from '../ClientContext'

import img from "../assets"
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
            order: [],
        },

      dropdownOpen: false,

      typeFood: ''
        };
    }

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
          name: localStorage.getItem('myData').toUpperCase()
          }
      })
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

      setTypeFood(element) {
        this.setState({
          typeFood: element
        });     
      } 
      
      addItem(item) {
        console.log('addItem', item);
        
      //   const newProduct = {
      //     item: item,
      //     quantity: 1,
      //     price: this.state.prices.item
      //   };
        
      // const orderStart = this.state.client.order;
      // orderStart.push(newProduct);
      
      //   this.setState({
      //     client: {
      //       name: localStorage.getItem('myData').toUpperCase(),
      //       order: orderStart
      //       }
      //   });      
      }


render() {
  const {name, order} = this.state.client;
  const client = { 
    name: {name},
    order: {order}
}


     if(!this.state.menu.BEBIDAS){
    return (
        <p>Loading...</p>
    )
    } else { 
   
   //const {COMIDA, BEBIDAS, POSTRES} = this.state.img;
     
    return (
      <ClientProvider value={client}>
        <section className={"bg-soft"}>
            <Nav />    
            <Boxfinish clientName={this.state.client.name} footerText="FINALIZAR"/> 
            {
      //       this.state.menu ? 
    Object.keys(this.state.menu).map((element, i) => (
      <ButtonDropdown key={i} data-typefood={element} className={"menu-icon"} isOpen={this.state.dropdownOpen} toggle={this.toggle} onClick={() => this.setTypeFood(element)} >
      <DropdownToggle caret>
          <CardImg  data-typefood={element} bottom width="87px" height="87px" src={img[this.state.img[element]]} alt={element} onClick={() => this.setTypeFood(element)} />
            <p  data-typefood={element} onClick={() => this.setTypeFood(element)} >{element}</p>
      </DropdownToggle>
      {(this.state.typeFood && this.state.typeFood === element) ?
      <ItemDropdown key={i}  typefood={this.state.typeFood} menu={this.state.menu} prices={this.state.prices}  addItem={this.addItem}/* isOpen={this.state.dropdownOpen} */ /* toggle={this.toggle} */ /* typefood={this.state.typeFood} *//> :
      ""
      }
      </ButtonDropdown>
    )) 

        
                /*         :
        <div>Fallo al cargar data</div> */       
    }

        </section>
        </ClientProvider>
    );
  }
}
}

export default Menu;

