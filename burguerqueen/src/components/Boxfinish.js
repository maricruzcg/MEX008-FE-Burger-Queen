import React from 'react';
import Btn from "./Btn";

class Boxfinish extends React.Component {
    render() {
        return (
            <div className={"card bg-light"} >
                <Btn text="ORDEN" class="menu-header btn btn-dark btn-lg btn-block" />
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Primer item</li>
                    </ul>
                </div>
          

                <div className="card-footer text-muted">
                    <button className="btn btn-dark">

                        FINALIZAR
                    </button>
                </div>
            </div>
        )
    }
};

export default Boxfinish;

/* <button className="card-body">
                    <h5 className="card-title">ORDEN 1</h5>
                    <p className="card-text">AQUI NOMBRE DEL CLINTX</p>
                </div> */