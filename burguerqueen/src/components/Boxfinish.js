import React from 'react';
import { UserConsumer } from '../UserContext'

import Btn from "./Btn";

class Boxfinish extends React.Component {
    
    render() {
        const data = localStorage.getItem('myData').toUpperCase();
        return (
            <UserConsumer>
                        {props => {
                            
                            console.log(props);
                                      return (
          <div className={"card bg-light"} >
          <div className="btn btn-dark btn-lg btn-block box-header"><p>ORDEN DE:</p> <p>{data}</p>
              </div>
                  <div className="card-body">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item"><h6>#    ITEM   COSTO</h6></li>
                      </ul>  
                  </div>
           
                  <div className="card-footer text-muted d-flex justify-content-center footer-dark">
                  <Btn text={this.props.footerText} class="btn finish-dark og-hover" />
                  </div>
              </div>
          )
        }}
            </UserConsumer>

        )
    }
};

export default Boxfinish;

/* <button className="card-body">
                    <h5 className="card-title">ORDEN 1</h5>
                    <p className="card-text">AQUI NOMBRE DEL CLINTX</p>
                </div> */