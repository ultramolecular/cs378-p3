import React from 'react';


const MenuItem = ({ title, description, imageName, price, addToCart, removeFromCart, cartQuantity }) => {
    const imgPath = require(`../images/${imageName}`);

    return (
        <div className="card mb-3">
            <img src={imgPath} className="card-img-top" alt={title}/>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p>{description}</p>
                <p className='card-price'>${price}</p>
                <div className='add-remove-buttons'>
                    <button className='btn btn-circle btn-danger' onClick={() => removeFromCart(title)}>-</button>
                    <span>{cartQuantity}</span>
                    <button className='btn btn-circle btn-success' onClick={() => addToCart({ title, price })}>+</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
