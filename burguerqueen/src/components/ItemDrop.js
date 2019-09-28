import React from 'react';
import { DropdownMenu, DropdownItem, Badge } from 'reactstrap';

export default class ItemDrop extends React.Component {
  constructor() {
    super();
//this.toggle = this.toggle.bind(this);

    this.state = {
menu: '',
prices: '', 
subsection: ''
    };

/*     const {menu} = this.state;
    const {food} = this.state; */
}



componentDidMount(){
  this.setState({
    menu: this.props.menu,
    prices: this.props.prices,
    subsection: this.props.subsection
})

this.state.menu ?
console.log(this.state.menu):
console.log('no se ha guardado menu en DID');

}



render() {
    this.state.menu ?
    console.log(this.state.menu):
    console.log('no se ha guardado menu en RENDER');


    const {menu, subsection} = this.state;

//    const newObj = menu[{typeFood}][{subsection}];

/*        const  createItem = (section, sub) => {
        
            return(
                <DropdownMenu>
        {    
          newObj.map( item => 
                <DropdownItem data-item={item}>  <Badge color="dark" data-item={item} pill>{item}</Badge>  </DropdownItem>
            ) 
            }
            </DropdownMenu>    
                 )
        }  */

   // const item = createItem(typeFood,subsection);

    if (!subsection || !menu ) {
      return (<DropdownMenu>
        <DropdownItem>  <Badge color="dark" pill>No hay dataFood</Badge>  </DropdownItem>
  </DropdownMenu>) 

    } else {

      //console.log(subsection);
      
        return(
             <DropdownMenu>
            {    
              menu.map( item => 
                    <DropdownItem data-item={item}>  <Badge color="dark" data-item={item} pill>{item}</Badge>  </DropdownItem>
                ) 
                }
                </DropdownMenu>    
           )
    }

  }
}