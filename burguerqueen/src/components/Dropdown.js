import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardImg } from 'reactstrap';
import Btn from "./Btn";
//import Dropdowndrinks from "./Dropdowndrinks";
import DropdownHam from "./DropdownHamburguer";



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle(e) {
    console.log(e.target);
    if (e.target.dataset.typefood !== "typefood") {
     
    } 
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
 
  }

  render() {
    console.log("modifico el estado ", this.state.dropdownOpen);
    
    return (
      <ButtonDropdown className={"menu-icon"} data-typefood="typefood" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
            <CardImg  data-typefood="typefood" bottom width="87px" height="87px" src={this.props.icon} alt={this.props.alt}/>
              <p  data-typefood="typefood" >{this.props.text}</p>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            {/* <DropdownHam/> */}
            <CardImg bottom width="87px" height="87px" src={this.props.iconMenu} alt={this.props.altMenu}/>
          </DropdownItem>

          <DropdownMenu>
          <DropdownItem>  <Btn text="SOBERBIA" class="btn btn-dark og-hover"/>   </DropdownItem>
          <DropdownItem> <Btn text="MALICIA" class="btn btn-dark og-hover"/></DropdownItem>
          <DropdownItem> <Btn text="BANANA LIMBO" class="btn btn-dark og-hover"/></DropdownItem>
          <DropdownItem>  <Btn text="GULA" class="btn btn-dark og-hover"/></DropdownItem>
          <DropdownItem>   <Btn text="ALMA EN PENA" class="btn btn-dark og-hover"/></DropdownItem>
          <DropdownItem>   <Btn text="ENCARNACIÓN" class="btn btn-dark og-hover"/> </DropdownItem>
          </DropdownMenu>

          <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu1} alt={this.props.altMenu1}/></DropdownItem>
          <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu2} alt={this.props.altMenu2}/></DropdownItem>
          <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu3} alt={this.props.altMenu3}/></DropdownItem>
           <Btn text="EXTRAS" class="btn btn-dark extras og-hover" />         
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