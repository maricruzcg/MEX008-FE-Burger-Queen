import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
            <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    <Btn text="MALTEADAS" class="btn btn-secondary" />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem><Btn text="FRESA" class="btn btn-secondary" /></DropdownItem>
                    <DropdownItem><Btn text="MAZAPÁN" class="btn btn-secondary" /></DropdownItem>
                    <DropdownItem><Btn text="CHOCOMENTA" class="btn btn-secondary" /></DropdownItem>
                    <DropdownItem><Btn text="OTRO" class="btn btn-secondary" /></DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}