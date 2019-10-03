import React from 'react';
import { Table } from 'reactstrap';

import Btn from "./Btn";

import { ClientConsumer } from '../ClientContext'


class Boxfinish extends React.Component {
    constructor() {
        super();
        this.state = {
        client: {
            name: '',
            order: ''
        }
        };
    }

componentDidMount() {
    this.setState({
        client: {
        name: localStorage.getItem('myData').toUpperCase(),
        order: [
            {
                product: "SOBERBIA",
                price: "55",
                quantity: "1"
            },
            {
                product: "MALICIA",
                price: "65",
                quantity: "1"
            }
        ]
        }
    })
}


    render() {
        return (
            <ClientConsumer>
                        {props => {
        const client = props.client;

        // this.setState({
        //     client: client
        // })

          return (
          <div className={"card bg-light"} >
          <div className="btn btn-dark btn-lg btn-block box-header">ORDEN DE: <p>{this.props.clientName}</p>
              </div>
                  <div className="card-body">
                  <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Costo</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
         {
             this.state.client.order ? 
             this.state.client.order.map((item,i) => (            
                <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
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
        }}
              </ClientConsumer>
          )
    }
};

export default Boxfinish;