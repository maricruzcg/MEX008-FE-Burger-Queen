import React from 'react';

class Btn extends React.Component {
    render() {
        return (
            <a href={this.props.href}>
                <button type={this.props.type} className={"btn btn-dark"} onClick={this.props.funct}>{this.props.text}</button>
            </a>
        )
    }
};

export default Btn;