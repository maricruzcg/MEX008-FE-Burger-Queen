import React from 'react';
import Image from '../imgFED/imagebackground.png';

class Background extends React.Component {
    render() {
        return (
            <img className='backgroundImage' src={Image} />
        )
    }
};

export default Background;