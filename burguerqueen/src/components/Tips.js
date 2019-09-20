import React from 'react';

class Tarjettips extends React.Component {
    render() {
        return (<table className={"table"}>
        <tbody>
          <tr className={"table-secondary"}>
            <th scope="row"></th>
            <td>Si el cliente quiere una hamburguesa, recomienda la soberbia</td>
          </tr>
          <tr className={"table-secondary"}>
            <th scope="row"></th>
            <td>En caso de que prfiera una pizza, aconseja la chaneque o la lujuria</td>
          </tr>
          <tr className={"table-secondary"}>
            <th scope="row">*</th>
            <td>Si ya terminaron sus alimentos, no olvides sugerir un postre</td>
          </tr>
        </tbody>
      </table>
      )
        }
      };
        
        export default Tarjettips;