import React from 'react';
import logo from "../imgFED/logo.png"
import { Button } from 'reactstrap';


class BoxGet extends React.Component{
    render(){
      return( 
        <section className="form-in">
            <section className="box-welcome">
            <img className="img-log" src={logo}/>
            <h2>¡TE DAMOS LA </h2>
            <h2>BIENVENIDA!</h2>
            
            <Button className="btn-login" color="secondary">EQUIPO</Button>  
            <Button className="btn-login btn-admin" color="secondary">ADMINISTRACIÓN</Button>  
            </section>
            <section className="box-password">
              <section className="box-center">
              <h3>Ingresa tu contraseña</h3>
              <input type="text" className="input-password"></input>


                  <div className="box-buttons">
                    <div>
                      <input className="btn-number" type="button" value="7"></input>
                      <input className="btn-number" type="button" value="8"></input>
                      <input className="btn-number" type="button" value="9"></input>
                    </div>

                    <div>
                      <input className="btn-number" type="button" value="4"></input>
                      <input className="btn-number" type="button" value="5"></input>
                      <input className="btn-number" type="button" value="6"></input>
                    </div>

                    <div>
                      <input className="btn-number" type="button" value="1"></input>
                      <input className="btn-number" type="button" value="2"></input>
                      <input className="btn-number" type="button" value="3"></input>
                    </div>

                    <div>
                      <input className="btn-number" type="button" value="<"></input>
                      <input className="btn-number" type="button" value="0"></input>
                      <input className="btn-number" type="button" value="C"></input>
                    </div>

                    </div>
    
                  <button className="">flecha</button>
              </section>              
            </section>
      
        </section> 
      );
    }
}

export default BoxGet;

