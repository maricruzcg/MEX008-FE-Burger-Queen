import React from 'react';

class Boxfinish extends React.Component {
    render() {
        return (
            <div className="card bg-dark ">
                <div className="card-body">
                    <h5 className="card-title">ORDEN 1</h5>
                    <p className="card-text">AQUI NOMBRE DEL CLINTX</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Primer item</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-dark">
                        FINALIZAR
                    </button>
                </div>
            </div>
        )
    }
};

export default Boxfinish;