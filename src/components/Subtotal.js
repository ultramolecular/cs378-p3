import React from 'react';

const Subtotal = ({ total }) => {

    return (
        <div className='subtotal'>
            <h3>Subtotal: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Subtotal;