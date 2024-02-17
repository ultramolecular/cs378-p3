import React from 'react';

const Subtotal = ({ cart }) => {
    // Calculate the subtotal by reducing over cart items
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='subtotal'>
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        </div>
    );
};

export default Subtotal;