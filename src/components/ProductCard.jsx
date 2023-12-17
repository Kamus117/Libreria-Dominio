import React from "react";
import '../styles/ProductCard.css'


const ProductCard = (props) => {
    return (
        <div className="ProductCard">
            <strong>{props.book.name}</strong>
            <img src={props.book.img} alt={props.book.name} />
            <div>
                <span>${props.book.price}</span>
                <button className="addBtn" onClick={() => props.addToCart(props.book)}>
                    Agregar
                </button>
            </div>
        </div>
    );
};

export default ProductCard;