import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardImg } from 'reactstrap';
import Btn from "./Btn";



export default class Example extends React.Component {
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
      <ButtonDropdown className={"menu-icon"} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
            <CardImg bottom width="87px" height="87px" src={this.props.icon} alt={this.props.alt}/>
              <p>{this.props.text}</p>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
              <Btn text="SOBERBIA" class="btn btn-dark"/>
              <Btn text="MALICIA" class="btn btn-dark"/>
              <Btn text="BANANA LIMBO" class="btn btn-dark"/>
              <Btn text="GULA" class="btn btn-dark"/>
              <Btn text="ALMA EN PENA" class="btn btn-dark"/>
              <Btn text="ENCARNACIÓN" class="btn btn-dark"/>
            </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}