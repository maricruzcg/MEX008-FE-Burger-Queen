import React from 'react';

class table extends React.Component {
    render() {
        return (
                <tr {this.props.text}>
                </tr>
                <tr {this.props.text}>
                </tr>
                <tr {this.props.text}>
                </tr>
           >
    }
};

export default table;
