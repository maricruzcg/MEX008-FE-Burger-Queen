import React from 'react';
import { DropdownMenu, DropdownItem, Badge } from 'reactstrap';

export default class ItemDropdown extends React.Component {
  constructor() {
    super();
//this.toggle = this.toggle.bind(this);

    this.state = {
menu: '',
prices: '', 

typeFood: ''
    };
}



componentDidMount(){
  this.setState({
    menu: this.props.menu,
    prices: this.props.prices,

    typeFood: this.props.typefood
})
}


  render() {
    const {typeFood, menu} = this.state;
    if (!typeFood || !menu ) {
      return (<DropdownMenu>
        <DropdownItem>  <Badge color="dark" pill>No hay dataFood</Badge>  </DropdownItem>
  </DropdownMenu>)  
    } else {
      console.log(typeFood);
      
      if (typeFood === "POSTRES") {
        return(
          <DropdownMenu>
  {    
    this.state.menu.POSTRES.map( item => 
          <DropdownItem>  <Badge color="dark" pill>{item}</Badge>  </DropdownItem>
      ) 
      }
      </DropdownMenu>    
           )
           }
    
      if (typeFood === "COMIDA") {
        return(
          <DropdownMenu>
  {    
    Object.keys(this.state.menu.COMIDA).map( subsection => 
          <DropdownItem>  <Badge color="dark" pill>{subsection}</Badge>  </DropdownItem>
      ) 
      }
      </DropdownMenu>    
           )
           }
    
           if (typeFood === "BEBIDAS") {
            return(
              <DropdownMenu>
      {    
        Object.keys(this.state.menu.BEBIDAS).map( subsection => 
              <DropdownItem>  <Badge color="dark" pill>{subsection}</Badge>  </DropdownItem>
          ) 
          }
          </DropdownMenu>    
               )
               }

    }

  }
}

