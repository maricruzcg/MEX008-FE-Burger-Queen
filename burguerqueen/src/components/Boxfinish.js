import React from 'react';
import { Table } from 'reactstrap';
import NumericInput from 'react-numeric-input';


import Btn from './Btn';

class Boxfinish extends React.Component {
  constructor() {
    super();
    this.state = {
      client: {
        name: '',
        order: '',
        total: ''
      }
    };
  }

  componentDidMount() {
    const order = JSON.parse(localStorage.getItem('order'));
    console.log(typeof order[2].price);

    // const sum = (a, b) => {
    //   console.log(a['price']);
    //   console.log(b['price']);
    //   return a['price']+b['price'] 
    // }

    // const total = Array.isArray(order) 
    //   ? order.reduce((a, b) => {return a['price'] + b['price']},0)
    //   : 0;

    const orderPrices = order.map(item => item.price);
    const total = orderPrices.reduce((a, b) => a + b, 0);    

    const clientName = localStorage.getItem('clientName')
      ? localStorage.getItem('clientName').toUpperCase()
      : '';

   // const order = JSON.parse(localStorage.getItem('order'));

    this.setState({
      client: {
        name: clientName,
        order: order,
        total: total
      }
    });
  }

  render() {
    return (
      <div className="card bg-light">
        <div className="btn btn-dark btn-lg btn-block box-header">
          ORDEN DE: <p>{this.state.client.name}</p>
        </div>
        <div className="card-body">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Cantidad</th>
                <th>Costo</th>
              </tr>
            </thead>
            <tbody>
              {this.state.client.order ? (
                this.state.client.order.map((item, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.product}</td>
                    <td><NumericInput className={"form-control"} min={0} max={50} value={item.quantity}/></td>
                    <td>{item.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th scope="row">No</th>
                  <td>hay items</td>
                  <td />
                  <td />
                </tr>
              )}
              <tr>
                <th>#</th>
                <th>Items</th>
                <th>Total</th>
                <th>{this.state.client.total}</th>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="card-footer text-muted d-flex justify-content-center footer-dark">
          <Btn text={this.props.footerText} class="btn finish-dark og-hover" />
        </div>
      </div>
    );
  }
}

export default Boxfinish;
