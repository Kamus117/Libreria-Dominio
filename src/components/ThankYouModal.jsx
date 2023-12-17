import React from 'react';
import '../styles/Cart.css';

const ThankYouModal = ({ onClose }) => {
    return (
        <div className="ThankYouModal">
            <div className="modal-content">
                <h2>¡Gracias por su compra!</h2>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ThankYouModal;