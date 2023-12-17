import React, { useState } from 'react';
import ThankYouModal from './ThankYouModal';


const CartModal = ({ cartItems, setCartItems, onClose, updateQuantity, removeFromCart }) => {
    // Calcular los subtotales por producto
    const subtotals = cartItems.map((item) => item.quantity * item.price);

    // Calcular el total de la compra
    const total = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);

    const [showThankYouModal, setShowThankYouModal] = useState(false);


    const handleFinishPurchase = () => {
        setCartItems([]);
        // Cierra el modal actual
        // Muestra el modal de agradecimiento
        setShowThankYouModal(true);
        /*         onClose(); */
    };

    return (
        <div className="CartModal">
            <div className="modal-content">
                {showThankYouModal ?
                    <>
                        <h1>Gracias por su compra!</h1>
                        <button onClick={onClose}>Cerrar</button>
                    </>
                    :
                    <>
                        <h2>Carrito de Compras</h2>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={item.id}>
                                    <span>{item.name}</span>
                                    <span>//Subtotal: ${subtotals[index]}</span>
                                    <div>
                                        <span>Cantidad: {item.quantity}</span>
                                        <button onClick={() => updateQuantity(item, 'add')}>+</button>
                                        <button onClick={() => updateQuantity(item, 'subtract')}>-</button>
                                        <button onClick={() => removeFromCart(item.id)}><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="total">
                            <span>Total: ${total}</span>
                        </div>
                        <div className='comprar-cerrar'>
                        <button onClick={handleFinishPurchase}>Finalizar Compra</button>
                        <button onClick={onClose}>Cerrar</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default CartModal;