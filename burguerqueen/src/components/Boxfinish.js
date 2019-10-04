import React from 'react';
import { Table } from 'reactstrap';

import Btn from './Btn';
import { ClientConsumer } from '../ClientContext';

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

  render() {
    return (
      <ClientConsumer>
        {props => {
          props
            ? console.log(props.order)
            : console.log('No hay props, boxfinish');

          // this.setState({
          //     client: client
          // })

          return (
            <div className="card bg-light">
              <div className="btn btn-dark btn-lg btn-block box-header">
                ORDEN DE: <p>{props.name}</p>
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
                    {props.order ? (
                      props.order.map((item, i) => (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{item.product}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
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
                  </tbody>
                </Table>
              </div>

              <div className="card-footer text-muted d-flex justify-content-center footer-dark">
                <Btn
                  text={this.props.footerText}
                  class="btn finish-dark og-hover"
                />
              </div>
            </div>
          );
        }}
      </ClientConsumer>
    );
  }
}

export default Boxfinish;
