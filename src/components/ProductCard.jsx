import React from "react";
import '../styles/ProductCard.css'

function ProductCard(book){
    return(
        <div className="ProductCard">
            <strong>{book.name}</strong>
            <img src={book.img} alt={book.name} />
            <div>
                <span>${book.price}</span>
                <button>Agregar</button>
            </div>
        </div>
    )
}

export default ProductCard;