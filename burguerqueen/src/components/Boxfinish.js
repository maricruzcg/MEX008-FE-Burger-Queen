import React from 'react';
import Btn from "./Btn";

class Boxfinish extends React.Component {
    
    render() {
        return (
          <div className={"card bg-light"} >
          <div className="btn btn-dark btn-lg btn-block box-header">ORDEN DE: <p>{this.props.clientName}</p>
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
    }
};

export default Boxfinish;