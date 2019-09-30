import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardImg  } from 'reactstrap';
import Btn from "./Btn";


export default class DropdownHam extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        <CardImg bottom width="87px" height="87px" src={this.props.iconMenu} alt={this.props.altMenu}/>          
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem>  <Btn text="SOBERBIA" class="btn btn-dark og-hover"/>   </DropdownItem>
          <DropdownItem> <Btn text="MALICIA" class="btn btn-dark og-hover"/></DropdownItem>
          <DropdownItem> <Btn text="BANANA LIMBO" class="btn btn-dark og-hover"/></DropdownItem>
          <DropdownItem>  <Btn text="GULA" class="btn btn-dark og-hover"/></DropdownItem>
          <DropdownItem>   <Btn text="ALMA EN PENA" class="btn btn-dark og-hover"/></DropdownItem>
          <DropdownItem>   <Btn text="ENCARNACIÓN" class="btn btn-dark og-hover"/> </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}