import React from 'react';
import Btn from './Btn';

class Tarjettips extends React.Component {
  render() {
    return (
  <div className={"card"}>
    <div className={"card-body"}>
    <Btn text="AGREGAR ORDEN" class="btn btn-dark btn-block"></Btn>
    <table className={"table"}>
      <tbody>
        <tr className={"box-one"}>
        <th scope="row"></th>
          <td>Si el cliente quiere una hamburguesa, recomienda la soberbia</td>
        </tr>
        <tr className={"box-two"}>
          <th scope="row"></th>
          <td>En caso de que prfiera una pizza, aconseja la chaneque o la lujuria</td>
        </tr>
        <tr className={"box-three"}>
          <th scope="row"></th>
          <td>Si ya terminaron sus alimentos, no olvides sugerir un postre</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  )
  }
};

export default Tarjettips;