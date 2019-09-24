import React from 'react';
import { ButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,  CardImg } from 'reactstrap';

export default class MenuComponent extends React.Component {
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
      
    return (
      <ButtonDropdown className={"menu-icon"} data-typefood="" isOpen={this.state.dropdownOpen} toggle={this.toggle}>

      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}