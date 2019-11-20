import React from 'react';
import { ButtonDropdown, DropdownToggle, CardImg } from 'reactstrap';

export default class BtnDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    console.log(e.target);
    if (e.target.dataset.typefood !== 'typefood') {
    }
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    this.props = {
      text,
      icon,
      altIcon,
      typeFood
    };

    return (
      <ButtonDropdown
        className="menu-icon"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle caret>
          <CardImg bottom width="87px" height="87px" src={icon} alt={altIcon} />
          <p data-typefood={typeFood}>{text}</p>
        </DropdownToggle>
      </ButtonDropdown>
    );
  }
}
