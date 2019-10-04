import React from 'react';
import logo from "../imgFED/logo.png"
import { Button } from 'reactstrap';


class BoxGet extends React.Component{
    render(){
      return( 

    <section className="form-in">
        <div className="box-welcome">
        <img className="img-log" src={logo}/>
        <h2>¡TE DAMOS LA </h2>
        <h2>BIENVENIDA!</h2>
        <Button className="btn-login" color="secondary">FINALIZAR</Button>  
        
        <Button className="btn-login" color="secondary">hola</Button>  
        </div>
        <div className="box-password">

        </div>
    </section> 
    );
      }
}

export default BoxGet;

