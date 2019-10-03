import React from 'react';
import { DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import ItemDrop from "../components/ItemDrop"


export default class ItemDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
menu: '',
prices: '', 
typeFood: '',
subsection: ''
    };
}



componentDidMount(){
  this.setState({
    menu: this.props.menu,
    prices: this.props.prices,
    typeFood: this.props.typefood,
})
}

 console (e) {
   e.preventDefault();
   console.log('hola2');
 }

  render() {

    const {typeFood, menu} = this.state;
 //   const addItem = this.props.addItem();
    if (!typeFood || !menu ) {
      return (<DropdownMenu>
        <DropdownItem>  <Badge color="dark" pill>No hay dataFood</Badge>  </DropdownItem>
  </DropdownMenu>)  
    } else {
      if (typeFood === "POSTRES") {

        return(
          <DropdownMenu>
        { 
          //onClick={()=>this.props.addItem([item])}
          this.state.menu.POSTRES.map( (item,i) => ( 
          <DropdownItem key={`postres-items-${i}`} toggle={false} onClick={() => console.log(`Hola desde ${item}`)}>  
              
              <Badge color="dark" pill>{item}</Badge>  
              
          </DropdownItem>
        ))}
      </DropdownMenu>
      )
          }
      if (typeFood === "COMIDA") {
        return(
          <div className={"transparent"}>
          <DropdownMenu>
  {    
    Object.keys(this.state.menu.COMIDA).map( (subsection, i )=> 
          <DropdownItem  key={i} data-subsection={subsection}>  <Badge color="dark" data-subsection={subsection} pill>{subsection}</Badge>  </DropdownItem>
      ) 
      }
      {    
        Object.keys(this.state.menu.COMIDA).map( (subsection,i) => 
          
              <ItemDrop key={i}  menu={this.state.menu.COMIDA[subsection]} prices={this.state.prices} subsection={subsection} /* isOpen={this.state.dropdownOpen} */ /* toggle={this.toggle} */ /* typefood={this.state.typeFood}*/ />
          ) 
          }
          </DropdownMenu> 
          </div>
             )
           }
    
           if (typeFood === "BEBIDAS") {
            return(
              <div>
              <DropdownMenu>
      {    
        Object.keys(this.state.menu.BEBIDAS).map( (subsection,i) => 
              <DropdownItem key={i} data-subsection={subsection}>  <Badge color="dark" data-subsection={subsection} pill>{subsection}</Badge>  </DropdownItem>
          ) 
          }
          {    
            Object.keys(this.state.menu.BEBIDAS).map( (subsection,i) => 
              
                  <ItemDrop key={i} menu={this.state.menu.BEBIDAS[subsection]} prices={this.state.prices} subsection={subsection} /* isOpen={this.state.dropdownOpen} */ /* toggle={this.toggle} */ /* typefood={this.state.typeFood}*/ />
                  // <DropdownItem data-subsection={subsection}>  <Badge color="dark" data-subsection={subsection} pill>{subsection}</Badge>  </DropdownItem>
              ) 
              }
              </DropdownMenu> 
              </div>
                 )
               }

    }

  }
}

