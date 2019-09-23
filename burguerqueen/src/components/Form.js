import React from 'react';
import { Col, Form, Input } from 'reactstrap';

export default class FormUI extends React.Component {
  render() {
    return (
      <Form>
{/*         <FormGroup row>
          <Label for={this.props.name} sm={2} size="lg">{this.props.label}</Label> */}
          <Col sm={10}>
            <Input type="text" name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} bsSize="lg" />
          </Col>
{/*         </FormGroup> */}
      </Form>
    );
  }
}

