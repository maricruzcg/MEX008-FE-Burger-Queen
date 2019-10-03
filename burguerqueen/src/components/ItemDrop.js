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
}



render() {
    const {menu, subsection} = this.state;

    if (!subsection || !menu ) {
      return (<DropdownMenu>
        <DropdownItem>  <Badge color="dark" pill>No hay dataFood</Badge>  </DropdownItem>
  </DropdownMenu>) 

    } else {
      //console.log(subsection);
      
        return(
             <DropdownMenu>
            {    
              menu.map( (item,i) => 
                    <DropdownItem key={i} data-item={item}>  <Badge color="dark" data-item={item} pill>{item}</Badge>  </DropdownItem>
                ) 
                }
                </DropdownMenu>    
           )
    }

  }
}