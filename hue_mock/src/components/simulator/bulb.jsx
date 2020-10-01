import React from 'react';

const Bulb = (props) => {
    return <li className="bulb" style={{background: `${props.color}`}}></li>;
};

export default Bulb;