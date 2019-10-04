import React from 'react';

import Nav from "../components/Navbar"
import Boxfinish from "../components/Boxfinish"
import { ButtonDropdown, DropdownToggle, CardImg} from 'reactstrap';
import ItemDropdown from "../components/ItemDropdown"

import { ClientProvider } from '../ClientContext'

import img from "../assets"


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

      dropdownOpen: {},

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

      setTypeFood(data) {

        this.setState({
          typeFood: data
        });     
      } 
      

      toggle(element) {
          this.setState({
                  dropdownOpen: {
                    ...!this.state.dropdownOpen,
                  [element]: !this.state.dropdownOpen[element],
                }
                }) 
      };

      addItem(item) {
        console.log('addItem', item);
        
        const newProduct = {
          item: item,
          quantity: 1,
          price: this.state.prices.item
        };
        
      const orderStart = this.state.client.order;
      orderStart.push(newProduct);
      
        this.setState({
          client: {
            name: localStorage.getItem('myData').toUpperCase(),
            order: orderStart
            }
        });      
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
    Object.keys(this.state.menu).map((element, i) => (
      <ButtonDropdown key={i} data-typefood={element} className={"menu-icon"} isOpen={this.state.dropdownOpen[element]} toggle={() => this.toggle(element)}>
      <DropdownToggle caret onClick={() => {this.setTypeFood(element)}}>
          <CardImg  data-typefood={element} bottom width="87px" height="87px" src={img[this.state.img[element]]} alt={element}/>
            <p  data-typefood={element}>{element}</p>
      </DropdownToggle>
      <ItemDropdown key={i}  typefood={element} menu={this.state.menu} prices={this.state.prices.element} addItem={this.addItem}/> 
      {/* {(this.state.typeFood && this.state.typeFood === element) ?
      <ItemDropdown key={i}  typefood={element} menu={this.state.menu} prices={this.state.prices.element}/> :
      ""
      } */}
      </ButtonDropdown>
    ))     
    }

        </section>
     </ClientProvider>
    );
  }
}
}

export default Menu;

