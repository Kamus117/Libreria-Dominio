import React, { useState } from 'react';
import '../styles/Cart.css'

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
    return (
        <div className="Cart">
            <h2>Carrito de Compras</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>Cantidad: {item.quantity}</span>
                        <button onClick={() => updateQuantity(item, 'add')}>+</button>
                        <button onClick={() => updateQuantity(item, 'subtract')}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Cart;
