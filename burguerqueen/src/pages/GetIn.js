import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import mesereando from '../imgFED/mesereando.png';

const GetIn = () => {
  return (
    <div className="form-in">
      <img className="img-log" src={mesereando} />
      <h1>EQUIPO</h1>
      <FormGroup>
        <Label for="exampleEmail">Nombre</Label>
        <Input type="email" name="email" id="example" placeholder="Mariana" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Contraseña</Label>
        <Input
          type="password"
          name="password"
          id="example"
          placeholder="password"
        />
      </FormGroup>
      <Button className="btn-login" color="secondary">
        FINALIZAR
      </Button>
    </div>
  );
};
export default GetIn;
