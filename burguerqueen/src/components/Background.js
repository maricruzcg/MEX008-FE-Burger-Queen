import React from 'react';
import Image from '../imgFED/imagebackground.png';

class Background extends React.Component {
    getStyle = () => {
        return {
            backgroundImage: `url(${Image})`
        }
    }
    render() {
        return (
            <img src={Image} />
        )
    }
};

export default Background;
