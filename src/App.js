import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';


function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Add item to cart function
  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if item is already in cart
      const inCart = prevCart.find((i) => i.title === item.title);
      // If it is in the cart, increment quantity
      if (inCart) {
        return prevCart.map((i) => 
          i.title === item.title ? { ...i, quantity: i.quantity + 1} : i
        );
      }
      // If not in cart, add it
      return [...prevCart, { ...item, quantity: 1}];
    });
    // Update the price
    setTotal((prevTotal) => prevTotal + item.price);
  }

  // Remove an item from cart function
  const removeFromCart = (item) => {
    // Check if item in cart and at least 1 of it
    const inCart = cart.find((i) => i.title === item);

    setCart((prevCart) => {
      if (inCart && inCart.quantity > 1) {
        // Decrement quantity by 1
        return prevCart.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity - 1} : i
        );
      } else {
        // If not in cart or only 1, remove from cart
        return prevCart.filter((i) => i.title !== item);
      }
    });

    if (inCart) {
      // Update total price
      setTotal((prevTotal) => prevTotal - inCart.price);
    }
  };

  return (
    <div>
      <Header />
      <Menu addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
    </div>
  );
}

export default App;