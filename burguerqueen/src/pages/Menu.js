import React from 'react';

import { ButtonDropdown, DropdownToggle, CardImg } from 'reactstrap';
import Nav from '../components/Navbar';
import Boxfinish from '../components/Boxfinish';
import ItemDropdown from '../components/ItemDropdown';

import { ClientProvider } from '../ClientContext';

import img from '../assets';

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
        order: []
      },

      dropdownOpen: {}
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
        });
      });

    this.setState({
      client: {
        name: localStorage.getItem('myData').toUpperCase()
      }
    });
  }

  toggle(element) {
    this.setState({
      dropdownOpen: {
        ...!this.state.dropdownOpen,
        [element]: !this.state.dropdownOpen[element]
      }
    });
  }

  addItem(item, price) {
    //    console.log('addItem', item, price);

    const newProduct = {
      product: item,
      quantity: 1,
      price
    };

    console.log(newProduct);

    // const orderStart = this.state.client.order;
    // orderStart.push(newProduct);

    // this.setState({
    //   client: {
    //     name: localStorage.getItem('myData').toUpperCase(),
    //     order: orderStart
    //   }
    // });
  }

  render() {
    // const {name, order} = this.state.client;
    const client = {
      name: this.state.client.name,
      order: this.state.client.order
    };

    if (!this.state.menu) {
      return <p>Cargando Menú...</p>;
    }
    return (
      <ClientProvider value={client}>
        <section className="bg-soft">
          <Nav />
          <Boxfinish
            clientName={this.state.client.name}
            footerText="FINALIZAR"
          />
          {Object.keys(this.state.menu).map((option, i) => (
            <ButtonDropdown
              key={i}
              data-typefood={option}
              className="menu-icon"
              isOpen={this.state.dropdownOpen[option]}
              toggle={() => this.toggle(option)}
            >
              <DropdownToggle caret>
                <CardImg
                  data-typefood={option}
                  bottom
                  width="87px"
                  height="87px"
                  src={img[this.state.img[option]]}
                  alt={option}
                />
                <p data-typefood={option}>{option}</p>
              </DropdownToggle>
              <ItemDropdown
                key={i}
                typefood={option}
                menu={this.state.menu}
                prices={this.state.prices}
                addItem={this.addItem}
              />
              {/* {(this.state.typeFood && this.state.typeFood === element) ?
      <ItemDropdown key={i}  typefood={element} menu={this.state.menu} prices={this.state.prices.element}/> :
      ""
      } */}
            </ButtonDropdown>
          ))}
        </section>
      </ClientProvider>
    );
  }
}

export default Menu;
