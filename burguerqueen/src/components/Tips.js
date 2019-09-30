import React from 'react';
import ModalUI from './Modal';

class Tarjettips extends React.Component {
  render() {
    return (
      <div className={"card bg-light"} >
        <div className="btn btn-dark btn-lg btn-block box-header">RECOMENDACIONES
               {/*  <Btn text="RECOMENDACIONES" class="btn btn-dark btn-lg btn-block" /> */}
               </div>
          <div className="card-body">
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

          <div className="card-footer text-muted d-flex justify-content-center footer-dark">
          <ModalUI class="btn finish-dark og-hover" buttonLabel={this.props.footerText} title="¿A QUÉ NOMBRE VA A QUEDAR LA ORDEN?"/>
                </div>
   
      </div>
  )
}
};


   
export default Tarjettips;