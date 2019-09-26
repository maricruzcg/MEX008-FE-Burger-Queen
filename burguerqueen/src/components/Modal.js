/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';

import FormUI from "./Form";


class ModalUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button className={this.props.class} color="dark" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <FormUI name="costumer-name" id="costumer-name" placeholder="Nombre del cliente"/>
          </ModalBody>
          <ModalFooter>
          <Badge href="/Menu" color="dark"><Button className={"btn btn-dark"}  onClick={this.toggle}>GUARDAR</Button></Badge>
          {/*   <Button color="secondary" onClick={this.toggle}>CANCELAR</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalUI;