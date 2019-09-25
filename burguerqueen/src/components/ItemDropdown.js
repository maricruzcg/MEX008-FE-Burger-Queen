import React from 'react';
import { DropdownMenu, DropdownItem } from 'reactstrap';

export default class ItemDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    console.log(e.target);
    if (e.target.dataset.typefood !== "typefood") {
  
    } 
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {

    this.props = {
      text, 
      typeFood,
      Food
    }
      
    return (
        <DropdownMenu data-typefood={typeFood}>
        <DropdownItem>
        <Btn text={text}  class="btn btn-dark og-hover" data-food={Food}/>
        </DropdownItem>
        </DropdownMenu>
    );
  }
}

