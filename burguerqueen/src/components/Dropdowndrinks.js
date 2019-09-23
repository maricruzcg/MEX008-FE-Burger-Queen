import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
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
              <Btn text="MALTEADAS" className="btn btn-secondary" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem><Btn text="FRESA" className="btn btn-secondary" /></DropdownItem>
            <DropdownItem><Btn text="MAZAPÁN" className="btn btn-secondary" /></DropdownItem>
            <DropdownItem><Btn text="CHOCOMENTA"  /></DropdownItem>
            <DropdownItem><Btn text="OTRO" className="btn btn-secondary" /></DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      );
    }
  }