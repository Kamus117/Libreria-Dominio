import React from 'react'
import '../styles/ProductCard.css'

export const PopularProduct = (props) => {
    return (
        <div className="ProductCard">
            <strong>{props.book.name}</strong>
            <img src={props.book.img} alt={props.book.name} />
            <div>
                <span>${props.book.price}</span>

                <a href="/tienda">
                    <button>Ir a Tienda</button>
                </a>
            </div>
        </div>
    );
};
export default PopularProduct;