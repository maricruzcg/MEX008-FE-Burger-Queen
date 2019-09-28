import React from 'react';
import { ListGroup, ListGroupItem, Table } from 'reactstrap';

import Btn from "./Btn";

class Boxfinish extends React.Component {
    constructor() {
        super();
        this.state = {
        client: {
            name: '',
            order: '',
        }
        };
    }

componentDidMount() {
    this.setState({
        client: {
        name: localStorage.getItem('myData').toUpperCase(),
        }
    })
}


    render() {
        return (
          <div className={"card bg-light"} >
          <div className="btn btn-dark btn-lg btn-block box-header">ORDEN DE: <p>{this.props.clientName}</p>
              </div>
                  <div className="card-body">
                  <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Costo</th>
            <th>Más</th>
          </tr>
        </thead>
        <tbody>
         {
             this.state.client.order ? 
             this.state.client.order(item => (            
                <tr>
                <th scope="row"></th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
          )) :
          <tr>
          <th scope="row">No</th>
          <td>hay items</td>
          <td></td>
          <td></td>      
        </tr>
        } 
        </tbody>

      </Table>

                  </div>
           
                  <div className="card-footer text-muted d-flex justify-content-center footer-dark">
                  <Btn text={this.props.footerText} class="btn finish-dark og-hover" />
                  </div>
              </div>
          )
    }
};

export default Boxfinish;