import React from 'react';
import ItemDropdown from './ItemDropdown';
import { 
  Badge,
  ButtonDropdown, 
  CardImg,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';
import Btn from "./Btn";



export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      ItemDropdown: true
    };
    this.handleClick = this. handleClick.bind(this);
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

    
    //console.log("modifico el estado ", this.state.dropdownOpen);
    
    // return (
    //   <ButtonDropdown className={"menu-icon"} data-typefood="typefood" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    //     <DropdownToggle caret>
    //         <CardImg  data-typefood="typefood" bottom width="87px" height="87px" src={this.props.icon} alt={this.props.alt}/>
    //           <p  data-typefood="typefood" >{this.props.text}</p>
    //     </DropdownToggle>
    //     <DropdownMenu>
    //       <DropdownItem>
    //         <CardImg bottom width="87px" height="87px" src={this.props.iconMenu} alt={this.props.altMenu}/>
    //       </DropdownItem>

    //       {/* <DropdownMenu>
    //       <DropdownItem>  <Badge color="dark" pill>{"SOBERBIA"}</Badge>  </DropdownItem>
    //       <DropdownItem> <Badge color="dark" pill>{"MALICIA"}</Badge></DropdownItem>
    //       <DropdownItem> <Badge color="dark" pill>{"BANANA LIMBO"}</Badge></DropdownItem>
    //       <DropdownItem>  <Badge color="dark" pill>{"GULA"}</Badge></DropdownItem>
    //       <DropdownItem>   <Badge color="dark" pill>{"ALMA EN PENA"}</Badge></DropdownItem>
    //       <DropdownItem>   <Badge color="dark" pill>{"ENCARNACIÓN"}</Badge></DropdownItem>
    //       </DropdownMenu> */}

    //       <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu1} alt={this.props.altMenu1}/></DropdownItem>
    //       <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu2} alt={this.props.altMenu2}/></DropdownItem>
    //       <DropdownItem><CardImg bottom width="87px" height="87px" src={this.props.iconMenu3} alt={this.props.altMenu3}/></DropdownItem>
    //        <Btn text="EXTRAS" class="btn btn-dark extras og-hover" />         
    //     </DropdownMenu>
        
    //   </ButtonDropdown>
    // );
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

export default Dropdown;