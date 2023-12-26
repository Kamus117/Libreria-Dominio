import React from "react";
import librosDestacados from "../data/products.js";
import PopularProduct from "./PopularProduct.jsx";
import '../styles/Popular.css'

function Popular(){
    return(
        <div className="Popular">
            <h2>Libros Populares</h2>
            <div className="product-card-container">
                {librosDestacados.map((book)=>(
                    <PopularProduct key={book.id} book = {book}/>
                ))}
            </div>
        </div>
    )
}

export default Popular;