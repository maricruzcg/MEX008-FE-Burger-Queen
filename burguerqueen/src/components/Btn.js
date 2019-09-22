import React from 'react';

class Btn extends React.Component {
    render() {
        return (
            <a href={this.props.href}>
                <button className="btn btn-dark"
                    type={this.props.type}
                    onClick={this.props.funct}>{this.props.text}
                </button>
            </a>
        );
    }
};

export default Btn;