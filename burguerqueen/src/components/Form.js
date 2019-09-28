
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Form, Input, Button } from 'reactstrap';
import { UserProvider } from '../UserContext'

//FormGroup, Label,

class FormUI extends React.Component {
  constructor() {
    super();
    this.state = {
    client: ''
    };
}

  handleClick (ev) {
    ev.preventDefault();
    this.props.history.push('/Menu');
    this.props.closeModal();

console.log(this.state.client);

  };

  onChange = e =>  {
    this.setState({ client: e.target.value });
    const data = e.target.value;
    localStorage.setItem('myData', data);
};

 
  render() {

    const user = { name: this.state.client}

    return (
      <UserProvider  value={user}>
      <Form>
{/*         <FormGroup row>
          <Label for={this.props.name} sm={2} size="lg">{this.props.label}</Label> */}
          <Col sm={10}>
            <Input type="text" value={this.state.client} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} bsSize="lg" onChange={e => this.onChange(e)} required/>
          </Col>
{/*         </FormGroup> */}
          <Button type="submit" className={"btn btn-dark"}   onClick={this.handleClick.bind(this)}>GUARDAR</Button>
      </Form>
      </UserProvider>

    );
  }
}



export default withRouter(FormUI);

