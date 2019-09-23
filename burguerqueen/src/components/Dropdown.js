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
          <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu} alt={this.props.altMenu}/></DropdownItem>
          <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu1} alt={this.props.altMenu1}/></DropdownItem>
          <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu2} alt={this.props.altMenu2}/>
            <DropdownMenu>
              <DropdownItem>
                  <Btn text="JOCHOSLAW" class="btn btn-dark"/>
                  <Btn text="XOLOESCUINTLE" class="btn btn-dark"/>
                  <Btn text="PIT BULL" class="btn btn-dark"/>
                  <Btn text="HACHIKO" class="btn btn-dark"/>
                  <Btn text="PASTOR ALEMÁN" class="btn btn-dark"/>
              </DropdownItem>
            </DropdownMenu>
          </DropdownItem>
          <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu3} alt={this.props.altMenu3}/></DropdownItem>
          <Btn text="EXTRAS" class="btn btn-dark" />          
        </DropdownMenu>
        
      </ButtonDropdown>
    );
  }
}





// import React from 'react';
// import { Dropdown} from 'reactstrap';
// import { DropdownButton} from 'reactstrap';
// class Dropdownn extends React.Component {
//  render(){
//      return (
//        <Dropdown.Button id="dropdown-basic-button" title="Dropdown button">
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         </Dropdown.Button>
//      )
// }  
// };

// export default Dropdown;